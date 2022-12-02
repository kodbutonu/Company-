const express = require('express')
const app = express()
const Database = require('./server/database')

app.use(express.static('public'))
app.use(express.json())


app.post('/insert' ,(req,res) =>{
    Database.insertData(req.body,'contact')
    .then(() =>{
        res.sendStatus(200)
    })
    .catch(()=>{
        res.sendStatus(400)
    })

})

app.get('/getdata' , (req,res) =>{
    Database.getData()
    .then((result)=>{
        console.log(result)
        res.send({data : result})
    })
    .catch(() =>{
        console.log('hata var')
        res.sendStatus(400)
    })
})

app.post('/admin' , (req,res) =>{
    
    const adminUserName = req.body.adminUserName
    const adminPass = req.body.adminPass
    Database.admin(adminUserName,adminPass)
    .then(() =>{
        res.sendStatus(200)
    })
    .catch(() => {
        res.sendStatus(400)
    })
   
})

app.post('/add-admin' ,(req,res) =>{

    Database.insertData(req.body,'admin')
    .then(() =>{
        res.sendStatus(200)
    })
    .catch(() =>{
        res.sendStatus(400)
    })
})



app.listen(5050,() =>{
    console.log('server working')
})