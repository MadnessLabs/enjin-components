import { newE2EPage } from '@stencil/core/testing';

describe('enjin-sidebar-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<enjin-sidebar-component></enjin-sidebar-component>');

    const element = await page.find('enjin-sidebar-component');
    expect(element).toHaveClass('hydrated');
  });
});