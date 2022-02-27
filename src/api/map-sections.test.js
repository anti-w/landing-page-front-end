import {
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
} from './map-sections';

describe('map-sections', () => {
  it('should render default data if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should map section two columns even if data is empty', () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section two columns with data', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      _id: '62123c7996b90225ab987d54',
      title: 'a beautiful intro!',
      description: 'wow!',
      metadata: {
        background: true,
        _id: '62123c7996b90225ab987d55',
        section_id: 'home',
        name: 'Home',
      },
      __v: 1,
      image: {
        _id: '62123c3796b90225ab987d52',
        name: 'joy.svg',
        alternativeText: 'a woman with blue shirts',
        url: 'image.svg',
      },
      id: '62123c7996b90225ab987d54',
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe(
      'section.section-two-columns',
    );
    expect(data.sectionId).toBe('home');
    expect(data.srcImg).toBe('image.svg');
    expect(data.text).toBe('wow!');
    expect(data.title).toBe('a beautiful intro!');
  });

  it(' should map section content', () => {
    const section = mapSectionContent();
  });
});
