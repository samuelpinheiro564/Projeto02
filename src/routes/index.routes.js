import { Router } from "express";
import {Lojarota  } from "./roupas.routes.js";

const router = router();

router.use("/roupas",Lojarota );

export default Router;