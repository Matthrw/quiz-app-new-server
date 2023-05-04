import express from "express";
import morgan from "morgan";
import cors from "cors";
import { config } from "dotenv";
import router from "./router/route.js";

//import connection files
import connect from "./database/conn.js";

const app = express();
// app middlewares
app.use(morgan("tiny"));
app.use(cors({
	origin:["http://localhost:3000","https://edt-quiz-frontend-app.onrender.com"]
}));
app.use(express.json());
config();

//application port
const port = process.env.PORT || 8080;

// routes
app.use("/api", router); //route apis
app.get("/", (req, res) => {
	try {
		res.json("Get Request");
	} catch (error) {
		res.json(error);
	}
});

connect()
	.then(() => {
		try {
			app.listen(port, () => {
				console.log(`Server connnect to port ${port}`);
			});
		} catch (error) {
			console.log("cannot connect to the server");
		}
	})
	.catch((error) => {
		console.log("Invalid Database connection");
	});
