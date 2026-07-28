/** Prefix a public asset path with the app baseURL (needed for GitHub Pages). */
export function assetPath(path: string): string {
  const base = useRuntimeConfig().app.baseURL || '/'
  const clean = path.replace(/^\.\//, '').replace(/^\//, '')
  return `${base}${clean}`
}
