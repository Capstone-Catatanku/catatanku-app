import { test, expect } from '@playwright/test';

test.describe('Tambah Dompet Baru', () => {

  test('berhasil menambah dompet baru dengan data valid', async ({ page }) => {
    const namaDompetBaru = `Test Dompet ${Date.now()}`;

    await page.goto('/dashboard');
    await page.locator('button:has(svg.lucide-pencil)').first().click();
    await page.getByText('Tambah Tabungan').click();
    await page.getByPlaceholder('Contoh : BCA, Cash, Dana').fill(namaDompetBaru);
    await page.getByPlaceholder('0').fill('500000');
    await page.getByText('Simpan').click();
    await expect(page.getByText(namaDompetBaru)).toBeVisible();
  });

  test('menampilkan alert saat nama dompet dikosongkan', async ({ page }) => {
    await page.goto('/dashboard');

    await page.locator('button:has(svg.lucide-pencil)').first().click();
    await page.getByText('Tambah Tabungan').click();
    let pesanAlert = '';
    page.once('dialog', async (dialog) => {
      pesanAlert = dialog.message();
      await dialog.accept();
    });

    // Sengaja tidak isi nama, langsung klik Simpan
    await page.getByPlaceholder('0').fill('100000');
    await page.getByText('Simpan').click();
    await page.waitForTimeout(500);

    expect(pesanAlert).toBe('Nama tabungan tidak boleh kosong');
  });

});