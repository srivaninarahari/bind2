import { Bind2Page } from './app.po';

describe('bind2 App', () => {
  let page: Bind2Page;

  beforeEach(() => {
    page = new Bind2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
