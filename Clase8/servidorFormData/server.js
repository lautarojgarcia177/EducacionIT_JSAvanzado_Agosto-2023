const express = require('express')
const multer = require('multer')
const cors = require('cors')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './tmp/mis-uploads')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

const app = express()
app.use(cors())

app.post('/datos', multer().none(), function (req, res) {
    const datos = req.body
    console.log({...datos})
    res.send('Datos recibidos!')
})

app.post('/upload', upload.single('archivo'), function (req, res, next) {
    res.send('Archivo subido!')
})

const PORT = 8080
app.listen(PORT, () => console.log(`Servidor express escuchando en http://localhost:${PORT}`))

