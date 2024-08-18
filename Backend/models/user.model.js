import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
        lowercase: true,
    },
    password:{
        type: String,
        require: true,
    },
    confirmpassword:{
        type:String,
        require: true,
    },

},{
    timestamps: true,      //createdAt & updatedAt
});

const User = mongoose.model("User", userSchema);

export default User;


// schema data jo bhjna chahte hein client ko through json in (postman)


// yhn pr bs template hei functionality controller mein hei