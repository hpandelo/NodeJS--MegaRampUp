import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return an account when success', async () => {
    const endpoint = '/api/signup'
    const payload = {
      name: 'Test Name',
      email: 'test@test.com',
      password: '123456',
      passwordConfirmation: '123456'
    }

    await request(app)
      .post(endpoint)
      .send(payload)
      .expect('Access-Control-Allow-Origin', '*')
      .expect('Access-Control-Allow-Headers', '*')
      .expect('Access-Control-Allow-Methods', '*')
      .expect(200)
  })
})
