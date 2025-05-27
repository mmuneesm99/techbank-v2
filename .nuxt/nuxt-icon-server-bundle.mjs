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
  'devicon': () => import('@iconify-json/devicon/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'flagpack': () => import('@iconify-json/flagpack/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'logos': () => import('@iconify-json/logos/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'pixelarticons': () => import('@iconify-json/pixelarticons/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'skill-icons': () => import('@iconify-json/skill-icons/icons.json', { with: { type: 'json' } }).then(m => m.default),
  'token-branded': () => import('@iconify-json/token-branded/icons.json', { with: { type: 'json' } }).then(m => m.default),
}