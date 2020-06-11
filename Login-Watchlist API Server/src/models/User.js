const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: value => {
            if (!validator.isEmail(value)) {
                throw new Error({error: 'Invalid Email address'})
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 7
    },
    watchlist: [{
        symbol: {
            type: String,
            required: true
        }
    }],
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

userSchema.pre('save', async function (next) {
    // Hash the password before saving the user model
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

userSchema.methods.generateAuthToken = async function() {
    // Generate an auth token for the user
    const user = this
    const token = jwt.sign({_id: user._id}, process.env.JWT_KEY)
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}

userSchema.methods.generateWatchList = async function() {
    const user = this
    return user.watchlist
}

userSchema.methods.updateWatchList = async function(ticker) {
    // Add or remove ticker to user's watchlist
    const user = this
    let index = -1
    let obj = user.watchlist.find((o, i) => {
        if (o.symbol === ticker) {
            index = i;
        }
    });
    //If it exists in the watchlist remove it
    if (index > -1){
        user.watchlist.splice(index, 1);
    }
    //If not add it
    else{
        user.watchlist = user.watchlist.concat({symbol: ticker})
    }
    //Save the user
    await user.save()
    return user.watchlist
}

userSchema.statics.findByCredentials = async (email, password) => {
    // Search for a user by email and password.
    const user = await User.findOne({ email } )
    if (!user) {
        throw new Error('There is no account registered with this email!')
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
        throw new Error('Invalid password')
    }
    return user
}

const User = mongoose.model('User', userSchema)

module.exports = User