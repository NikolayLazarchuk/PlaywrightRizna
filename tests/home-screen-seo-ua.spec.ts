import { expect, test } from "@playwright/test";

test("Should the SEO structure be conformed for home screen in UA", async ({
  page,
}) => {
  await page.goto("https://rizna.io");
  await page.getByRole("button", { name: "Accepter" }).click();

  await page
    .locator("header")
    .getByRole("button", { name: "ua", exact: true })
    .click();

  await test.step("Home page has slag /ua", async () => {
    await expect(page).toHaveURL(/.*\/ua\/?$/);
  });

  await test.step("Home page title check", async () => {
    await expect(page).toHaveTitle(
      /^студія розробки веб-сайтів та мобільних додатків | rizna$/i
    );
  });

  await test.step("Home page description check", async () => {
    expect(
      await page.locator('meta[name="description"]').getAttribute("content")
    ).toBe(
      "Ми також можемо використовувати WordPress, Webflow, Shopify, Squarespace та інтегрувати Stripe, Brevo, Airtable, Strapi"
    );
  });

  await test.step("Home page has only 1 h1 and has text", async () => {
    expect(await page.locator("h1").count()).toBe(1);
    await expect(page.locator("h1")).toHaveText(
      /^ми втілюємо цифрові трансформації через код.$/i
    );
  });

  await test.step("Home page has h2 has text", async () => {
    await expect(
      page.locator("h2", {
        hasText:
          "Перетворюємо повсякденні виклики на індивідуальні цифрові рішення",
      })
    ).toBeVisible();
    await expect(
      page.locator("h2", {
        hasText: "Розкрийте весь потенціал вашого бізнесу",
      })
    ).toBeVisible();
    await expect(
      page.locator("h2", {
        hasText: "Розпочніть шлях до успіху свого вебсайту вже сьогодні!",
      })
    ).toBeVisible();
    await expect(
      page.locator("h2", {
        hasText: "Дорожня карта розробки проєкту",
      })
    ).toBeVisible();
    await expect(
      page.locator("h2", { hasText: "Наші останні проєкти" })
    ).toBeVisible();
    await expect(
      page.locator("h2", { hasText: "Кібербезпека" })
    ).toBeVisible();
    await expect(
      page.locator("h2", { hasText: "Каталог продукції" })
    ).toBeVisible();
    await expect(
      page.locator("h2", { hasText: "Маркетплейс ювелірних виробів" })
    ).toBeVisible();
    await expect(
      page.locator("h2", { hasText: "Маєте проєкт? Давайте поговоримо!" })
    ).toBeVisible();
  });

  await test.step("Home page has h3 has text", async () => {
    await expect(
      page.locator("h3", { hasText: "Мобільні додатки" })
    ).toBeVisible();
    await expect(
      page.locator("h3", { hasText: "Веб-платформи" })
    ).toBeVisible();
    await expect(
      page.locator("h3", { hasText: "Динамічні веб-сайти" })
    ).toBeVisible();
    await expect(
      page.locator("h3", { hasText: "Зовнішні інтеграції" })
    ).toBeVisible();
    await expect(
      page.locator("h3", { hasText: "Інші технології" })
    ).toBeVisible();
  });
});
