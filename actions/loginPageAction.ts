//import { expect, Locator, Page } from "@playwright/test";

//export class LoginPageAction {
// public btnComeIn1: Locator;
// public btnComeIn2: Locator;
// public formLogin: Locator;
// public inputFormLogin: Locator;
// public btnComeInFormLogin: Locator;
// public headerFormPassword: Locator;
// public	formPassword: Locator;
// public page: Page;
 

//  constructor (page: Page) {
//    this.btnComeIn1 = page.getByTestId('mailbox').getByRole('button', { name: 'Войти' });
//    this.formLogin = page.locator("//h3[text()='Войти в аккаунт']");
//    this.inputFormLogin = page.locator("//input[@placeholder='Имя аккаунта']");
//    this.btnComeInFormLogin = page.locator("//span[text()='Ввести пароль']");
//    this.headerFormPassword = page.locator("//h3[text()='Введите пароль']");
//		this.formPassword = page.locator("//input[@type='password']");
//		this.btnComeIn2 = page.getByTestId('submit-button').getByRole('button', { name: 'Войти' });
//    this.page = page;
//  }
	
//	async checkOpenFormPassword(text: string) {
//    await this.page.goto('https://mail.ru');
//    await this.btnComeIn1.waitFor({ state: 'visible' });
//    expect (await this.btnComeIn1.isVisible()).toBe(true);
//    await this.btnComeIn1.click();
//    await this.formLogin.waitFor({ state: 'visible' });
//    expect (await this.formLogin.isVisible()).toBe(true);
//    await this.inputFormLogin.fill('')
//    await this.btnComeInFormLogin.click()
//    await this.headerFormPassword.waitFor({ state: 'visible' });
//    expect (this.headerFormPassword).toContainText(text);
//		await this.formPassword.fill('');
//	  }
//}