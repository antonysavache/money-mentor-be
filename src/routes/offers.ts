import { Router } from 'express'
import { CreditController } from '../controllers/credit/CreditController.js'

const router = Router()

router.get('/', CreditController.getAll) // Получить все
router.get('/:id', CreditController.getOne) // Получить один
router.post('/', CreditController.create) // Создать оффер
router.patch('/:id', CreditController.patch) // Изменить оффер
router.delete('/:id', CreditController.delete) // Удалить один

export default router
