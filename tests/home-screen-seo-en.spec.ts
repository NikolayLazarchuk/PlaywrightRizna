import { expect, test } from "@playwright/test";

test("Should the SEO structure be conformed for home screen in EN", async ({
  page,
}) => {
  await page.goto("https://rizna.io");
  await page.getByRole("button", { name: "Accepter" }).click();

  await page
    .locator("header")
    .getByRole("button", { name: "en", exact: true })
    .click();

  await test.step("Home page has slag /en", async () => {
    await expect(page).toHaveURL(/.*\/en\/?$/);
  });

  await test.step("Home page title check", async () => {
    await expect(page).toHaveTitle(
      /^website and mobile application development studio | rizna$/i
    );
  });

  await test.step("Home page description check", async () => {
    expect(
      await page.locator('meta[name="description"]').getAttribute("content")
    ).toBe(
      "We can also use WordPress, Webflow, Shopify, Squarespace and integrate Stripe, Brevo, Airtable, Strapi"
    );
  });

  await test.step("Home page has only 1 h1 and has text", async () => {
    expect(await page.locator("h1").count()).toBe(1);
    await expect(page.locator("h1")).toHaveText(
      /^we create digital transformations with code.$/i
    );
  });

  await test.step("Home page has h2 has text", async () => {
    await expect(
      page.locator("h2", {
        hasText:
          "Turning your everyday challenges into custom digital solutions",
      })
    ).toBeVisible();
    await expect(
      page.locator("h2", {
        hasText: "Unlock the full potential of your business",
      })
    ).toBeVisible();
    await expect(
      page.locator("h2", {
        hasText: "Start your website’s success journey today!",
      })
    ).toBeVisible();
    await expect(
      page.locator("h2", {
        hasText: "Project development roadmap",
      })
    ).toBeVisible();
    await expect(
      page.locator("h2", { hasText: "Our latest projects" })
    ).toBeVisible();
    await expect(
      page.locator("h2", { hasText: "Cybersecurity" })
    ).toBeVisible();
    await expect(
      page.locator("h2", { hasText: "Catalog of products" })
    ).toBeVisible();
    await expect(
      page.locator("h2", { hasText: "Jewelry marketplace" })
    ).toBeVisible();
    await expect(
      page.locator("h2", { hasText: "Got a project? Let’s Talk!" })
    ).toBeVisible();
  });

  await test.step("Home page has h3 has text", async () => {
    await expect(
      page.locator("h3", { hasText: "Mobile applications" })
    ).toBeVisible();
    await expect(
      page.locator("h3", { hasText: "Web platforms" })
    ).toBeVisible();
    await expect(
      page.locator("h3", { hasText: "Dynamic websites" })
    ).toBeVisible();
    await expect(
      page.locator("h3", { hasText: "External integrations" })
    ).toBeVisible();
    await expect(
      page.locator("h3", { hasText: "Other technologies" })
    ).toBeVisible();
  });
});
