import { browser, by, element } from 'protractor';

export class AppPage {
  // tslint:disable-next-line: promise-function-async
  navigateTo(): Promise<any> {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  // tslint:disable-next-line: promise-function-async
  getTitleText(): Promise<string> {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
}
