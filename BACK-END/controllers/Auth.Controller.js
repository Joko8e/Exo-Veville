const createError = require("../helpers/CreateError.js");
const AuthModel = require("../models/User.Model.js");
const bcrypt = require ('bcrypt');
const jwt = require("jsonwebtoken");
const ENV = require("../config/Env.js")

// Methode pour s'inscrire
const register = async (req, res, next) => {
  try {
    // Hashage du mot de passe avec bcrypt
    // "10" est le nombre de tour de salage/cryptage, 10 est la valeur moyenne
    const passwordHashed =  await bcrypt.hash(req.body.password, 10);
    const user = await AuthModel.create({
      ...req.body,
      password: passwordHashed
    })
    res.status(201).json(user);
  } catch (error) {
     next(createError(error.status || 500, error.message, error.details));
  }
};

// Methode pour se connecter
const login = async (req, res, next) => {
  try {
    // recherche de l'utilisateur dans  la base de donnée par mail
    const user = await AuthModel.findOne({email: req.body.email});
    // si utilisateur est pas trouvé, renvoyé error 404
    if(!user) return next(createError(404,'User not found !'));

    // comparaison du mot de passe fournit dans la requete 
    // avec le mot de passe de l'utilisateur dans la bdd
    const comparePassword = await bcrypt.compare(
      req.body.password,
      user.password
    )
    
    // si le mot de passe est incorrect on renvoie une erreur 400
    if(!comparePassword) return next(createError(400, "Wrong Credentials !"));
    
    // créer un jeton JWT
    const token = jwt.sign({ id: user._id}, ENV.JWT_SECRET, {expiresIn: ENV.JWT_EXPIRES_IN});

    // on supprime le mot de passe de l'utilisateur
    const { password, ...others} = user._doc

    res.cookie('access_token', token, {httpOnly: true})
    .status(200).json(others);
  } catch (error) {
     next(createError(error.status || 500, error.message, error.details));
  }
};

module.exports = {
  register,
  login,
};
