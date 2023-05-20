import app from './app.js'
import { port } from './config.js'

app
  .listen(port, () => {
    console.log(`Server is OK, running on: ${port}`)
  })
  .on('error', (e: any) => console.log(e))
