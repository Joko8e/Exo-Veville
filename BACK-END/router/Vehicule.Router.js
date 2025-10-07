const express = require("express");
const VehiculeController = require("../controllers/Vehicule.Controller.js");

const router = express();

router.post("/post", VehiculeController.post);
router.get("/get", VehiculeController.getVehicules);
router.get("/get/:id", VehiculeController.getVehiculeById);
router.delete("/delete/:id", VehiculeController.deleteVehiculeById);
router.put("/put/:id", VehiculeController.updateVehiculeById);


module.exports = router