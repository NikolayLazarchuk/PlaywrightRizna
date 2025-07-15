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
          "Nous sommes une agence spécialisée dans le développement de logiciels : applications mobiles, plateformes commerciales et sites web.",
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
      /We\s+create\s+digital\s+solutions\s+with\s+code\./
    );
    await expect(
      page.locator("p", {
        hasText:
          "We're a leading agency specializing in software development: mobile applications, business platforms and websites.",
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
      /Втілюємо\s+цифрові\s+рішення\s+з\s+кодом\./
    );
    await expect(
      page.locator("p", {
        hasText:
          "Ми - провідна агенція, що спеціалізується на розробці програмного забезпечення: мобільних додатків, бізнес-платформ та веб-сайтів.",
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
          "Nous sommes une agence spécialisée dans le développement de logiciels : applications mobiles, plateformes commerciales et sites web.",
      })
    ).toBeVisible();
  });
});
