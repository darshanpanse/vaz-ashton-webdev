/**
 * Created by Ashton on 3/13/2017.
 */
module.exports = function (app) {

    var mongoose = require("mongoose");

    var UserSchema = mongoose.Schema({
        username: String,
        password: String,
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        websites: [{type: mongoose.Schema.Types.ObjectId, ref: "WebsiteModel"}],
        dateCreated: {type: Date, default: Date.now()}
    });

    return UserSchema;

};