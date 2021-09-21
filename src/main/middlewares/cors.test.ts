import request from 'supertest'
import app from '../config/app'

describe('CORS Middleware', () => {
  test('Should enable CORS', async () => {
    const endpoint = '/test_cors'
    app.get(endpoint, (req, res) => res.send())

    await request(app)
      .get(endpoint)
      .expect('Access-Control-Allow-Origin', '*')
  })
})
