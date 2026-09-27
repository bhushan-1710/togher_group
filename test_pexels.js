async function run() {
  const res = await fetch("https://www.pexels.com/search/brutalist%20concrete/", {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
    }
  });
  const html = await res.text();
  const nextData = html.match(/<script id="__NEXT_DATA__" type="application\/json">([^<]+)<\/script>/);
  if (nextData) {
    const json = JSON.parse(nextData[1]);
    const photos = json.props?.pageProps?.initialMedia?.map(m => ({
      id: m.id,
      url: m.url,
      photographer: m.photographer,
      photographer_url: m.photographer_url,
      src: m.src?.large2x || m.src?.large || m.src?.original,
      alt: m.alt
    }));
    console.log("Pexels photos count:", photos?.length);
    console.log("First 3:", photos?.slice(0, 3));
  } else {
    console.log("No NEXT_DATA found, html length:", html.length);
  }
}
run();
