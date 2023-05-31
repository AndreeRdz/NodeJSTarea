const express = require('express');
const router = express.Router();
const {libreryController} = require('../controllers')
const {authIsAdmin} = require('../meddleware/index')

router.post('/', authIsAdmin,  libreryController.postLibrary)
router.get('/:id',libreryController.getLibrary);
router.put('/:id',authIsAdmin, libreryController.putlibrary);
router.get('/',libreryController.getLibraries);
router.delete('/:id', authIsAdmin, libreryController.deleteLibrary);

module.exports = router;