const bodyParser = require('body-parser');
const express= require('express');

const adminRoutes=require('./routes/admin');
const shopRoutes= require('./routes/shop');
const errController= require('./controllers/error');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(adminRoutes);
app.use(shopRoutes);

app.use(errController.get404);



app.listen(3000);