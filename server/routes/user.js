const{ createUser, getUser, getUserList, updateUser, deleteUser, addScore } = require('../controllers/user');

const { Router} = require('express');

const router = Router();

router
    .post("/", createUser)
    .get("/", getUserList)
    .get("/:id", getUser)
    .put("/:id", updateUser)
    .delete("/:id", deleteUser)
    .put("/:id/addScore", addScore )

module.exports = router;
