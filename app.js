const express = require('express')
const app = express()
const port = process.env.PORT || 8899
const session = require('express-session')
const ejs = require('ejs')
const nocache = require('nocache')
const path = require('path')



const adminRouter = require('./routes/adminRoutes')
const userRouter = require('./routes/userRoutes')


app.use('view engine', 'ejs')
app.set('views',[
    path.join(__dirname,'views/admin'),
    path.join(__dirname,'views/users')
])

app.use(nocache())
app.use(session({
    secret : 'secret',
    resave : false,
    saveUninitialized : true,
    cookie : {
        secure : false,
        httpOnly : true,
        maxAge : 72*60*60*1000
    }
}))

app.use(express.static(path.join(__dirname,'public')))


app.use(express.json())
app.use(express.urlencoded({ extended : true}))


app.use('/admin', adminRouter)
app.use('/', userRouter)

app.listen(port, () => {
    console.log('===========================================================')
    console.log(`Server is running on ${port} = http://localhost:${port} `)
    console.log('===========================================================')
})