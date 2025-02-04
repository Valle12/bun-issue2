const result = await Bun.build({
  entrypoints: ["test.png", "chunk.css"],
  sourcemap: "linked",
  naming: "[dir]/[name]-[hash].[ext]",
  outdir: "dist",
  minify: true,
});

console.log(result);
