import request from 'supertest'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'
import app from '../config/app'

describe('SignUp Routes', () => {
  const accountsCollection = 'accounts'

  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL as string)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    await MongoHelper.cleanupCollection(accountsCollection)
  })

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
