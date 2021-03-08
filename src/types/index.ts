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
export interface Entry {}

export type NoSSNData = Omit<PatientsData, 'ssn'>
export type NewEntry = Omit<PatientsData, 'id'>
export type PublicPatient = Omit<PatientsData, 'ssn' | 'entries'>
