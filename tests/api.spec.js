import { test, expect } from '@playwright/test';

test.describe('API Automation with Playwright', () => {
  test('GET request returns successful response', async ({ request }) => {
    let response = await request.get('https://reqres.in/api/users?page=2');

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    let responseBody = await response.json();
    expect(responseBody.data.length).toBeGreaterThan(0);
  });

  test('POST request returns created response', async ({ request }) => {
    let response = await request.post('https://reqres.in/api/users', {
      data: {
        name: 'Swapnika',
        job: 'QA Engineer'
      }
    });

    expect(response.status()).toBe(201);

    let responseBody = await response.json();
    expect(responseBody.name).toBe('Swapnika');
    expect(responseBody.job).toBe('QA Engineer');
  });
});