import express, { Request, Response } from 'express'
import diagnoseService from '../services/diagnoseService'
const router = express.Router()

router.get('/', (_req: Request, res: Response) => {
  const diagnoseData = diagnoseService.fetchData()
  res.json(diagnoseData)
})

export default router
