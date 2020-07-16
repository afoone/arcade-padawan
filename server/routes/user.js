const{ createUser, getUser, getUserList, updateUser, deleteUser } = require('../controllers/user');

const { Router} = require('express');

const router = Router();

router
    .post("/", createUser)
    .get("/", getUserList)
    .get("/:id", getUser)
    .put("/:id", updateUser)
    .delete("/:id", deleteUser)

module.exports = router;
