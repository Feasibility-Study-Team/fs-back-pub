const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const InventorRoute = require('./routes/InventorRoute');
const PengujiRoute =  require('./routes/PengujiRoute')
const AlatRoute = require('./routes/AlatRoute');
const InstitusiRoute = require('./routes/InstitusiRoute');
const AspekRoute = require('./routes/AspekRoute');
const ParameterRoute = require('./routes/ParameterRoute')
const DataAspekRoute = require('./routes/DataAspekRoute');
const TransaksiRoute = require('./routes/TransaksiRoute')
const PengujianRoute = require('./routes/PengujianRoute');
const RegisterRoute = require('./routes/RegisterRoute')
const LoginRoute = require('./routes/LoginRoute')
const PhotoInvestorRoute = require('./routes/inventor/PhotoInventorRoute');
const PhotoPengujiRoute = require('./routes/penguji/PhotoPengujiRoute')

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(InventorRoute)
app.use(PengujiRoute)
app.use(AlatRoute)
app.use(InstitusiRoute)
app.use(AspekRoute)
app.use(ParameterRoute)
app.use(DataAspekRoute)
app.use(TransaksiRoute)
app.use(PengujianRoute)
app.use(RegisterRoute)
app.use(LoginRoute)
app.use(PhotoInvestorRoute)
app.use(PhotoPengujiRoute)

app.listen(process.env.APP_PORT, ()=> {
    console.log('Server berjalan pada port 3000');
})