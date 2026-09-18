const { chromium } = require("playwright");

const PAGES = [
  { path: "/", name: "home" },
  { path: "/tratamentos/laminados-ceramicos", name: "tratamento" },
  { path: "/sobre", name: "sobre" },
  { path: "/casos-clinicos", name: "casos-clinicos" },
  { path: "/faq-contato", name: "faq-contato" },
];

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

(async () => {
  const browser = await chromium.launch({
    executablePath: "/opt/pw-browsers/chromium",
  });

  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    });
    for (const p of PAGES) {
      const page = await context.newPage();
      await page.goto(`http://localhost:4173${p.path}`, { waitUntil: "networkidle" });
      // Scroll through the whole page first so lazy-loaded images trigger and finish.
      await page.evaluate(async () => {
        const step = 600;
        for (let y = 0; y < document.body.scrollHeight; y += step) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 60));
        }
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(500);
      await page.evaluate(async () => {
        const imgs = Array.from(document.querySelectorAll("img"));
        await Promise.all(
          imgs.map((img) =>
            img.complete
              ? Promise.resolve()
              : new Promise((res) => {
                  img.addEventListener("load", res);
                  img.addEventListener("error", res);
                })
          )
        );
      });
      await page.screenshot({
        path: `/tmp/screenshots/${p.name}-${vp.name}.png`,
        fullPage: true,
      });
      await page.close();
      console.log(`Captured ${p.name}-${vp.name}`);
    }
    await context.close();
  }

  await browser.close();
})();
