import app from "./server.js";
import mongodb from "mongodb";
import ReviewsDAO from "./dao/reviewsDAO.js";

const MongoClient = mongodb.MongoClient;
const uri = "mongodb+srv://tomkwon:4970318tomkwon@cluster0.yskhy4h.mongodb.net/?retryWrites=true&w=majority";

const port = 8000;

MongoClient.connect(
    uri,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    })
    .then(async client => {
        await ReviewsDAO.injectDB(client);
        app.listen(port, () => {
            console.log(`listening on port ${port}`);
        })
    })
    .catch(err => {
        console.error(err.stack);
        process.exit(1);
    })