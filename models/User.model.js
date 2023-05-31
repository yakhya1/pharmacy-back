const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    name: String,
    cash: Number,
    cart: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Drug"
    }],
    receptUs: {
        type: Boolean,
    }

});

const User = mongoose.model("User", userSchema);

module.exports = User;