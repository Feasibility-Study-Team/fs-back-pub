const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');

const InventorRoute = require('./routes/admin/InventorRoute');
const PengujiRoute = require('./routes/admin/PengujiRoute')
const AlatRoute = require('./routes/admin/AlatRoute');
const InstitusiRoute = require('./routes/admin/InstitusiRoute');
const AspekRoute = require('./routes/admin/AspekRoute');
const ParameterRoute = require('./routes/admin/ParameterRoute')
const DataAspekRoute = require('./routes/admin/DataAspekRoute');
const TransaksiRoute = require('./routes/admin/TransaksiRoute')
const PengujianRoute = require('./routes/admin/PengujianRoute');
const RegisterRoute = require('./routes/RegisterRoute')
const LoginRoute = require('./routes/LoginRoute')
const PhotoInvestorRoute = require('./routes/inventor/PhotoInventorRoute');
const PhotoPengujiRoute = require('./routes/penguji/PhotoPengujiRoute')
const Dashboard = require('./routes/DashboardRoute')
const AlatPage = require('./routes/AlatPageRoute')
const RoleRoute = require('./routes/admin/RoleRoute')

dotenv.config()

const app = express()

app.use('/',express.static(path.join(__dirname, "src")))

app.use(cors({ credentials: true, origin: process.env.URL || '*' }))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.use(upload.array());
// access folder public
app.use(express.static('public'));

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
app.use(Dashboard)
app.use(AlatPage)
// app.use(RoleRoute)

app.listen(process.env.APP_PORT, () => {
    console.log('Server berjalan pada port 3000');
})