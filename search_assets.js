const fs = require('fs');

async function searchCommons(query) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=10&prop=imageinfo&iiprop=url|size|extmetadata&format=json`;
  const res = await fetch(url, { headers: { 'User-Agent': 'TogherProject/1.0 (contact@toghergroup.com)' } });
  const data = await res.json();
  const pages = Object.values(data.query?.pages || {});
  console.log(`=== Query: ${query} (${pages.length} results) ===`);
  for (const p of pages) {
    const info = p.imageinfo?.[0];
    if (info && info.url && (info.url.endsWith('.jpg') || info.url.endsWith('.JPG'))) {
      console.log(JSON.stringify({
        title: p.title,
        url: info.url,
        width: info.width,
        height: info.height,
        license: info.extmetadata?.LicenseShortName?.value || 'CC',
        artist: (info.extmetadata?.Artist?.value || '').replace(/<[^>]+>/g, '').trim().substring(0, 50)
      }));
    }
  }
}

async function run() {
  await searchCommons('structural concrete raw texture high contrast');
  await searchCommons('construction foundation rebar pile');
  await searchCommons('steel framing truss construction close up');
}
run();
