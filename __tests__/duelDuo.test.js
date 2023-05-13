const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("draw button displays all robots", async () => {
    const choicesId = driver.findElement(By.id("choices"));
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("draw")).click();
    await driver.wait(until.elementIsVisible(choicesId), 1000);
  });

  test("add to duo botton displays robot in player duo", async () => {
    const playerDuo = driver.findElement(By.id("player-duo"));
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("draw")).click();
    await driver.findElement(By.className("bot-btn")).click();
    await driver.wait(until.elementIsVisible(playerDuo), 1000);
  });
});
