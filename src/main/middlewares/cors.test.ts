import { Request, Response } from 'express'
import request from 'supertest'
import app from '../config/app'

describe('CORS Middleware', () => {
  test('Should enable CORS', async () => {
    const endpoint = '/test_cors'
    app.get(endpoint, (req: Request, res: Response) => res.send())

    await request(app)
      .get(endpoint)
      .expect('Access-Control-Allow-Origin', '*')
      .expect('Access-Control-Allow-Headers', '*')
      .expect('Access-Control-Allow-Methods', '*')
  })
})
