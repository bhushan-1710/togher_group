const fs = require('fs');

const imagesToDownload = [
  {
    name: 'exhibit-rebar-cage.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Unverbaute_Bohrpfahlbewehrung_%28Stahl%29.jpg',
    description: 'Steel reinforcement cage for bored pile foundation, showing tied rebar geometry',
    author: 'Daniel Fröhlich (Useradd)',
    source: 'Wikimedia Commons',
    license: 'CC BY-SA 3.0'
  },
  {
    name: 'exhibit-concrete-columns.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Banco_hip%C3%B3tecario_-_Ex_Banco_de_Londres.jpg',
    description: 'Brutalist sculptural concrete structural columns and facade relief',
    author: 'Claudio Elias',
    source: 'Wikimedia Commons',
    license: 'Public Domain'
  },
  {
    name: 'exhibit-structural-steel.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Manchester_Victoria_roof_view.JPG',
    description: 'Curved structural steel ribs and overhead beam network',
    author: 'G-13114',
    source: 'Wikimedia Commons',
    license: 'CC BY-SA 4.0'
  },
  {
    name: 'exhibit-engineering-cad.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Construction_drawing_autocad.jpg',
    description: 'Technical CAD engineering drawing and structural cross-section manifest',
    author: 'Mtpanchal',
    source: 'Wikimedia Commons',
    license: 'CC BY-SA 4.0'
  },
  {
    name: 'exhibit-formwork-shuttering.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Engineered_Formwork_System_%D0%A1%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B0%D0%BB%D1%83%D0%B1%D0%BA%D0%B0_%D0%B4%D0%BB%D1%8F_%D0%B1%D0%B5%D1%82%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_%D1%81%D0%B2%D0%BE%D0%B4%D0%BE%D0%B2_%D1%81_%D0%BA%D0%B5%D1%81%D1%81%D0%BE%D0%BD%D0%B0%D0%BC%D0%B8.jpg',
    description: 'Engineered modular formwork system for cast vault concrete construction',
    author: 'STALFORM engineering',
    source: 'Wikimedia Commons',
    license: 'CC BY-SA 3.0'
  },
  {
    name: 'exhibit-cantilever-concrete.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Geisel-Library.jpg',
    description: 'Tiered cantilevered reinforced concrete structural ribs',
    author: 'Ben Lunsford',
    source: 'Wikimedia Commons',
    license: 'CC BY-SA 3.0'
  }
];

async function run() {
  for (const item of imagesToDownload) {
    try {
      const res = await fetch(item.url, { headers: { 'User-Agent': 'TogherProject/1.0 (contact@toghergroup.com)' } });
      if (!res.ok) {
        console.error(`Failed ${item.name}: HTTP ${res.status}`);
        continue;
      }
      const buffer = await res.arrayBuffer();
      fs.writeFileSync(`public/images/${item.name}`, Buffer.from(buffer));
      console.log(`Saved public/images/${item.name} (${buffer.byteLength} bytes)`);
    } catch (e) {
      console.error(`Error ${item.name}:`, e.message);
    }
  }
}
run();
