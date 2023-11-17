import { Router } from "express";
import {
    CreateLoja,
    ListarLoja,
    updateLoja,
    DeleteLoja,
    ListarLojaId,
} from "../controller/Loja.controller.js"

const Lojarota = Router();

Lojarota.get("/",ListarLoja ); 

Lojarota.get("/:id",ListarLojaId );

Lojarota.post("/",CreateLoja );

Lojarota.delete("/:id",DeleteLoja );

Lojarota.put ("/:id",updateLoja);

export default Lojarota;