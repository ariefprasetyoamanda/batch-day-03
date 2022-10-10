import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";
const router = Router()


router.get('/',indexCtrl.JbsCtrl.findAll)
router.get('/:id',indexCtrl.JbsCtrl.findOne)
router.post('/',indexCtrl.JbsCtrl.create)
router.put('/:id',indexCtrl.JbsCtrl.update)
router.delete('/:id',indexCtrl.JbsCtrl.deleted)
router.get ('/sql/:id',indexCtrl.JbsCtrl.querySQL)
export default router