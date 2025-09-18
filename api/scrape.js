const puppeteer = require("puppeteer-core");
const chromium = require("@sparticuz/chromium");

(async () => {
  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath(),
    headless: chromium.headless,
  });

  const page = await browser.newPage();
  await page.goto("https://example.com");
  console.log(await page.title());
  await browser.close();
})();
