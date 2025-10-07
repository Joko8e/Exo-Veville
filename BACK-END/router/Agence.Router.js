const express = require("express");
const AgenceController = require("../controllers/Agence.Controller.js");
const authMiddleware = require("../middlewares/AuthMiddleware.js");

const router = express();

// définir vos routes ici : Controller.Methode
router.post("/post", authMiddleware, AgenceController.post)

router.post("/post", AgenceController.post);
router.get("/get",AgenceController.get);
router.get("/get/:id", AgenceController.getById);
router.delete("/delete/:id", authMiddleware, AgenceController.deleteById);
router.put("/put/:id", AgenceController.updateById)

module.exports = router;
