const router = require('express').Router();
const descriptionItem = require('../controllers/descriptionItem.controller');

router.get('/:id', descriptionItem.getDescriptionItemById);
router.post('/', descriptionItem.createDescriptionItem);
router.put('/:id', descriptionItem.updateDescriptionItem);

module.exports = router;