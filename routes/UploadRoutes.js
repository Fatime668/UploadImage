const express = require('express');
const {UploadController} = require('../controllers/UploadController')

const uploadRoutes = express.Router();

uploadRoutes.post('/',UploadController.upload)


module.exports = {
    uploadRoutes
}