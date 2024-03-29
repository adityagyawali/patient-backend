/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import express, { Request, Response } from 'express'
import patientsService from '../services/patientsService'
import toNewPatientEntry from '../utils/toNewPatientEntry'
const router = express.Router()

router.get('/', (_req: Request, res: Response) => {
  const patientsData = patientsService.fetchData()
  res.json(patientsData)
})

router.post('/', (req: Request, res: Response) => {
  console.log(req.body)
  try {
    const newPatientEntry = toNewPatientEntry(req.body)
    const addedEntry = patientsService.addNewEntry(newPatientEntry)
    res.send(addedEntry)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params
  const patientsData = patientsService.fetchData()
  const singlePatientData = patientsData.find((patient) => patient.id === id)
  console.log({ id, singlePatientData })
  if (!singlePatientData) {
    res.status(404)
  } else {
    res.status(200).json(singlePatientData)
  }
})

export default router
