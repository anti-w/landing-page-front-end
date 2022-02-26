import { mapData } from './mapData';

describe('mapData.js ', () => {
  it('should map  the json to get only the necessary data even if there is no data', () => {
    const pagesData = mapData();

    expect(pagesData.footerHtml).toBe('');
    expect(pagesData.slug).toBe('');
    expect(pagesData.title).toBe('');
    expect(pagesData.sections).toEqual([]);
  });
});
