const mongoose = require('mongoose');

const Agence = mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true, 
      unique: true 
    },
    adresse:{
      type: String,
      required: true
    },
    ville:{
      type: String,
      required:true
    },
    cp:{
      type: Number,
      required: true
    },
    description:{
      type: String,
      required: true
    },
    photo:{
      type: String,
      required: true
    }

  },
  { timestamps: true } // crée createdAt et updatedAt automatiquement
)

module.exports = mongoose.model('Agence', Agence)