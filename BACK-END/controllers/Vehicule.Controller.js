const createError = require("../helpers/CreateError.js");
const VehiculeModel = require("../models/Vehicule.Model.js");


const post = async(req, res, next) => {
    try {
        const vehicule = await VehiculeModel.create(req.body);
        res.status(201).json(vehicule);
    } catch (error) {
        next(createError(error.status || 500, error.message, error.details));
    }
}


const getVehicules = async (req, res, next) => {
    try {
        const vehicule =  await VehiculeModel.find().populate("id_agence")
        res.status(200).json(vehicule)
    } catch (error) {
        next(createError(error.status || 500, error.message, error.details));
    }
}

const getVehiculeById = async (req, res, next) => {
    try {
       const vehiculeById = await VehiculeModel.findById(req.params.id).populate()
        if(!getVehiculeById) return next(createError(404, "Not Found"));
        res.status(200).json(vehiculeById)
    } catch (error) {
        next(createError(error.status || 500, error.message, error.details));
    }
}

const deleteVehiculeById = async (req, res, next) => {
    try {
        const deleteVehicule = await VehiculeModel.findByIdAndDelete(req.params.id)
        if(!deleteVehicule) return next(createError(404, "Agence not found"))
        res.status(200).json("Vehicule supprimé")
    } catch (error) {
        next(createError(error.status || 500, error.message, error.details));
    }
}

const updateVehiculeById = async (req, res, next) => {
    try {
        const updateVehicule = await VehiculeModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
        if(!updateVehicule) return next(createError(404, "Vehicule not Found"))
        res.status(200).json("Vehicule modifié")
    } catch (error) {
        next(createError(error.status || 500, error.message, error.details));
    }
}





module.exports = {
    post,
    getVehicules,
    getVehiculeById,
    deleteVehiculeById,
    updateVehiculeById,
}