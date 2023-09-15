import { Router } from "express";
import musicController from "../controllers/music-controller";
import { validateSchemaMiddleware } from "../middlewares/schemaValidation";
import musicSchema from "../schemas/musicSchema";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post("/musics", validateSchemaMiddleware(musicSchema), musicController.createMusic); // TODO: validação via Joi

export default musicRouter;