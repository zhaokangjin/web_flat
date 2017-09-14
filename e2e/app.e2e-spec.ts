import { PaasPortalPage } from './app.po';

describe('paas-portal App', () => {
  let page: PaasPortalPage;

  beforeEach(() => {
    page = new PaasPortalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
