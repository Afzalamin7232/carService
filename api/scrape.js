const chromium = require("chrome-aws-lambda");
const puppeteer = require("puppeteer-core");

module.exports = async (req, res) => {
  let browser = null;
  try {
    const executablePath = (await chromium.executablePath) || puppeteer.executablePath();

    browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath,
      headless: chromium.headless,
    });

    const page = await browser.newPage();
    await page.goto("https://example.com", { waitUntil: "networkidle2" });

    const title = await page.title();

    res.status(200).json({ title });
  } catch (err) {
    console.error("Scrape error:", err);
    res.status(500).json({ error: err.message });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
};
