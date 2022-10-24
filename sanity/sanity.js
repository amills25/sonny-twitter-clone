// import {
//   createClient,
// } from 'next-sanity'

// export const config = {
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   apiVersion: '2021-10-21',
//   useCdn: process.env.NODE_ENV === 'production',
// }

// export const sanityClient = createClient(config)

const sanityClient = require('@sanity/client')
export const client = sanityClient({
  projectId: 's8617pfo',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token: process.env.SANITY_API_TOKEN, // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})