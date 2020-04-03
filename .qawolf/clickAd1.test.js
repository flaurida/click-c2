const qawolf = require("qawolf");
const selectors = require("./selectors/clickAd1.json");

let browser;
let page;

beforeAll(async () => {
  browser = await qawolf.launch();
  const context = await browser.newContext();
  await qawolf.register(context);
  page = await context.newPage();
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test('clickAd1', async () => {
  await page.goto("https://google.com/");
  await page.click(selectors["0_q_input"]);
  await page.type(selectors["1_q_input"], "competitive computing");
  await page.press(selectors["7_q_input"], "Enter");
  await page.click(selectors["8_fprsl_a"]);
  // await page.click(selectors["9_vn_1_s_0_p_1_c_0_a"]);
  // await page.click(selectors["10_a"]);
  // await page.click(selectors["11_a"]);
  // await qawolf.scroll(page, "html", { x: 0, y: 0 });
});