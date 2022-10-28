import sanityClient from '@sanity/client';
import imageBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'sffh0c8u',
  dataset: 'production',
  apiVersion: '2022-10-19',
  useCdn: true,
  token: 'sk1FvY81NVlfKzUdSpu1OSZxTvB44EifszSQxZz6EdLp0NAyt3vmVQHd3Xm4rg1ToheuhClKhEqFyWUdWOAIYFm6SJXiePuTM5asEdOffMYP0WoVisaN3SGZit0nzShT0txDnNURE4dotqitdDoE1iwJ10BLmlkC8z3p24EfIzOxqwY3bi8m',
})

const builder = imageBuilder(client)

export const urlFor = (source) => builder.image(source)