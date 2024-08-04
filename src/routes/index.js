import {Router} from 'express'
const router = Router()

router.get('/', (req, res) => res.render('index'))
router.get('/servicios', (req, res) => res.render('servicios'))
router.get('/productos', (req, res) => res.render('productos'))
router.get('/citas', (req, res) => res.render('citas'))

export default router