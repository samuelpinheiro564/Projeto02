import { Router } from "express";
import {
    exibirMembros,
    CreateMembro,
    updatedMembro,
    DeleteMembro,
    getAllMembro  
    
} from "../controller/Membros.js"

const Membrorota = Router();

Membrorota.get("/",exibirMembros );

Membrorota.post("/",CreateMembro);

Membrorota.delete("/:id",DeleteMembro );

Membrorota.put ("/:id",updatedMembro);

export default Membrorota;