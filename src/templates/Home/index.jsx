import { useEffect, useState } from 'react';

import { mapData } from '../../api/map-data';

import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

import { Base } from '../Base';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';
import { useLocation } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const pathname = location.pathname.replace(
      /[^a-z0-9-_]/gi,
      '',
    );
    const slug = pathname ? pathname : 'droid-landing-page';

    const load = async () => {
      try {
        const data = await fetch(
          'https://strapi-landing-page-zero-one.herokuapp.com/pages/?slug=' +
            slug,
        );
        const json = await data.json();
        const filteredData = mapData(json);

        setData(filteredData[0]);
      } catch (e) {
        setData(undefined);
      }
    };

    load();
  }, [location]);

  if (data === undefined) return <PageNotFound />;

  if (data && !data.slug) return <Loading />;

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === 'section.section-two-columns') {
          return <GridTwoColumns key={key} {...section} />;
        }
        if (component === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }
        if (component === 'section.section-grid-text') {
          return <GridText key={key} {...section} />;
        }
        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...section} />;
        }
      })}
    </Base>
  );
}

export default Home;
