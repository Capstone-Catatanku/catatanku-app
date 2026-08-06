import { test, expect } from '@playwright/test';

test('menampilkan pesan error saat login dengan kredensial salah', async ({ page }) => {
  // Arrange: buka halaman login
  await page.goto('/auth/login');

  await page.locator('#login-email').fill('emailsalah@test.com');
  await page.locator('#login-password').fill('passwordsalah123');
  await page.locator('#btn-login').click();
  const errorBanner = page.getByText('Email atau kata sandi salah');
  await expect(errorBanner).toBeVisible();
  await expect(page).toHaveURL(/\/auth\/login/);
});