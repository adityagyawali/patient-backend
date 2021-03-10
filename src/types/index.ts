export interface DiagnoseData {
  code: string
  name: string
  latin?: string
}

export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}

export interface PatientsData {
  id: string
  name: string
  dateOfBirth: string
  ssn: string
  gender: Gender
  occupation: string
  entries: Entry[]
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BaseEntry {
  id: string
  description: string
  date: string
  specialist: string
  diagnosisCodes?: Array<DiagnoseData['code']>
}

export enum HealthCheckRating {
  'Healthy' = 0,
  'LowRisk' = 1,
  'HighRisk' = 2,
  'CriticalRisk' = 3,
}

interface HealthCheckEntry extends BaseEntry {
  type: 'HealthCheck'
  healthCheckRating: HealthCheckRating
}
interface OccupationalHealthCareEntry extends BaseEntry {
  type: 'OccupationalHealthcare'
  employerName: string
  sickLeave?: { startDate: string; endDate: string }
}
interface HospitalEntry extends BaseEntry {
  type: 'Hospital'
  employerName?: string
  sickLeave?: { startDate: string; endDate: string }
  discharge?: { date: string; criteria: string }
}

export type Entry = HospitalEntry | OccupationalHealthCareEntry | HealthCheckEntry

export type NoSSNData = Omit<PatientsData, 'ssn'>
export type NewEntry = Omit<PatientsData, 'id'>
export type PublicPatient = Omit<PatientsData, 'ssn' | 'entries'>
