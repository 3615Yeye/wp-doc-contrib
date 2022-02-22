const esbuild = require("esbuild");
const sassPlugin = require("esbuild-plugin-sass");

esbuild
  .build({
    entryPoints: ["public/src/js/index.js"],
    bundle: true,
    outfile: "public/dist/wp-doc-contrib-admin.js",
    plugins: [sassPlugin()],
  })
  .catch((e) => console.error(e.message));
