import mongoose from 'mongoose'
import { db } from '../config.js'

mongoose
  .connect(db || '')
  .then(() => {
    console.log('Mongoose connection done')
  })
  .catch((e) => {
    console.log('Mongoose connection failed')
    console.error(e)
  })
