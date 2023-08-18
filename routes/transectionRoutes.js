const express = require("express");
const { addTransection, getAllTransection, editTransection, deleteTransection } = require("../controllers/transectionCtrl");


//router object
const router = express.Router();

//routers
router.post('/add-transection', addTransection)
router.post('/edit-transection', editTransection)
router.post('/delete-transection', deleteTransection)

router.post('/get-transection',getAllTransection)
module.exports = router;
