async function run() {
  const url = `https://en.wikipedia.org/w/api.php?action=query&generator=images&titles=B%C3%A9ton_brut|Steel_frame|Precast_concrete&gimlimit=30&prop=imageinfo&iiprop=url|size|extmetadata&format=json`;
  const res = await fetch(url, { headers: { "User-Agent": "TogherProject/1.0 (contact@toghergroup.com)" } });
  const data = await res.json();
  const pages = Object.values(data.query?.pages || {});
  pages.forEach(p => {
    const u = p.imageinfo?.[0]?.url;
    if (u) console.log(p.title, u.split('?')[0]);
  });
}
run();
