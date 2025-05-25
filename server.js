const { createServer } = require('node:http')
const { createServer: createViteServer } = require('vite')
const { loadNuxt } = require('@nuxt/kit')

async function start() {
  const nuxt = await loadNuxt({
    rootDir: process.cwd(),
    dev: false,
    server: {
      port: process.env.PORT || 3000,
      host: process.env.HOST || '0.0.0.0'
    }
  })

  await nuxt.ready()
  await nuxt.build()

  const server = createServer(nuxt.server.app)
  server.listen(process.env.PORT || 3000, () => {
    console.log(`Server running at http://localhost:${process.env.PORT || 3000}`)
  })
}

start().catch((err) => {
  console.error('Error starting server:', err)
  process.exit(1)
}) 