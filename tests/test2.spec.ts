import { test, expect, Page } from '@playwright/test';
	
test('check open form login', async ({ page }) => {
	test.setTimeout(60000);
		const btnComeIn1 = page.getByTestId('mailbox').getByRole('button', { name: 'Войти' });
 		const inputFormLogin = page.frameLocator('.ag-popup__frame__layout__iframe').getByPlaceholder('Имя аккаунта');
    const btnComeInFormLogin = page.frameLocator('.ag-popup__frame__layout__iframe').locator('[data-test-id="next-button"]');
    const headerFormPassword = page.getByRole('heading', { name: 'Введите пароль' });
		const formPassword = page.frameLocator('.ag-popup__frame__layout__iframe').getByPlaceholder('Пароль');
		const btnComeIn2 = page.frameLocator('.ag-popup__frame__layout__iframe').locator('[data-test-id="submit-button"]');
		const page6 = page.getByTestId('whiteline');
    await page.goto('https://mail.ru/');
    await btnComeIn1.waitFor({ state: 'visible' });
		expect (await btnComeIn1.isVisible()).toBe(true);
		await btnComeIn1.click();
		await inputFormLogin.isVisible();
		await inputFormLogin.fill('misterbinqa');
		await btnComeInFormLogin.click();
		await formPassword.fill('privetmrbin');
		await btnComeIn2.click();
		await page6.locator('"Почта"').isVisible();
	//const page1Promise = page.waitForEvent('popup');
  //await page.getByRole('link', { name: 'Облако' }).click();
  await page6.locator('Облако').isVisible();
	//const page1 = await page1Promise;
  //const page2Promise = page.waitForEvent('popup');
  //await page.getByRole('link', { name: 'Календарь' }).click();
  await page6.locator('Календарь').isVisible();
	//const page2 = await page2Promise;
  //await page2.goto('https://x.calendar.mail.ru/?utm_source=portal&utm_medium=portal_navigation_under_search_exp&utm_campaign=x.calendar.mail.ru&mt_click_id=mt-wim9e3-1687613188-1960210612&mt_sub1=e.mail.ru');
  //await page2.goto('https://x.calendar.mail.ru/month/today/?utm_source=portal&utm_medium=portal_navigation_under_search_exp&utm_campaign=x.calendar.mail.ru&mt_click_id=mt-wim9e3-1687613188-1960210612&mt_sub1=e.mail.ru');
  //const page3Promise = page.waitForEvent('popup');
  //await page.getByRole('link', { name: 'Задачи' }).click();
  await page6.locator('Задачи').isVisible();
	//const page3 = await page3Promise;
  //const page4Promise = page.waitForEvent('popup');
  //await page.getByRole('link', { name: 'Контакты' }).click();
  //const page4 = await page4Promise;
  //const page5Promise = page.waitForEvent('popup');
  await page6.locator('Контакты').isVisible();
	//await page.getByRole('link', { name: 'Звонки' }).click();
  //const page5 = await page5Promise;
  await page6.locator('Звонки').isVisible();
	//await page.getByText('Все проекты').click();
  await page6.locator('Все проекты').isVisible();
	await page.locator('.ph-marusia').isVisible();
  await page.getByRole('img', { name: 'misterbinqa@mail.ru' }).isVisible();
  await page.getByRole('link', { name: 'Социальные сети' }).isVisible();
  await page.getByRole('link', { name: 'Госписьма' }).isVisible();
  await page.getByRole('link', { name: 'Чеки' }).isVisible();
  await page.getByRole('link', { name: 'Отправленные' }).isVisible();
  await page.getByRole('link', { name: 'Черновики' }).isVisible();
  await page.getByRole('link', { name: 'Спам' }).isVisible();
  await page.getByRole('link', { name: 'Корзина' }).isVisible();
	await page.getByText('Новая папка').isVisible();
  await page.locator('[data-test-id="cancel"]').isVisible();
  await page.locator('#app-canvas').getByText('Выделить все').isVisible();
  await page.locator('#app-canvas').getByText('Снять выделение').isVisible();
  await page.getByText('Отметить все прочитанными').isVisible();
  await page.getByText('Отменить').isVisible();
  await page.locator('#app-canvas').getByText('Фильтр').isVisible();
		
});