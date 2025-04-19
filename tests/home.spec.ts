import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Home', () => {
  test('has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Elements/);
  });

  test('shows login button when user is not authorized', async ({ page }) => {
    const authButton = page.getByTestId('auth-button');
    await expect(authButton).toBeVisible();
  });

  test('shows link to list after login', async ({ page }) => {
    const authButton = page.getByTestId('auth-button');
    await authButton.click();
    const elementsLink = page.getByTestId('list-link');
    await expect(elementsLink).toBeVisible();
  });

  test('navigates to list page after clicking link', async ({ page }) => {
    await page.getByTestId('auth-button').click();
    await page.getByTestId('list-link').click();
    await expect(page).toHaveURL('/list');
  });
});
