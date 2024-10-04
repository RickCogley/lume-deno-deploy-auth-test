import lume from "lume/mod.ts";
import metas from "lume/plugins/metas.ts";
import sitemap from "lume/plugins/sitemap.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import { getGitDate } from "lume/core/utils/date.ts";
import sourceMaps from "lume/plugins/source_maps.ts";
import sri from "lume/plugins/sri.ts";

const site = lume(
  {
    src: "src",
    location: new URL("https://rickcogley-lume-deno-auth.deno.dev/"),
  },
);


site.use(metas());
site.use(sitemap());
site.use(lightningcss());
site.use(sourceMaps());
site.use(sri());

site.preprocess([".html"], (pages) => {
  for (const page of pages) {
    const src = page.src.entry?.src;

    if (src) {
      page.data.lastmod = getGitDate("modified", src);
    }
  }
});

site.copy("styles.css");


export default site;