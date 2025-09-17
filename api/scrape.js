// api/scrape.js
import chromium from "chrome-aws-lambda";

export default async function handler(req, res) {
  let browser = null;

  try {
    browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: true,
    });

    const page = await browser.newPage();
    await page.goto("https://example.com", { waitUntil: "networkidle2" });

    const title = await page.title();

    res.status(200).json({ success: true, title });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }
}
