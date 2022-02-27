import {
  mapImageGrid,
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
  mapTextGrid,
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

  it(' should map section grid text without data', () => {
    const section = mapTextGrid();

    expect(section.background).toBe(false);
    expect(section.component).toBe(
      'section.section-grid-text',
    );
    expect(section.description).toBe('');
    expect(section.sectionId).toBe('');
    expect(section.title).toBe('');
    expect(section.grid).toEqual([]);
  });

  it(' should map section grid text with data coming from API', () => {
    const section = mapTextGrid({
      __component: 'section.section-grid',
      _id: '621241db96b90225ab987d6f',
      title: 'My Grid',
      description: 'a Grid developed',
      text_grid: [
        {
          _id: '621241dc96b90225ab987d77',
          title: 'Everything is awesome',
          description:
            'Lego is awesome, agro is awesome, getting paid by dollar is awesome and a oportunity will be the best!',
        },
        {
          _id: '621241dc96b90225ab987d78',
          title: 'What are you wainting for?',
          description:
            'Just click on it, you need buy it to get a better life. Thrust me, this is the best way to caught girls.',
          __v: 0,
          id: '621241dc96b90225ab987d78',
        },
        {
          _id: '621241dc96b90225ab987d79',
          title: "Don't be afraid!",
          description:
            "Everything is so confusing, sometimes in my head I'm thinking in portuguese and sometimes I just thinking in the word in his natural language. Maybe someday I will be a native speaker.",
          __v: 0,
          id: '621241dc96b90225ab987d79',
        },
      ],
      image_grid: [],
      metadata: {
        background: true,
        _id: '621241dc96b90225ab987d86',
        name: 'Grid One',
        section_id: 'grid-one',
        __v: 0,
        id: '621241dc96b90225ab987d86',
      },
      __v: 2,
      id: '621241db96b90225ab987d6f',
    });

    expect(section.background).toBe(true);
    expect(section.component).toBe(
      'section.section-grid-text',
    );
    expect(section.description).toBe('a Grid developed');
    expect(section.sectionId).toBe('grid-one');
    expect(section.title).toBe('My Grid');
    expect(section.grid[0].title).toBe(
      'Everything is awesome',
    );
    expect(section.grid[0].description).toBe(
      'Lego is awesome, agro is awesome, getting paid by dollar is awesome and a oportunity will be the best!',
    );
  });

  it('should map section grid image without data', () => {
    const section = mapImageGrid();

    expect(section.background).toBe(false);
    expect(section.component).toBe(
      'section.section-grid-image',
    );
    expect(section.description).toBe('');
    expect(section.sectionId).toBe('');
    expect(section.title).toBe('');
    expect(section.grid).toEqual([]);
  });

  it(' should map section grid image with data coming from API', () => {
    const section = mapImageGrid({
      __component: 'section.section-grid',
      _id: '621241db96b90225ab987d70',
      title: 'Gallery',
      description: 'Images by unsplash see the links!',
      text_grid: [],
      image_grid: [
        {
          _id: '621241dc96b90225ab987d71',
          image: {
            _id: '6212414f96b90225ab987d68',
            name: 'grid-image-01',
            alternativeText:
              'Stang with a lot of cameras and acessories',
            width: 360,
            height: 360,
            url: 'grid-image-01',
            id: '6212414f96b90225ab987d68',
          },
        },
        {
          _id: '621241dc96b90225ab987d72',
          __v: 0,
          image: {
            _id: '6212415096b90225ab987d6d',
            name: 'http://source.unsplash.com/random/360x360?r=3',
            alternativeText:
              'surfist getting wave on the sea',
            size: 21.14,
            width: 360,
            height: 360,
            url: 'https://res.cloudinary.com/dscztnlqq/image/upload/v1645363534/360x360_r_3_8d318b406b.jpg',

            id: '6212415096b90225ab987d6d',
          },
          id: '621241dc96b90225ab987d72',
        },
        {
          _id: '621241dc96b90225ab987d73',
          __v: 0,
          image: {
            _id: '6212415096b90225ab987d6c',
            name: 'http://source.unsplash.com/random/360x360?r=5',
            alternativeText:
              'some essencies used in cullinary',
            caption: '',
            hash: '360x360_r_5_150ccc5f32',
            ext: '',
            mime: 'image/jpeg',
            size: 16.66,
            width: 360,
            height: 360,
            url: 'https://res.cloudinary.com/dscztnlqq/image/upload/v1645363534/360x360_r_5_150ccc5f32.jpg',
          },
          id: '621241dc96b90225ab987d73',
        },
        {
          image: {
            _id: '6212414f96b90225ab987d6b',
            name: 'http://source.unsplash.com/random/360x360?r=6',
            alternativeText:
              'black porche front of a wall sprayed with a woman',
            width: 360,
            height: 360,
            url: 'https://res.cloudinary.com/dscztnlqq/image/upload/v1645363534/360x360_r_6_90be5c8090.jpg',
          },
          id: '621241dc96b90225ab987d74',
        },
        {
          image: {
            _id: '6212414f96b90225ab987d6a',
            name: 'http://source.unsplash.com/random/360x360?r=4',
            alternativeText: 'museum and elegant building',
            width: 360,
            height: 360,
            url: 'https://res.cloudinary.com/dscztnlqq/image/upload/v1645363533/360x360_r_4_2984264d07.jpg',
          },
          id: '621241dc96b90225ab987d75',
        },
        {
          _id: '621241dc96b90225ab987d76',
          __v: 0,
          image: {
            _id: '6212414f96b90225ab987d69',
            name: 'http://source.unsplash.com/random/360x360?r=2',
            alternativeText: 'guitar and amplifier',
            caption: '',
            hash: '360x360_r_2_321a416f3d',
            ext: '',
            mime: 'image/jpeg',
            size: 16.54,
            width: 360,
            height: 360,
            url: 'https://res.cloudinary.com/dscztnlqq/image/upload/v1645363533/360x360_r_2_321a416f3d.jpg',
            provider: 'cloudinary',
            related: ['621241dc96b90225ab987d76'],
            createdAt: '2022-02-20T13:25:35.266Z',
            updatedAt: '2022-02-20T13:27:56.107Z',
            __v: 0,
            id: '6212414f96b90225ab987d69',
          },
          id: '621241dc96b90225ab987d76',
        },
      ],
      metadata: {
        background: false,
        _id: '621241dc96b90225ab987d8e',
        name: 'Gallery',
        section_id: 'gallery',
        __v: 0,
        id: '621241dc96b90225ab987d8e',
      },
      __v: 2,
      id: '621241db96b90225ab987d70',
    });

    expect(section.background).toBe(false);
    expect(section.component).toBe(
      'section.section-grid-image',
    );
    expect(section.description).toBe(
      'Images by unsplash see the links!',
    );
    expect(section.sectionId).toBe('gallery');
    expect(section.title).toBe('Gallery');
    expect(section.grid[0].srcImg).toBe('grid-image-01');
    expect(section.grid[0].altText).toBe(
      'Stang with a lot of cameras and acessories',
    );
  });
});
