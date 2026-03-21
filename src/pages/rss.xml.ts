import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '@/consts';

export async function GET(context: any) {
  const posts = (await getCollection('blog'))
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.pubDatetime.valueOf() - a.data.pubDatetime.valueOf());

  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDatetime,
      description: post.data.description,
      link: `/pulse/${post.id}`,
    })),
  });
}
