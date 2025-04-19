import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('auth-button').click();
  await page.getByTestId('list-link').click();
});

test.describe('List', () => {
  test('has correct header', async ({ page }) => {
    const listHeader = page.getByTestId('list-header');
    await expect(listHeader).toBeVisible();
  });

  test('has no elements at the beginning', async ({ page }) => {
    const listItems = page.locator('[data-testid="list-element"]');
    await expect(listItems).toHaveCount(0);
  });

  test('adds new elements with correct titles', async ({ page }) => {
    const input = page.getByTestId('element-input');
    const button = page.getByTestId('element-button');
    
    await input.fill('Lorem ipsum');
    await button.click();
    
    await input.fill('Dolor sit amet');
    await button.click();

    const items = page.locator('[data-testid="list-element"]');
    await expect(items).toHaveCount(2);
    await expect(items.nth(0)).toContainText('Lorem ipsum');
    await expect(items.nth(1)).toContainText('Dolor sit amet');
  });
});
