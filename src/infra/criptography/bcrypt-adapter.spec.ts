import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'

const SALT = 12
const makeSut = (): BcryptAdapter => new BcryptAdapter(SALT)

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return await new Promise((resolve) => resolve('hash'))
  }
}))

describe('Bcrypt Adapter', () => {
  test('Should call bcrypt with correct values', async () => {
    const sut = makeSut()
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await sut.encrypt('any_value')
    expect(hashSpy).toHaveBeenLastCalledWith('any_value', 12)
  })

  test('Should return a hash on success', async () => {
    const sut = makeSut()
    const hash = await sut.encrypt('any_value')
    expect(hash).toBe('hash')
  })

  // ToDo: Check why mockReturnValueOnce isn't accepting parameter
  // test('Should throw if bcrypt throws', async () => {
  //   const sut = makeSut()
  //   const promiseThrows = new Promise<string>((resolve, reject) => reject(new Error()))
  //   jest.spyOn(bcrypt, 'hash').mockReturnValueOnce(promiseThrows)
  //   const promise = await sut.encrypt('any_value')
  //   await expect(promise).rejects.toThrow()
  // })
})
