const mongoose = require("mongoose");

const drugSchema = mongoose.Schema({
    name: String,
    catId: {
       type: mongoose.SchemaTypes.ObjectId,
       ref: "Category"
    },
    price: Number,
    recept: {
        type: Boolean,
        default: false
    }
});

const Drug = mongoose.model("Drug", drugSchema);

module.exports = Drug;