import { test, expect, Page } from '@playwright/test';
//import {LoginPageAction} from '../actions/loginPageAction';


test.describe('Email', () => {
	test('check open form login and input', async ({ page }) => {
		const btnComeIn1 = page.getByTestId('mailbox').getByRole('button', { name: 'Войти' });
    const formLogin = page.locator("//h3[text()='Войти в аккаунт']");
    const inputFormLogin = page.locator("//input[@placeholder='Имя аккаунта']");
    const btnComeInFormLogin = page.locator("//span[text()='Ввести пароль']");
    const headerFormPassword = page.locator("//h3[text()='Введите пароль']");
		const formPassword = page.locator("//input[@type='password']");
		const btnComeIn2 = page.getByTestId('submit-button').getByRole('button', { name: 'Войти' });
    
		await page.goto('https://mail.ru/');
    await btnComeIn1.waitFor({ state: 'visible' });
		expect (await btnComeIn1.isVisible()).toBe(true);
		await btnComeIn1.click();
		await page.screenshot({ path: 'screenshots/sreen.png' });
		await page.waitForSelector()
    await formLogin.waitFor({ state: 'visible' });
    expect (await formLogin.isVisible()).toBe(true);
		await inputFormLogin.fill('misterbinqa');
		await page.locator("//span[text()='@mail.ru']").isVisible();
    await btnComeInFormLogin.click();
    await headerFormPassword.waitFor({ state: 'visible' });
    await formPassword.fill('privetmrbin');
		await btnComeIn2.click();
	
});
});