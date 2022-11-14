const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const InventorRoute = require('./routes/InventorRoute');
const PengujiRoute =  require('./routes/PengujiRoute')
const AlatRoute = require('./routes/AlatRoute');

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(InventorRoute)
app.use(PengujiRoute)
app.use(AlatRoute)

app.listen(process.env.APP_PORT, ()=> {
    console.log('Server berjalan pada port 3000');
})