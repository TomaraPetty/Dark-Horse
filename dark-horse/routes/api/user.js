const router = require("express").Router();
const userController = require("../../controllers/userController");

// Match with "/api/user"
router.route("/")
    .get(userController.findAll)
    .post(userController.create);

// Match with "/api/user/:id"
router
    .route("/:id")
    .get(userController.findById)
    .put(userController.update)
    .delete(userController.remove);

module.exports = router;