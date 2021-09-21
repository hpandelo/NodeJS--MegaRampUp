import { Request, Response } from 'express'
import request from 'supertest'
import app from '../config/app'

describe('Content-Type Middleware', () => {
  test('Should return default content-type as JSON', async () => {
    const endpoint = '/test_default_content_type'

    app.get(endpoint, (req: Request, res: Response) => res.send(''))

    await request(app)
      .get(endpoint)
      .expect('content-type', /json/)
  })

  test('Should return xml content-type when forced', async () => {
    const endpoint = '/test_content_type_xml'

    app.get(endpoint, (req: Request, res: Response) => {
      res.type('xml')
      res.send('')
    })

    await request(app)
      .get(endpoint)
      .expect('content-type', /xml/)
  })
})
