import fetch from 'node-fetch'
import { schedule } from '@netlify/functions'

const BUILD_HOOK =
  'https://api.netlify.com/build_hooks/63a2ddb7e4e1fa618caa335e'

export const handler = schedule('0 0 * * 1-5', async () => {
  await fetch(BUILD_HOOK, {
    method: 'POST'
  }).then(response => {
    console.log('Build hook response:', response)
  })

  return {
    statusCode: 200
  }
})
