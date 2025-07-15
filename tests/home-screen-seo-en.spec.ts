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

  await test.step("Home page has slug /en", async () => {
    await expect(page).toHaveURL(/.*\/en\/?$/);
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
      /^We create digital solutions with code.$/i
    );
  });

  await test.step("Home page has h2 with correct texts", async () => {
    const h2Headings = [
      "Transform your everyday challenges into benefits by creating automations",
      "Unlock the full potential of your business",
      "Start your website’s success journey today!",
      "Project development roadmap",
      "Our latest projects",
      "Beauty of Paris",
      "Cybersecurity",
      "Travel planner",
      "Jewelry marketplace",
      "Smart Recommender",
      "Travel Boost",
      "Got a project? Let’s Talk!",
    ];

    for (const heading of h2Headings) {
      await expect(page.locator("h2", { hasText: heading })).toBeVisible();
    }
  });

  await test.step("Home page has h3 with correct texts", async () => {
    const h3Headings = [
      /^Define$/,
      /^Define tech strategy around your product$/,
      /^Test$/,
      /^Test your product market fit$/,
      /^Develop$/,
      /^Develop your product$/,
      /^Scale Up$/,
      /^Scale your business$/,
      /^External integrations$/,
      /^E-commerce & websites$/,
      /^Mobile & web applications$/,
      /^Infrastructure & platforms$/,
      /^Other technologies$/,
    ];

    for (const heading of h3Headings) {
      await expect(page.locator("h3", { hasText: heading })).toBeVisible();
    }
  });
});
