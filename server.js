const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const path = require('path')

const app = express()

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 5000

app.use(morgan('tiny'))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

//view engine
app.set("view engine", "ejs")

//load assets of ytour project
app.use('/css',express.static(path.resolve(__dirname, "assets/css")))
app.use('/img',express.static(path.resolve(__dirname, "assets/img")))
app.use('/js',express.static(path.resolve(__dirname, "assets/js")))

//const db = 'mongodb+srv://denis:12345@cluster0.k8yup.gcp.mongodb.net/usersystem?retryWrites=true&w=majority'



app.get('/',(req,res)=>{
   res.render('index')
})


app.listen(PORT, ()=>{
    console.log('hello world')
})