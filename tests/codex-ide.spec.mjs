import { test, expect } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');
const filePath = path.join(root, 'codex-ide.html');
const fileUrl = new URL(`file://${filePath.replace(/\\/g, '/')}`);

test('Codex IDE smoke: loads and switches tabs', async ({ page }) => {
  await page.goto(fileUrl.toString());
  await expect(page.getByText('CODEX')).toBeVisible();
  await expect(page.getByText('Oraculum (LLM)')).toBeVisible();

  await page.getByText('Atelier (Studio)').click();
  await expect(page.getByText('Atelier Systems')).toBeVisible();

  await page.getByRole('button', { name: 'Open Quests' }).click();
  await expect(page.getByText('Cursus (Quests)')).toBeVisible();

  await page.getByRole('button', { name: 'Close Quests' }).click();
  await expect(page.getByText('Cursus (Quests)')).toBeHidden();
});

test('Creator Lab preset list renders', async ({ page }) => {
  await page.goto(fileUrl.toString());
  await page.getByText('Atelier (Studio)').click();
  await expect(page.getByText('Creator Lab (Share + Mod)')).toBeVisible();
  await expect(page.getByText('My Presets')).toBeVisible();
});
