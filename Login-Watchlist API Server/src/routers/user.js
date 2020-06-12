const express = require('express')
const User = require('../models/User')
const auth = require('../middleware/auth')

const router = express.Router()

router.post('/users', async (req, res) => {
    // Create a new user
    try {
        const user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/users/login', async(req, res) => {
    //Login a registered user
    try {
        const { email, password } = req.body
        const user = await User.findByCredentials(email, password)
        if (!user) {
            return res.status(401).send({error: 'Invalid username and/or password'})
        }
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

router.get('/users/me', auth, async(req, res) => {
    // View logged in user profile
    try {
        res.send(req.user)
    }
     catch (error) {
        res.status(500).send(error)
    }
})

router.post('/users/watchlist', auth, async(req, res) => {
    // View logged in user watchlist
    try {
        const watchlist = await req.user.generateWatchList()
        res.send(watchlist)
    }
     catch (error) {
        res.status(500).send(error)
    }
})

router.post('/users/watchlist/update', auth, async(req, res) => {
    //Add or remove a ticker to a user's watchlist
    try {
        const { ticker } = req.body
        const result = await req.user.updateWatchList(ticker)
        res.send(result)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
})

router.post('/users/me/logout', auth, async (req, res) => {
    // Log user out of the application
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token
        })
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/users/me/logoutall', auth, async(req, res) => {
    // Log user out of all devices
    try {
        req.user.tokens.splice(0, req.user.tokens.length)
        await req.user.save()
        res.send("Logged Out")
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router