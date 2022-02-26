import { mapData } from './map-data';

describe('map-data.js ', () => {
  it('should map  the json to get only the necessary data even if there is no data', () => {
    const pagesData = mapData()[0];

    expect(pagesData.footerHtml).toBe('');
    expect(pagesData.slug).toBe('');
    expect(pagesData.title).toBe('');
  });

  it('should map data if data exists', () => {
    const pagesData = mapData([
      {
        footer_text: '<p>Hey!@</p>',
        slug: 'slug',
        title: 'title',
      },
    ])[0];

    expect(pagesData.footerHtml).toBe('<p>Hey!@</p>');
    expect(pagesData.slug).toBe('slug');
    expect(pagesData.title).toBe('title');
    expect(pagesData.sections).toEqual([1, 2, 3]);
    expect(pagesData.menu).toEqual({ a: 'b' });
  });
});
