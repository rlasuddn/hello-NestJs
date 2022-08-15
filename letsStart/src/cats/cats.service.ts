import { Request, Response } from "express"
import { Cat, CatType } from "./cats.model"

//Read 고양이 전체 데이터 조회
export const readAllCat = (req: Request, res: Response) => {
    try {
        const cats = Cat
        res.status(200).send({ success: true, data: { cats } })
    } catch (error: unknown) {
        if (error instanceof Error) res.status(400).send({ success: false, error: error.message })
    }
}

//Read 특정 고양이 데이터 조회
export const readCat = (req: Request, res: Response) => {
    try {
        const params = req.params
        const cat = Cat.find((cat) => {
            return cat.id === params.id
        })
        res.status(200).send({ success: true, data: { cat } })
    } catch (error: unknown) {
        if (error instanceof Error) res.status(400).send({ success: false, error: error.message })
    }
}

//Create 새로운 고양이 추가
export const createCat = (req: Request, res: Response) => {
    try {
        const data = req.body
        Cat.push(data) //create
        res.status(200).send({ success: true, data })
    } catch (error: unknown) {
        if (error instanceof Error) res.status(400).send({ success: false, error: error.message })
    }
}

//Update 고양이 데이터 업데이트
export const updateCat = (req: Request, res: Response) => {
    try {
        const params = req.params
        const body = req.body
        let result
        Cat.forEach((cat) => {
            if (cat.id === params.id) {
                cat = body
                result = cat
            }
        })
        res.status(200).send({ success: true, data: { cat: result } })
    } catch (error: unknown) {
        if (error instanceof Error) res.status(400).send({ success: false, error: error.message })
    }
}

//Update 고양이 데이터 부분 업데이트
export const patchCat = (req: Request, res: Response) => {
    try {
        const params = req.params
        const body = req.body
        let result
        Cat.forEach((cat) => {
            if (cat.id === params.id) {
                cat = { ...cat, ...body }
                result = cat
            }
        })
        res.status(200).send({ success: true, data: { cat: result } })
    } catch (error: unknown) {
        if (error instanceof Error) res.status(400).send({ success: false, error: error.message })
    }
}

//Delet 고양이 데이터 삭제
export const deleteCat = (req: Request, res: Response) => {
    try {
        const params = req.params
        const newCat = Cat.filter((cat) => cat.id !== params.id) //id가 같지 않은 데이터만 return이 된다.

        res.status(200).send({ success: true, data: newCat })
    } catch (error: unknown) {
        if (error instanceof Error) res.status(400).send({ success: false, error: error.message })
    }
}
