//Modules
const express       = require('express')
const mongoose      = require('mongoose')
const bodyParser    = require('body-parser')
const { routes }    = require('./src/routes')

//Const
const DB_URL = 'mongodb+srv://dmitryv2:tuaw4mqg2t@cluster0.a0lwf.mongodb.net/nodeApplication?retryWrites=true&w=majority'
const PORT = process.env.PORT || 3000
console.log(routes);
//Настроим подключение к бд
mongoose.connect(DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log('db connect success');
}).catch(e => console.log(e))



//Инициализируем проект
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


//объявим маршруты
routes.forEach(route => {
    app.use(`/api/${route}`, require(`./src/routes/${route}`))
})

app.listen(PORT, () => {
    console.log(`server start on port:${PORT}`);
})

app.get('/', (req, res) => {
    res.json({ message: 'connect nodeJS success' })
})