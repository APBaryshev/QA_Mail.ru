import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://mail.ru/');
});

test.describe('Main Page', () => {
test('Header', async ({ page }) => {
	//test.setTimeout(60000);
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
	await locator1.locator('div').filter({ hasText: 'Mail.ru Почта Облако Одноклассники ВКонтакте Новости Знакомства Все проекты Реги' }).locator('div').nth(4).isVisible();
		});

test('Main column', async ({ page }) =>{
	let locator2 = page.frameLocator('iframe').getByText('Поиск Яндекса');
	let locator3 = page.getByTestId('news-tabs');
	locator2.isVisible;
	await page.getByRole('button', { name: 'Найти' }).isVisible();
	await page.getByRole('button', { name: 'Перейти' }).isVisible();
	await locator3.getByRole('link', { name: 'Новости.ru' }).isVisible();
	await locator3.getByRole('link', { name: 'Спецоперация' }).isVisible();
	await locator3.getByRole('link', { name: 'Москва' }).isVisible();
	await locator3.getByRole('link', { name: 'Спорт' }).isVisible();
	await locator3.getByRole('link', { name: 'Леди' }).isVisible();
	await locator3.getByRole('link', { name: 'Авто' }).isVisible();
	await locator3.getByRole('link', { name: 'Кино' }).isVisible();
	await locator3.getByRole('link', { name: 'Hi-Tech' }).isVisible();
	await locator3.getByRole('link', { name: 'Игры' }).isVisible();
	await locator3.getByRole('link', { name: 'Дети' }).isVisible();
	await locator3.getByRole('link', { name: 'Здоровье' }).isVisible();
	await page.getByTestId('news-more').getByRole('button', { name: 'tabs__dropdown-button' }).isVisible();
	await page.getByTestId('news-content').isVisible();
	await page.getByTestId('weather').isVisible();
	await page.getByTestId('rates').isVisible();
	await page.getByLabel('tv-widget').isVisible();
});

test('Left column and footer', async ({ page }) =>{
	let locator4 = page.getByTestId('mailbox');
	await page.getByTestId('logo-item').getByRole('link', { name: 'Mail.ru' }).isVisible();
	await page.getByTestId('doodle-item').getByRole('link', { name: 'День наблюдения за облаками' }).isVisible();
	await locator4.getByRole('link', { name: 'Почта' }).isVisible();
	await locator4.getByRole('link', { name: 'Облако' }).isVisible();
	await locator4.getByRole('link', { name: 'Календарь' }).isVisible();
	await locator4.getByRole('link', { name: 'Задачи' }).isVisible();
	await locator4.getByRole('link', { name: 'Видеозвонки' }).isVisible();
	await locator4.getByRole('link', { name: 'Оплата' }).isVisible();
	await locator4.getByRole('button', { name: 'Войти' }).isVisible();
	await locator4.getByRole('link', { name: 'Создать почту' }).isVisible();
	await page.getByTestId('horo-item').isVisible();
	await page.getByRole('link', { name: 'Политика конфиденцильности' }).isVisible();
	await page.getByRole('link', { name: 'О компании' }).isVisible();
	await page.getByRole('link', { name: '#more_20.svg?sprite ' }).isVisible();
	});

	console.log('The tests is completed');
});
