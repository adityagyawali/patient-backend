import data from '../../data/diagnoses'
import { DiagnoseData } from '../types'

const fetchData = (): DiagnoseData[] => {
  return data
}

export default {
  fetchData,
}
