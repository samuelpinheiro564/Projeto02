import { Router } from "express";
import {
    CreateLoja,
    ListarLoja,
    updateLoja,
    DeleteLoja,
} from "../controller/Loja.controller.js"

const Lojarota = Router();

Lojarota.get("/",ListarLoja ); 

Lojarota.post("/",CreateLoja );

Lojarota.delete("/:id",DeleteLoja );

Lojarota.put ("/:id",updateLoja);

export default Lojarota;