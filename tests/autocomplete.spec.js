import { test, expect } from '@playwright/test';

test('autocomplete field displays matching suggestions', async ({ page }) => {
  await page.goto('/AutoComplete.html');

  autocomplete = page.locator('input.ui-autocomplete-input');

  await autocomplete.fill('Ind');

  suggestions = page.locator('.ui-autocomplete li');
  await expect(suggestions.first()).toBeVisible();
});