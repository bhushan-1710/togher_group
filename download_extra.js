const fs = require('fs');

async function download(url, filename) {
  const res = await fetch(url, { headers: { 'User-Agent': 'TogherProject/1.0 (contact@toghergroup.com)' } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buffer = await res.arrayBuffer();
  fs.writeFileSync(filename, Buffer.from(buffer));
  console.log(`Saved ${filename} (${buffer.byteLength} bytes)`);
}

async function run() {
  // Rebar detail: W.carter, CC BY-SA 4.0
  await download('https://upload.wikimedia.org/wikipedia/commons/5/59/A_bunch_of_rebar_up_close.jpg', 'public/images/exhibit-rebar-detail.jpg');
}
run();
