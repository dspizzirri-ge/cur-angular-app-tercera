import { browser, by, element, ElementFinder, ElementArrayFinder } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getInputModel(model: string): ElementFinder {
    return element(by.css("input[name=" + model + "]"));
  }

  getTabla(): ElementArrayFinder {
    return element.all(by.css("tr"));
  }

  getById(id: string) {
    return element(by.id(id));
  }
}
