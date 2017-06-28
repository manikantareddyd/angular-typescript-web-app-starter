import { AngularTypescriptWebAppStarterPage } from './app.po';

describe('angular-typescript-web-app-starter App', () => {
  let page: AngularTypescriptWebAppStarterPage;

  beforeEach(() => {
    page = new AngularTypescriptWebAppStarterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
