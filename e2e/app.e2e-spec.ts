import { IncomeExpensePage } from './app.po';

describe('income-expense App', () => {
  let page: IncomeExpensePage;

  beforeEach(() => {
    page = new IncomeExpensePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
