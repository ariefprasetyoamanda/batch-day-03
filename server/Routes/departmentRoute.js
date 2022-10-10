import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";
const router = Router()


router.get('/',indexCtrl.DprCtrl.findAll)
router.get('/:id',indexCtrl.DprCtrl.findOne)
router.post('/',indexCtrl.DprCtrl.create)
router.put('/:id',indexCtrl.DprCtrl.update)
router.delete('/:id',indexCtrl.DprCtrl.deleted)
router.get ('/sql/:id',indexCtrl.DprCtrl.querySQL)
export default router