import { Router } from "express"
import { createCat, deleteCat, patchCat, readAllCat, readCat, updateCat } from "./cats.service"

const router = Router()

//Read 고양이 전체 데이터 조회
router.get("/cats", readAllCat)

//Read 특정 고양이 데이터 조회
router.get("/cats/:id", readCat)

//Create 새로운 고양이 추가 api
router.post("/cats", createCat)

//Update 고양이 데이터 업데이트
router.put("/cats/:id", updateCat)

//Update 고양이 데이터 부분 업데이트
router.patch("/cats/:id", patchCat)

//Delet 고양이 데이터 삭제
router.delete("/cats/:id", deleteCat)

export default router
