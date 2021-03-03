import data from '../../data/patients'
import * as uuid from 'uuid'

import { NoSSNData, PatientsData, NewEntry } from '../types'

const fetchData = (): NoSSNData[] => {
  return data
}

const addNewEntry = (patientData: NewEntry): PatientsData => {
  const id: string = uuid.v1()
  const newEntry = {
    id,
    ...patientData,
  }
  data.push(newEntry)
  return newEntry
}

export default {
  fetchData,
  addNewEntry,
}
