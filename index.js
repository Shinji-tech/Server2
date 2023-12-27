const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes')
const app =express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use('/users', userRoutes)
require('./Connection')

app.get('/' , (req,res)=> {
    res.json('test ok');
})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));