const router = require("express").Router();
const bandController = require("../../controllers/bandController");

// Match with "/api/band"
router.route("/")
    .get(bandController.findAll)
    .post(bandController.create);

// Match with "/api/band/:id"
router
    .route("/:id")
    .get(bandController.findById)
    .put(bandController.update)
    .delete(bandController.remove);

module.exports = router;