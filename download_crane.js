const fs = require('fs');

async function download(url, filename) {
  const res = await fetch(url, { headers: { 'User-Agent': 'TogherProject/1.0 (contact@toghergroup.com)' } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buffer = await res.arrayBuffer();
  fs.writeFileSync(filename, Buffer.from(buffer));
  console.log(`Saved ${filename} (${buffer.byteLength} bytes)`);
}

async function run() {
  await download(
    'https://upload.wikimedia.org/wikipedia/commons/d/d7/Building_construction_crane_Moira_Close_Broadwater_Farm_Haringey_2025_24.jpg',
    'public/images/exhibit-tower-crane.jpg'
  );
}
run();
