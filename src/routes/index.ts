import { Router } from 'express';
const router = Router();

router.get('/', (_req, res) => res.json({ message: 'swag-cms-backend API' }));

// mount route files (create them later)
router.use('/auth', require('./auth').default);
router.use('/users', require('./users').default);
router.use('/posts', require('./posts').default);

export default router;
