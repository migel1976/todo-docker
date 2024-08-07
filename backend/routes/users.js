var express = require('express');
var router = express.Router();
const { add, remove, edit, getAllUsers, getUserByName } = require('../controllers/users')

router.post('/add', add)
router.get('/getall', getAllUsers)
router.get('/getuserbyname/:id', getUserByName)
router.post('/remove', remove)
router.put('/edit', edit)

module.exports = router;
