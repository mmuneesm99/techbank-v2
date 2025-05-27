import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
function createRemoteCollection(fetchEndpoint) {
  let _cache
  return async () => {
    if (_cache)
      return _cache
    const res = await fetch(fetchEndpoint).then(r => r.json())
    _cache = res
    return res
  }
}

export const collections = {
  'devicon': () => require('@iconify-json/devicon/icons.json'),
  'flagpack': () => require('@iconify-json/flagpack/icons.json'),
  'logos': () => require('@iconify-json/logos/icons.json'),
  'pixelarticons': () => require('@iconify-json/pixelarticons/icons.json'),
  'skill-icons': () => require('@iconify-json/skill-icons/icons.json'),
  'token-branded': () => require('@iconify-json/token-branded/icons.json'),
}