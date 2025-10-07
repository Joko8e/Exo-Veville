const mongoose = require('mongoose');

const User = mongoose.Schema(
  {
    nom: {
      type: String,
      required: true
    },
    prenom:{
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      // minLenth: 12,
      required: true
    },
    role: {
      type: String,
      enum: ['admin', 'user', 'superAdmin'],
      default: 'user'
    }
  },
  { timestamps: true } // crée createdAt et updatedAt automatiquement
)

module.exports = mongoose.model('User', User)