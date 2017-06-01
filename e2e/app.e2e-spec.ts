import { MakeDinnerPage } from './app.po';

describe('make-dinner App', () => {
  let page: MakeDinnerPage;

  beforeEach(() => {
    page = new MakeDinnerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
