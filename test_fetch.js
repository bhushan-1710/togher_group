async function run() {
  try {
    const res = await fetch("https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    console.log("Pexels fetch status:", res.status, "content-type:", res.headers.get("content-type"));
  } catch (e) {
    console.error(e);
  }
}
run();
