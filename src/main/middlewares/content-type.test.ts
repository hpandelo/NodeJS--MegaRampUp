import request from 'supertest'
import app from '../config/app'

describe('Content-Type Middleware', () => {
  test('Should return default content-type as JSON', async () => {
    const endpoint = '/test_content_type'

    app.get(endpoint, (req, res) => res.send(''))

    await request(app)
      .get(endpoint)
      .expect('content-type', /json/)
  })
})
