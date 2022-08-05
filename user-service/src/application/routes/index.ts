import { Application } from "express";
import { userRoutes } from "./user";

export const registerRoutes = (app: Application) => {
    app.use('/api/v1', userRoutes)
}