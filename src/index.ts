import express from 'express'
import cors from 'cors'
import diagnosesRoute from '../src/routes/diagnoses'
import patientsRoute from '../src/routes/patients'
const app = express()
app.use(express.json())

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
  })
)

app.get('/api/ping', (_req, res) => {
  res.send('pong')
})

app.use('/api/diagnoses', diagnosesRoute)
app.use('/api/patients', patientsRoute)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`)
})
