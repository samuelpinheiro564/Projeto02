import { Router } from "express";
import Membrorota   from "./membros.routes.js";

const router = Router();


router.use("/membros",Membrorota );
router.use("/membros/:id",Membrorota);

router.get('/',(req,res)=>{
    return res.status(200).send({message:"servidor funcionando "})
})

export default router;