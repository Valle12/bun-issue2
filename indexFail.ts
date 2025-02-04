const result = await Bun.build({
  entrypoints: ["chunk.css", "test.png"],
  sourcemap: "linked",
  naming: "[dir]/[name]-[hash].[ext]",
  outdir: "dist",
  minify: true,
});

console.log(result);
