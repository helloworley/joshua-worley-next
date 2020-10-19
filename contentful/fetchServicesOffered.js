import client from './client'

export default async function fetchAbout() {
  console.log('getting entry for services offered')
  const entries = await client.getEntries({
    content_type: 'serviceOffered',
    locale: '*'
  }).catch((error) => {
    console.error(error);
  })
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}`)
}
