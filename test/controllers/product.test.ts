import { mockReq, mockRes } from 'jest-mock-express'
import { generateSubsequences } from '../../src/controllers/product'
import * as productService from '../../src/services/product'

jest.mock('../../src/services/product')

describe('generateSubsequences Controller', () => {
  it('should respond with generated subsequences', async () => {
    const req = mockReq({
      body: { productIds: [1, 2, 3] }
    })
    const res = mockRes()

    productService.generateAllSubsequences.mockReturnValue([[1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]])


    await generateSubsequences(req, res)

    expect(res.status).toHaveBeenCalledWith(201)
    expect(res.json).toHaveBeenCalledWith([[1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]])
  })
})
