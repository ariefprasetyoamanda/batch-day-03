import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";
const router = Router()


router.get('/',indexCtrl.JhCtrl.findAll)
router.get('/:id',indexCtrl.JhCtrl.findOne)
router.post('/',indexCtrl.JhCtrl.create)
router.put('/:id',indexCtrl.JhCtrl.update)
router.delete('/:id',indexCtrl.JhCtrl.deleted)
router.get ('/sql/:id',indexCtrl.JhCtrl.querySQL)
router.get('/',indexCtrl.JhsCtrl.findAll)
router.get('/:id',indexCtrl.JhsCtrl.findOne)
router.post('/',indexCtrl.JhsCtrl.create)
router.put('/:id',indexCtrl.JhsCtrl.update)
router.delete('/:id',indexCtrl.JhsCtrl.deleted)
router.get ('/sql/:id',indexCtrl.JhsCtrl.querySQL)
export default router