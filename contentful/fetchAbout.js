import client from './client'

export default async function fetchAbout() {
  console.log('getting entry for about')
  const entries = await client.getEntries({
    content_type: 'about',
    locale: '*'
  }).catch((error) => {
    console.error(error);
  })
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}`)
}
