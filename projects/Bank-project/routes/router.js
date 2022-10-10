require('dotenv').config()
const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const User = require('../models/user')
const Process = require('../models/process')


// Connect to MongoDB
const connection = mongoose.connect(process.env.DB)
    .then((res) => console.log('Connected!'))
    .catch((err) => console.log(err))

const app = express()

app.set('view engine', 'ejs')

// middleware for static files
app.use(express.static('public'))

// Allow passing url encoded data into object
app.use(express.urlencoded({ extended: true }))

// Middleware for loading users data
let Users
app.use((req, res, next) => {
    User.find()
        .then((result) => {
            Users = result
        })
        .catch((err) => console.log(err))
    next()
})

// App routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
        name: 'Home Page'
    })
})

app.get('/print', (req, res) => {
    res.send(Users)
    // res.render('customers', {
    //     title: 'Customers',
    //     name: 'Customers Page',
    //     customers: Users
    // }).catch((err) => console.log(err))
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'About Page'
    })
})

app.get('/customers', (req, res) => {   
    // re running middleware
    User.find()
        .then((customers) => {
            res.render('customers', {
                title: 'Customers',
                name: 'Customers Page',
                customers
            })
        })

})

app.get('/customers/:id', (req, res) => {
    const customers = Users.filter((customer) => customer._id.valueOf() !== req.params.id)
    User.findById(req.params.id)
        .then((customer) => {
            res.render('customer', {
                title: 'Customer',
                name: 'Customer Page',
                customers,
                customer
            })
        })
            
})

app.post('/customers', (req, res) => {
    User.findById(req.body.source)
        .then((sender) => {
            const money = req.body.amount
            if (sender.balance < money) return
            User.findById(req.body.target)
                .then(async(reciever) => {
                    reciever.balance += Number(money)
                    sender.balance -= Number(money)
                    await sender.save()
                    await reciever.save()
                    const process = new Process({
                        source: sender.name,
                        target: reciever.name,
                        amount: money
                    })
                    await process.save()
                    res.redirect('/customers')
                })
        })
        .catch((err) => console.log(err))
})

app.get('/history', (req, res) => {
    Process.find()
        .then((process) => {
            res.render('history', {
                title: 'History',
                name: 'Transaction History',
                process
            })
        })
})

app.get('*', (req, res) => {
    res.status(404).render('404', {
        title: 'Not Found',
        name: '404'
    })
})

module.exports = app