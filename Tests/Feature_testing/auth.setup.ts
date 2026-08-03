import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('login sekali, simpan sesi buat test lain', async ({ page }) => {
  const email = process.env.TEST_USER_EMAIL;
  const password = process.env.TEST_USER_PASSWORD;

  if (!email || !password) {
    throw new Error(
      'TEST_USER_EMAIL / TEST_USER_PASSWORD belum diset di .env.local'
    );
  }

  await page.goto('/auth/login');
  await page.locator('#login-email').fill(email);
  await page.locator('#login-password').fill(password);
  page.on('framenavigated', (frame) => {
    if (frame === page.mainFrame()) {
      console.log('>>> PINDAH KE:', frame.url());
    }
  });
  await page.locator('#btn-login').click();
  await page.waitForTimeout(5000);
  await expect(page).toHaveURL(/\/dashboard/, { timeout: 15000 });
  await page.context().storageState({ path: authFile });
});