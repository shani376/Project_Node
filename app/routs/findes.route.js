const router=require('express').Router();
const findes=require('../controllers/finds.controller');

router.get('/',findes.getAllFindes);
router.get('/:id',findes.getFindesById);
router.put('/:id',findes.updateFindes);
router.delete('/:id',findes.deleteFindesById);
router.post('/',findes.addOneFindes)
module.exports=router
