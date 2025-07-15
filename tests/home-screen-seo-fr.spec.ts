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

  await test.step("Home page has slug /fr", async () => {
    await expect(page).toHaveURL(/.*\/fr\/?$/);
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
      /^Nous transformons le numérique par le code.$/i
    );
  });

  await test.step("Home page has h2 with correct texts", async () => {
    const h2Headings = [
      "Transformer vos défis quotidiens en solutions numériques personnalisées",
      "Libérez tout le potentiel de votre entreprise",
      "Commencez dès aujourd'hui le voyage vers le succès de votre site web!",
      "Feuille de route du développement du projet",
      "Nos derniers projets",
      "Beauty of Paris",
      "La Cybersécurité",
      "Planificateur de voyage",
      "Marché de la joaillerie",
      "Recommandeur intelligent",
      "Coup de pouce pour les voyages",
      "Vous avez un projet ? Parlons-en!",
    ];

    for (const heading of h2Headings) {
      await expect(page.locator("h2", { hasText: heading })).toBeVisible();
    }
  });

  await test.step("Home page has h3 with correct texts", async () => {
    const h3Headings = [
      /^Define$/,
      /^Définir une stratégie technique autour de votre produit$/,
      /^Test$/,
      /^Testez l'adéquation de votre produit au marché$/,
      /^Develop$/,
      /^Développer le produit$/,
      /^Scale Up$/,
      /^Développez votre activité$/,
      /^Intégrations externes$/,
      /^E-commerce et sites eb$/,
      /^Applications mobiles et Web$/,
      /^Infrastructure et plateformes$/,
      /^Autres technologies$/,
    ];

    for (const heading of h3Headings) {
      await expect(page.locator("h3", { hasText: heading })).toBeVisible();
    }
  });
});
