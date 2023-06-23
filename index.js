const express = require('express')
const {db} = require('./config/db')
const app = express()

app.use(express.json())
const { v4: uuidv4 } = require('uuid');
db.connect()
const path = require('path');
const fileUpload = require('express-fileupload');
app.use(express.urlencoded({extended:true}))

app.use('/images',express.static(path.join(__dirname,'images')))

app.use(fileUpload())

app.post('/api/upload',(req,res)=>{
    console.log("files",req.files);
    let extName = path.extname(req.files.profileImg.name)
    if (extName == '.jpeg' || extName == '.jpg' || extName == '.png') {
        const image = req.files.profileImg.mv(__dirname+"/images/"+uuidv4()+extName)
        // const saveImage = async (name, imagePath) => {
        //     const image = new Image();
        //     image.name = name;
        //     image.path = imagePath;
            
        //     await image.save();
        //   };
        //   saveImage('example.jpg', '/path/to/example.jpg');
        res.send('ok')
    }else{
        res.status(500).json("Ext error")
    }
})




app.listen(3000,()=>{
    console.log("Server is running ...");
})