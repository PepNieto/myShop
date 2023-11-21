import { generateAllSubsequences } from '../../src/services/product'
import request from 'supertest'
import { app } from '../../src/index'
jest.mock('../../src/models/product', () => {
  return {
    __esModule: true,
    default: jest.fn().mockImplementation(() => ({
      save: jest.fn().mockResolvedValue({})
    }))
  }
})
describe('generateSubsequences', () => {
  describe('get generateSubquence route',
    () => {
      it('should return a forbidden status (403)', async () => {
        await request(app)
          .get('/generateSubSequence')
          .expect(403)
      })
    })
})
describe('generateSubsequences', () => {
  const productIds: number[] = [1, 2, 3]

  it('should respond with generated subsequences for 1, 2, 3', () => {
    expect(
      generateAllSubsequences(productIds))
      .toStrictEqual([[1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]])
  })
})
