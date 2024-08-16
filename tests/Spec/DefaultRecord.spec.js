import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('img', { name: 'First slide' }).click();
  await page.getByRole('link', { name: 'Log in' }).click();
  console.log("new");
  

});
