import { Router } from 'express'
import offerRoutes from './offers.js'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'Чтобы получить микрозаймы добавьте к существующей ссылке /offers' })
})
router.get('/offers', offerRoutes)

export default router
