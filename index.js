import express from 'express';
import path from "path";
import router from './routes/myRouters.js';

const app = express();

// const indexPage = path.join(__dirname, "templates/index.html");

// ====== [ middleware Ordering in important in Express.js as same as C# .net ] ====== //

// Use express.json as middleware to convert request to json
app.use(express.json());

// Use express.urlencoded as middleware to encode form data
app.use(express.urlencoded({ extended: false }));

// Use router as middleware to mapping request with url endpoint
app.use(router);

// Set Express server port
app.listen(8080, () => {
    console.log('Run at port 8080, http://localhost:8080/')
});

