import client from './client'

export default async function fetchContent(info) {
  // console.log(`getting entry for ${type}`)
  const {type, order } = info
  const entries = await client.getEntries({
    content_type: type,
    order: order,
    locale: '*'
  }).catch((error) => {
    console.error(error);
  })
  console.log('entries', entries)
  if (entries.items) return entries.items
  // console.log(`Error getting Entries for ${contentType.name}`)
}
