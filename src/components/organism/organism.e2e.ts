import { newE2EPage } from '@stencil/core/testing';

describe('enjin-organism', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<enjin-organism></enjin-organism>');

    const element = await page.find('enjin-organism');
    expect(element).toHaveClass('hydrated');
  });
});