import { test, expect } from '@playwright/test';

test('date picker page opens', async ({ page }) => {
  await page.goto('/Datepicker.html');

  await expect(page.locator('#datepicker')).toBeVisible();
});

test('file upload control is available', async ({ page }) => {
  await page.goto('/FileUpload.html');

  await expect(page.locator('#input-4')).toBeVisible();
});

test('drag and drop page opens', async ({ page }) => {
  await page.goto('/DragAndDrop.html');

  await expect(page.locator('#draggable')).toBeVisible();
  await expect(page.locator('#droppable')).toBeVisible();
});

test('switch to alert page opens', async ({ page }) => {
  await page.goto('/Alerts.html');

  await expect(page.locator('body')).toContainText('Alert');
});

test('frames page opens', async ({ page }) => {
  await page.goto('/Frames.html');

  await expect(page.locator('iframe')).toBeVisible();
});