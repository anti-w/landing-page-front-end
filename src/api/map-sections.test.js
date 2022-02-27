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
      title: 'a beautiful intro!',
      description: 'wow!',
      metadata: {
        background: true,
        _id: '62123c7996b90225ab987d55',
        section_id: 'home',
        name: 'Home',
      },
      image: {
        name: 'joy.svg',
        alternativeText: 'a woman with blue shirts',
        url: 'image.svg',
      },
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

    expect(section.background).toBe(false);
    expect(section.component).toBe('');
    expect(section.html).toBe('');
    expect(section.sectionId).toBe('');
    expect(section.title).toBe('');
  });

  it(' should map section content with data coming from API', () => {
    const section = mapSectionContent({
      __component: 'section.section-content',
      _id: '621241db96b90225ab987d6e',
      title: 'Some important infos',
      content: '<p> Hey!</p>',
      metadata: {
        background: false,
        _id: '621241dc96b90225ab987d7a',
        section_id: 'intro',
      },
    });

    expect(section.background).toBe(false);
    expect(section.component).toBe(
      'section.section-content',
    );
    expect(section.html).toBe('<p> Hey!</p>');
    expect(section.sectionId).toBe('intro');
    expect(section.title).toBe('Some important infos');
  });
});
