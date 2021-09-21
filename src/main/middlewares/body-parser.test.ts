import request from 'supertest'
import app from '../config/app'

describe('Body Parser Middleware', () => {
  test('Should parse body as JSON', async () => {
    const endpoint = '/test_body_parser'
    const payload = { name: 'test' }

    app.post(endpoint, (req, res) => res.send(req.body))

    await request(app)
      .post(endpoint)
      .send(payload)
      .expect(payload)
  })
})
