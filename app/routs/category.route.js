const router = require('express').Router();
const category = require('../controllers/category.controller');

router.post('/', category.createCategory);
router.put('/', category.updateCategory);
router.get('/', category.getCategory);
router.get('/:id', category.getCategoryById);

module.exports = router;