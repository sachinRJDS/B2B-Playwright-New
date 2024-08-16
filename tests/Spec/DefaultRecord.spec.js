import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('img', { name: 'First slide' }).click();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('testingcode');
  await page.locator('#loginusername').press('Tab');
  await page.locator('#loginpassword').fill('test@123');
  await page.locator('#loginpassword').press('Tab');
  await page.getByLabel('Log in').getByText('Close').press('Tab');
  await page.getByRole('button', { name: 'Log in' }).press('Enter');
});