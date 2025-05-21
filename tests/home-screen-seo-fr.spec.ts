import { expect, test } from "@playwright/test";

test("Should the SEO structure be conformed for home screen in FR", async ({
  page,
}) => {
  await page.goto("https://rizna.io");
  await page.getByRole("button", { name: "Accepter" }).click();

  await page
    .locator("header")
    .getByRole("button", { name: "fr", exact: true })
    .click();

  await test.step("Home page has slag /fr", async () => {
    await expect(page).toHaveURL(/.*\/fr\/?$/);
  });

  await test.step("Home page title check", async () => {
    await expect(page).toHaveTitle(
      /^website and mobile application development studio | RIZNA$/i
    );
  });

  await test.step("Home page description check", async () => {
    expect(
      await page.locator('meta[name="description"]').getAttribute("content")
    ).toBe(
      "Nous pouvons également utiliser WordPress, Webflow, Shopify, Squarespace et intégrer Stripe, Brevo, Airtable, Strapi"
    );
  });

  await test.step("Home page has only 1 h1 and has text", async () => {
    expect(await page.locator("h1").count()).toBe(1);
    await expect(page.locator("h1")).toHaveText(
      /Nous\s+transformons\s*le\s+numérique\s+par\s+le\s+code\./
    );
  });

  await test.step("Home page has h2 has text", async () => {
    await expect(
      page.locator("h2", {
        hasText:
          "Transformer vos défis quotidiens en solutions numériques personnalisées",
      })
    ).toBeVisible();
    await expect(
      page.locator("h2", {
        hasText: "Libérez tout le potentiel de votre entreprise",
      })
    ).toBeVisible();
    await expect(
      page.locator("h2", {
        hasText:
          "Commencez dès aujourd'hui le voyage vers le succès de votre site web!",
      })
    ).toBeVisible();
    await expect(
      page.locator("h2", {
        hasText: "Feuille de route du développement du projet",
      })
    ).toBeVisible();
    await expect(
      page.locator("h2", { hasText: "Nos derniers projets" })
    ).toBeVisible();
    await expect(
      page.locator("h2", { hasText: "La Cybersécurité" })
    ).toBeVisible();
    await expect(
      page.locator("h2", { hasText: "Catalogue des produits" })
    ).toBeVisible();
    await expect(
      page.locator("h2", { hasText: "Marché de la joaillerie" })
    ).toBeVisible();
    await expect(
      page.locator("h2", { hasText: "Vous avez un projet ? Parlons-en!" })
    ).toBeVisible();
  });

  await test.step("Home page has h3 has text", async () => {
    await expect(
      page.locator("h3", { hasText: "Applications mobiles" })
    ).toBeVisible();
    await expect(
      page.locator("h3", { hasText: "Plateformes web" })
    ).toBeVisible();
    await expect(
      page.locator("h3", { hasText: "Sites web dynamiques" })
    ).toBeVisible();
    await expect(
      page.locator("h3", { hasText: "Intégrations externes" })
    ).toBeVisible();
    await expect(
      page.locator("h3", { hasText: "Autres technologies" })
    ).toBeVisible();
  });
});
