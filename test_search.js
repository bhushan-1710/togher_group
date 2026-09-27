async function search(term) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(term)}&gsrnamespace=6&gsrlimit=12&prop=imageinfo&iiprop=url|size|extmetadata&format=json`;
  const res = await fetch(url, { headers: { "User-Agent": "TogherProject/1.0 (contact@toghergroup.com)" } });
  const data = await res.json();
  const pages = Object.values(data.query?.pages || {});
  console.log(`=== SEARCH: ${term} ===`);
  for (const p of pages) {
    const info = p.imageinfo?.[0];
    if (info && info.url && (info.url.endsWith('.jpg') || info.url.endsWith('.JPG'))) {
      const desc = info.extmetadata?.ImageDescription?.value || '';
      console.log({
        title: p.title,
        url: info.url.split('?')[0],
        artist: (info.extmetadata?.Artist?.value || 'Wikimedia Commons').replace(/<[^>]+>/g, '').trim(),
        license: info.extmetadata?.LicenseShortName?.value || 'CC',
        desc: desc.replace(/<[^>]+>/g, '').slice(0, 100)
      });
    }
  }
}

async function run() {
  await search('concrete formwork detail');
  await search('steel frame construction building');
  await search('beton brut architectural texture');
}
run();
