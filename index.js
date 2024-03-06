require('dotenv').config()
const express = require('express')  // can also create ->import express from 'express'
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  res.send('you have benn successfully logined !')
})

app.get('/youtube',(req,res)=>{
   res.send('<h1> hello bro go watch this on youtube</h1>')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})
