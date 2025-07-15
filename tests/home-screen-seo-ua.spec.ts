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

  await test.step("Home page has title", async () => {
    const title = await page.title();
    expect(title).not.toBeNull();
    expect(title.trim().length).toBeGreaterThan(0);
  });

  await test.step("Home page has description", async () => {
    const description = await page
      .locator('meta[name="description"]')
      .getAttribute("content");
    expect(description).not.toBeNull();
    expect((description ?? "").trim().length).toBeGreaterThan(0);
  });

  await test.step("Home page has only 1 h1 and has text", async () => {
    expect(await page.locator("h1").count()).toBe(1);
    await expect(page.locator("h1")).toHaveText(
      /^втілюємо цифрові рішення з кодом.$/i
    );
  });

  await test.step("Home page has h2 with correct texts", async () => {
    const h2Headings = [
      "Перетворюємо повсякденні виклики на індивідуальні цифрові рішення",
      "Розкрийте весь потенціал вашого бізнесу",
      "Розпочніть шлях до успіху свого вебсайту вже сьогодні!",
      "Дорожня карта розробки проєкту",
      "Наші останні проєкти",
      "Beauty of Paris",
      "Кібербезпека",
      "Планувальник подорожей",
      "Маркетплейс ювелірних виробів",
      "Розумний порадник",
      "Подорожній помічник",
      "Маєте проєкт? Обговоримо!",
    ];

    for (const heading of h2Headings) {
      await expect(page.locator("h2", { hasText: heading })).toBeVisible();
    }
  });

  await test.step("Home page has h3 with correct texts", async () => {
    const h3Headings = [
      /^Define$/,
      /^Визначте технологічну стратегію навколо вашого продукту$/,
      /^Test$/,
      /^Перевірте відповідність вашого продукту ринку$/,
      /^Develop$/,
      /^Створіть свій продукт$/,
      /^Scale Up$/,
      /^Масштабуйте свій бізнес$/,
      /^Зовнішні інтеграції$/,
      /^E-commerce та веб-сайти$/,
      /^Мобільні та веб додатки$/,
      /^Інфраструктура та платформи$/,
      /^Інші технології$/,
    ];

    for (const heading of h3Headings) {
      await expect(page.locator("h3", { hasText: heading })).toBeVisible();
    }
  });
});
