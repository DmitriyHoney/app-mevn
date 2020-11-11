//Modules
const express = require('express')
const mongoose = require('mongoose')

//Const
const DB_URL = 'mongodb+srv://dmitryv2:tuaw4mqg2t@cluster0.a0lwf.mongodb.net/nodeApplication?retryWrites=true&w=majority'
const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect(DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log('db connect success');
}).catch(e => console.log(e))

app.listen(PORT, () => {
    console.log(`server start on port:${PORT}`);
})

app.get('/', (req, res) => {
    res.json({ message: 'connect nodeJS success' })
})