const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    street: String,
    city: String
})

const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 15,
        max: 75,
        validate: {
            validator: v => v %2 === 0,
            message: props => `${props.value} is not an even number`, 
        }
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        minLength: 10
    },
    createdAt: {
        immutable: true,
        type: Date,
        default: () => Date.now(),
    },
    upDatedAt: {
        type: Date,
        default: () => Date.now(),
    },
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address: addressSchema,
})

module.exports = mongoose.model("user", userSchema)