import e from "express";
import "dotenv/config";
import "./config/db"
import movie_router  from "./routers/movie.route"
import  user_router  from "./routes/user_router"

const app  = e();

app.use (e.json());
app.use
