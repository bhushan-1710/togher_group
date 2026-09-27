const fs = require('fs');

async function findImages() {
  const queries = [
    'tower crane construction high contrast',
    'deep excavation foundation construction',
    'precast concrete girder bridge',
    'industrial piping ductwork mechanical'
  ];
  for (const q of queries) {
    const url = 'https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=' + encodeURIComponent('filetype:bitmap ' + q) + '&gsrnamespace=6&gsrlimit=5&prop=imageinfo&iiprop=url|size|extmetadata&format=json';
    const res = await fetch(url, { headers: { 'User-Agent': 'TogherProject/1.0' } });
    const d = await res.json();
    console.log('=== ' + q + ' ===');
    Object.values(d.query?.pages || {}).forEach(p => {
      const info = p.imageinfo?.[0];
      if (info && info.width > 1200) {
        console.log(JSON.stringify({
          title: p.title,
          url: info.url.split('?')[0],
          artist: (info.extmetadata?.Artist?.value || '').replace(/<[^>]+>/g, '').trim().substring(0, 40),
          license: info.extmetadata?.LicenseShortName?.value,
          dims: info.width + 'x' + info.height
        }));
      }
    });
  }
}
findImages();
