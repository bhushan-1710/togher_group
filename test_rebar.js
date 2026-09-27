async function run() {
  const url = `https://en.wikipedia.org/w/api.php?action=query&generator=images&titles=Rebar&gimlimit=15&prop=imageinfo&iiprop=url|size|extmetadata&format=json`;
  const res = await fetch(url, { headers: { "User-Agent": "TogherProject/1.0 (contact@toghergroup.com)" } });
  const data = await res.json();
  const pages = Object.values(data.query?.pages || {});
  for (const p of pages) {
    const info = p.imageinfo?.[0];
    if (info && info.url && (info.url.includes('.jpg') || info.url.includes('.JPG') || info.url.includes('.png'))) {
      console.log(p.title, info.url.split('?')[0]);
    }
  }
}
run();
