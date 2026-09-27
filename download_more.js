const fs = require('fs');

async function download(url, filename) {
  const res = await fetch(url, { headers: { 'User-Agent': 'TogherProject/1.0 (contact@toghergroup.com)' } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buffer = await res.arrayBuffer();
  fs.writeFileSync(filename, Buffer.from(buffer));
  console.log(`Saved ${filename} (${buffer.byteLength} bytes)`);
}

async function run() {
  await download('https://upload.wikimedia.org/wikipedia/commons/f/fc/National_Theatre_-_detail_of_shuttered_concrete.jpg', 'public/images/exhibit-shuttered-concrete.jpg');
  await download('https://upload.wikimedia.org/wikipedia/commons/4/47/Steel_frame_structure.jpg', 'public/images/exhibit-steel-frame.jpg');
}
run();
