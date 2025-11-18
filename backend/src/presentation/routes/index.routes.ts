import { Router } from "express";

const router = Router()

router.get('/', async (req, res) => {
    res.send("Backend ERP Schools funcionando");
})

export default router