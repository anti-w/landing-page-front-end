import { mapMenu, mapMenuLinks } from './map-menu';

describe('map-menu.js', () => {
  it('should return a default object if data no exists', () => {
    const menuData = mapMenu();

    expect(menuData.newTab).toBe(false);
    expect(menuData.text).toBe('');
    expect(menuData.srcImg).toBe('');
    expect(menuData.link).toBe('');
  });

  it('should return a object that matches with menu itens like: link, title, new tab bool, etc', () => {
    const menuData = mapMenu({
      open_in_new_tab: false,
      _id: '62123c7a96b90225ab987d59',
      logo_text: 'Landing Page Droid',
      logo_link: '#home',
      menu: [
        {
          open_in_new_tab: false,
          _id: '62123c7a96b90225ab987d5a',
          link_text: 'Intro',
          url: '#intro',
        },
        {
          open_in_new_tab: true,
          _id: '62123c7a96b90225ab987d5b',
          link_text: 'Grid One',
          url: '#grid-one',
        },
      ],
      logo: {
        _id: '621239884209811fade4bdc9',
        name: 'logo.png',
        alternativeText: 'landing-page logo android bot',
        url: 'image.svg',
      },
    });

    expect(menuData.newTab).toBe(false);
    expect(menuData.text).toBe('Landing Page Droid');
    expect(menuData.srcImg).toBe('image.svg');
    expect(menuData.link).toBe('#home');
    expect(menuData.links[0].newTab).toBe(false);
    expect(menuData.links[0].children).toBe('Intro');
    expect(menuData.links[0].link).toBe('#intro');
  });

  it('should return an empty array if links no exists', () => {
    const links = mapMenuLinks();

    expect(links).toEqual([]);
  });

  it('should return an array of links', () => {
    const links = mapMenuLinks([
      {
        open_in_new_tab: false,
        _id: '62123c7a96b90225ab987d5a',
        link_text: 'Intro',
        url: '#intro',
      },
      {},
    ]);

    expect(links[0].newTab).toBe(false);
    expect(links[0].children).toBe('Intro');
    expect(links[0].link).toBe('#intro');
  });
});
