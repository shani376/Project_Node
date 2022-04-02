const router = require('express').Router();
const subCategory = require('../controllers/subCategory.controller');

router.post('/', subCategory.createSubCategory);
router.put('/', subCategory.UpdateSubCategory);
router.get('/', subCategory.getSubCategory);
router.get('/:id', subCategory.getSubCategoruById);

module.exports = router;