const fs = require('fs');

async function download(url, filename) {
  const res = await fetch(url, { headers: { 'User-Agent': 'TogherProject/1.0 (contact@toghergroup.com)' } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buffer = await res.arrayBuffer();
  fs.writeFileSync(filename, Buffer.from(buffer));
  console.log(`Saved ${filename} (${buffer.byteLength} bytes)`);
}

async function run() {
  await download('https://upload.wikimedia.org/wikipedia/commons/d/d6/1981_BostonCityHall_byLebovich8_HABS_MA1176.jpg', 'public/images/exhibit-concrete-formwork.jpg');
}
run();
