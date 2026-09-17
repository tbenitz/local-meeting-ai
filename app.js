const parts = await Promise.all(
  [1, 2, 3, 4, 5].map((n) => fetch(`./p${n}.js.txt`).then((r) => {
    if (!r.ok) throw new Error(`Missing p${n}.js.txt`);
    return r.text();
  }))
);
const url = URL.createObjectURL(new Blob(parts, { type: "text/javascript" }));
await import(url);
