const router=require('express').Router();
const losses=require('../controllers/losses.controller');

router.get('/',losses.getAllLosses);
router.get('/:id',losses.getLossesById);
router.put('/:id',losses.updateLosses);
router.delete('/:id',losses.deleteLossesById);
router.post('/',losses.addOnelosses)
module.exports=router
