import { test, expect, Page } from '@playwright/test';
//import {LoginPageAction} from '../actions/loginPageAction';


test.describe('Email', () => {
	test('check open form login and input', async ({ page }) => {
		const btnComeIn1 = page.getByTestId('mailbox').getByRole('button', { name: 'Войти' });
    //const formLogin = page.locator("//h3[text()='Войти в аккаунт']");
		//const formLogin = page.getByRole('heading', { name: 'Войти в аккаунт' });
    //const inputFormLogin = page.locator("//input[@placeholder='Имя аккаунта']");
		const inputFormLogin = page.frameLocator('.ag-popup__frame__layout__iframe').getByPlaceholder('Имя аккаунта');
    //const btnComeInFormLogin = page.locator("//span[text()='Ввести пароль']");
		const btnComeInFormLogin = page.frameLocator('.ag-popup__frame__layout__iframe').locator('[data-test-id="next-button"]');
    //const headerFormPassword = page.locator("//h3[text()='Введите пароль']");
		const headerFormPassword = page.getByRole('heading', { name: 'Введите пароль' });
		//const formPassword = page.locator("//input[@type='password']");
		const formPassword = page.frameLocator('.ag-popup__frame__layout__iframe').getByPlaceholder('Пароль');
		const btnComeIn2 = page.frameLocator('.ag-popup__frame__layout__iframe').locator('[data-test-id="submit-button"]');
    
		await page.goto('https://mail.ru/');
    await btnComeIn1.waitFor({ state: 'visible' });
		expect (await btnComeIn1.isVisible()).toBe(true);
		await btnComeIn1.click();
		await inputFormLogin.click();
		await inputFormLogin.fill('misterbinqa');
		//await page.locator("//span[text()='@mail.ru']").isVisible();
    await btnComeInFormLogin.click();
    await formPassword.click();
		await formPassword.fill('privetmrbin');
		await btnComeIn2.click();
		//await page.getByTestId('whiteline-account-exit').click();
	
});
});