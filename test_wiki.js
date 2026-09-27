async function queryTopic(topic) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&generator=images&titles=${encodeURIComponent(topic)}&gimlimit=15&prop=imageinfo&iiprop=url|size|extmetadata&format=json`;
  const res = await fetch(url, { headers: { "User-Agent": "TogherProject/1.0 (contact@toghergroup.com)" } });
  const data = await res.json();
  const pages = Object.values(data.query?.pages || {});
  console.log(`=== TOPIC: ${topic} (${pages.length} images) ===`);
  for (const p of pages) {
    const info = p.imageinfo?.[0];
    if (info && info.url && (info.url.includes('.jpg') || info.url.includes('.JPG') || info.url.includes('.png'))) {
      const artist = info.extmetadata?.Artist?.value || 'Public Domain / Wikimedia';
      const license = info.extmetadata?.LicenseShortName?.value || 'CC-BY / Public Domain';
      console.log({
        title: p.title,
        url: info.url.split('?')[0],
        artist: artist.replace(/<[^>]+>/g, '').trim(),
        license
      });
    }
  }
}

async function run() {
  await queryTopic("Rebar");
  await queryTopic("Reinforced_concrete");
  await queryTopic("Formwork");
  await queryTopic("Architectural_drawing");
  await queryTopic("Structural_steel");
}
run();
