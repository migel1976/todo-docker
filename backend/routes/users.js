var express = require('express');
var router = express.Router();
const { add, remove, edit, getAllUsers, getUserByName } = require('../controllers/users')

router.post('/add', add)
router.get('/getall', getAllUsers)
router.get('/getuserbyname/:id', getUserByName)
// router.post('/remove', remove)
// router.delete('/remove', remove)
// router.post('/remove', remove)
// router.post('/remove/:id', remove)
router.delete('/remove/:id', remove)
// router.put('/edit', edit)
router.put('/edit/:id', edit)

module.exports = router;
