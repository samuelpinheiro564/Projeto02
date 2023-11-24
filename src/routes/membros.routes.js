import { Router } from "express";
import {
    CreateMembro,
    updatedMembro,
    DeleteMembro,
    getAllMembro  
    
} from "../controller/Membros.js"

const Membrorota = Router();

Membrorota.get("/",getAllMembro ); 

Membrorota.post("/",CreateMembro);

Membrorota.delete("/:id",DeleteMembro );

Membrorota.put ("/:id",updatedMembro);

export default Membrorota;