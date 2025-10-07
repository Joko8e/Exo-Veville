const mongoose = require('mongoose');

const Vehicule = mongoose.Schema(
    {
        id_agence:{
            // permet d'aller chercher un ID  (primary key) dans une autre table pour qu'elle devienne ici une foreigner key.
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Agence',
            required: true
        },
        titre:{
            type: String,
            required: true,
            unique: true
        },
        marque:{
            type: String,
            required: true
        },
        modele:{
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        photo:{
            type: String,
            required: true
        },
        prix_journalier:{
            type: Number,
            required: true
        }
    },
    { timestamps: true}
)

module.exports = mongoose.model('Vehicule', Vehicule)