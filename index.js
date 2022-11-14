const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const InventorRoute = require('./routes/InventorRoute');

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(InventorRoute)

app.listen(process.env.APP_PORT, ()=> {
    console.log('Server berjalan pada port 3000');
})