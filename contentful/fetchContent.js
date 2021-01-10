import client from './client'

export default async function fetchContent(info) {
  const {type, order, slug } = info
  const entries = await client.getEntries({
    content_type: type,
    order: order,
    'fields.slug[match]': slug,
    locale: '*'
  }).catch((error) => {
    console.error(error);
  })
  if (entries.items) return entries.items
}
