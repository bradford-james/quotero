const { getQuote } = require('../src/getQuote')

const mockQuote = {
  quote: expect.any(String),
  author: expect.any(String),
}

test('Quote is retrieved', async () => {
  await expect(getQuote()).resolves.toMatchObject(mockQuote)
})
