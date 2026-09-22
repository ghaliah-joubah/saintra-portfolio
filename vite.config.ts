import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import fs from 'fs'

function localCmsPlugin() {
  return {
    name: 'vite-plugin-local-cms',
    configureServer(server: any) {
      server.middlewares.use('/api/admin/save-data', (req: any, res: any) => {
        if (req.method === 'POST') {
          let body = ''
          req.on('data', (chunk: any) => { body += chunk })
          req.on('end', () => {
            try {
              const { filename, data } = JSON.parse(body)
              const allowedFiles = ['company.json', 'services.json', 'projects.json', 'siteCopy.json', 'authConfig.json']

              if (!allowedFiles.includes(filename)) {
                res.statusCode = 400
                res.end(JSON.stringify({ error: 'Invalid filename' }))
                return
              }

              const filePath = path.resolve(__dirname, 'src/data', filename)
              fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8')

              res.statusCode = 200
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ success: true, filename }))
            } catch (err: any) {
              res.statusCode = 500
              res.end(JSON.stringify({ error: err.message }))
            }
          })
        } else {
          res.statusCode = 405
          res.end(JSON.stringify({ error: 'Method Not Allowed' }))
        }
      })
    }
  }
}

export default defineConfig({
  plugins: [vue(), localCmsPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
