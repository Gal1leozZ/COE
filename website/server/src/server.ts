import express from "express";
import db from './config/database.config';
import UserRouter from './routes/user.routers';

const app = express();
const port = process.env.PORT || 9000;

db.sync().then(()=>{
    console.log('db connected');
});

const rootUrl = "/api/v1";

app.use(express.json());
app.use(rootUrl+'/user', UserRouter);

// app.get('/', (req, res) => {
//     return res.send('hello world');
// })


app.listen(port,()=>{
    console.log(`server is listening at http://localhost:${port}`);
})