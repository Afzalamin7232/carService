import chromium from "chrome-aws-lambda";
import puppeteer from "puppeteer-core";

export default async function handler(req, res) {
  try {
    const browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
    });

    const page = await browser.newPage();
    await page.goto("https://example.com", { waitUntil: "networkidle2" });

    // Example: get page title
    const title = await page.title();

    await browser.close();

    res.status(200).json({ title });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}
