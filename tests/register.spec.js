import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage.js';

test.describe('AutomationTesting Register Page', () => {
  test('register page loads successfully', async ({ page }) => {
    let registerPage = new RegisterPage(page);

    await registerPage.open();

    await expect(page).toHaveTitle(/Register/i);
    await expect(registerPage.firstName).toBeVisible();
    await expect(registerPage.lastName).toBeVisible();
  });

  test('can enter registration details and select controls', async ({ page }) => {
    let registerPage = new RegisterPage(page);

    await registerPage.open();
    await registerPage.enterBasicDetails();

    await registerPage.male.check();
    await registerPage.hobbiesCricket.check();
    await registerPage.hobbiesMovies.check();

    await expect(registerPage.firstName).toHaveValue('Swapnika');
    await expect(registerPage.lastName).toHaveValue('Pulipaty');
    await expect(registerPage.male).toBeChecked();
    await expect(registerPage.hobbiesCricket).toBeChecked();
  });
});