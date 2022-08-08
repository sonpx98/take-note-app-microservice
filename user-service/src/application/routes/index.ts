import { Application } from "express";
import { userRoutes } from "./user-router";

export const registerRoutes = (app: Application) => {
    app.use('/api/v1', userRoutes)
}