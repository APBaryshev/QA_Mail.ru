import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://mail.ru/');
});

test.describe('Main Page', () => {
test('Header', async ({ page }) => {
await page.getByTestId('grid-header').locator('use').click();
	let locator1 = page.getByTestId('whiteline');
	await locator1.getByRole('link', { name: 'Mail.ru' }).click();
	await locator1.getByRole('link', { name: 'Почта' }).click();
	await page.locator('.login-header').isVisible();
	await locator1.getByRole('link', { name: 'Облако' }).click();
	await locator1.getByRole('link', { name: 'Одноклассники' }).click();
	await locator1.getByRole('link', { name: 'ВКонтакте' }).click();
	await locator1.getByRole('link', { name: 'Новости' }).click();
	await locator1.getByRole('link', { name: 'Знакомства' }).click();
	await page.getByText('Все проекты').click();
	await page.getByRole('link', { name: 'Регистрация' }).click();
	await locator1.getByRole('button', { name: 'Войти' }).click();
	});

test('Main column', async ({ page }) =>{
	await page.getByTestId('grid-header').locator('use').click();
	page.frameLocator('iframe').getByText('Поиск Яндекса').isVisible;
	page.getByTestId('news-tabs').isVisible;
  await page.getByTestId('news-tabs-tab-item-main').isVisible();
  await page.getByTestId('news-tabs-tab-item-ukraine2022').isVisible();
  await page.getByTestId('news-tabs-tab-item-regional').isVisible();
  await page.getByTestId('news-tabs-tab-item-sport').isVisible();
  await page.getByTestId('news-tabs-tab-item-lady').isVisible();
  await page.getByTestId('news-tabs-tab-item-auto').isVisible();
  await page.getByTestId('news-tabs-tab-item-cinema').isVisible();
  await page.getByTestId('news-tabs-tab-item-hitech').isVisible();
  await page.getByTestId('news-tabs-tab-item-games').isVisible();
	await page.getByTestId('news-tabs-tab-item-deti').isVisible();
	await page.getByTestId('news-tabs-tab-item-health').isVisible();
	await page.getByTestId('news-tabs-tab-item-dom').isVisible();
	await page.getByTestId('news-tabs-tab-item-pets').isVisible();
	await page.getByTestId('news-content').isVisible();
	await page.getByTestId('weather').isVisible();
	await page.getByTestId('rates').isVisible();
	await page.getByLabel('tv-widget').isVisible();
});

test('Left column and footer', async ({ page }) =>{
	await page.getByTestId('grid-header').locator('use').click();
	let locator2 = page.getByTestId('mailbox');
	await page.getByTestId('logo-item').getByRole('link', { name: 'Mail.ru' }).isVisible();
	await locator2.getByRole('link', { name: 'Почта' }).isVisible();
	await locator2.getByRole('link', { name: 'Облако' }).isVisible();
	await locator2.getByRole('link', { name: 'Календарь' }).isVisible();
	await locator2.getByRole('link', { name: 'Задачи' }).isVisible();
	await locator2.getByRole('link', { name: 'Видеозвонки' }).isVisible();
	await locator2.getByRole('link', { name: 'Оплата' }).isVisible();
	await locator2.getByRole('button', { name: 'Войти' }).isVisible();
	await locator2.getByRole('link', { name: 'Создать почту' }).isVisible();
	await page.getByTestId('horo-item').isVisible();
	await page.getByRole('link', { name: 'Политика конфиденцильности' }).isVisible();
	await page.getByRole('link', { name: 'О компании' }).isVisible();
	await page.getByRole('link', { name: '#more_20.svg?sprite ' }).isVisible();
	});

	console.log('The tests is completed');
});
