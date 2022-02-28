import { useEffect, useState } from 'react';
import { Base } from '../Base';
import { mockBase } from '../Base/mock';

import { mapData } from '../../api/map-data';

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const load = async () => {
      const data = await fetch(
        'http://localhost:1337/pages/?slug=droid-landing-page',
      );
      const json = await data.json();
      const filteredData = mapData(json);
      setData(filteredData[0]);
    };

    load();
  }, []);

  if (data === undefined)
    return <h1>Página não encontrada</h1>;

  if (data && !data.slug) return <h1>Carregando...</h1>;

  return <Base {...mockBase} />;
}

export default Home;
