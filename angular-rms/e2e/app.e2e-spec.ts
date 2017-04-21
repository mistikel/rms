import { AngularRmsPage } from './app.po';

describe('angular-rms App', () => {
  let page: AngularRmsPage;

  beforeEach(() => {
    page = new AngularRmsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
