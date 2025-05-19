import { expect, test } from "@playwright/test";

test("Checking for page language changes", async ({ page }) => {
  await page.goto("https://rizna.io");
  await page.getByRole("button", { name: "Accepter" }).click();

  await test.step("Home page has French language", async () => {
    await page
      .locator("header")
      .getByRole("button", { name: "fr", exact: true })
      .click();
    await expect(page).toHaveURL(/.*\/fr\/?$/);
    await expect(page.locator("h1")).toHaveText(
      /Nous\s+transformons\s*le\s+numérique\s+par\s+le\s+code\./
    );
    await expect(
      page.locator("p", {
        hasText:
          "Nous sommes une agence spécialisée dans le développement de logiciels : applications mobiles et sites web. Nous construisons des solutions évolutives avec une forte expertise sur l'environnement JavaScript et AWS.",
      })
    ).toBeVisible();
  });

  await test.step("Home page change English language", async () => {
    await page
      .locator("header")
      .getByRole("button", { name: "en", exact: true })
      .click();
    await expect(page).toHaveURL(/.*\/en\/?$/);
    await expect(page.locator("h1")).toHaveText(
      /We\s+create\s+digital\s+transformations\s+with\s+code\./
    );
    await expect(
      page.locator("p", {
        hasText:
          "We're a leading agency specializing in software development: mobile applications and websites. We build scalable solutions with a strong expertise on JavaScript environment and AWS.",
      })
    ).toBeVisible();
  });

  await test.step("Home page change Ukrainian language", async () => {
    await page
      .locator("header")
      .getByRole("button", { name: "ua", exact: true })
      .click();
    await expect(page).toHaveURL(/.*\/ua\/?$/);
    await expect(page.locator("h1")).toHaveText(
      /Ми\s+втілюємо\s+цифрові\s+трансформації\s+через\s+код\./
    );
    await expect(
      page.locator("p", {
        hasText:
          "Ми - провідна агенція, що спеціалізується на розробці програмного забезпечення: мобільних додатків та веб-сайтів. Ми створюємо масштабовані рішення з експертизою в середовищі JavaScript та AWS.",
      })
    ).toBeVisible();
  });

  await test.step("Home page has French language", async () => {
    await page
      .locator("header")
      .getByRole("button", { name: "fr", exact: true })
      .click();
    await expect(page).toHaveURL(/.*\/fr\/?$/);
    await expect(page.locator("h1")).toHaveText(
      /Nous\s+transformons\s*le\s+numérique\s+par\s+le\s+code\./
    );
    await expect(
      page.locator("p", {
        hasText:
          "Nous sommes une agence spécialisée dans le développement de logiciels : applications mobiles et sites web. Nous construisons des solutions évolutives avec une forte expertise sur l'environnement JavaScript et AWS.",
      })
    ).toBeVisible();
  });
});
