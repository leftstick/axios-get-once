const { expect } = require('chai')
const nock = require('nock')
const { create } = require('../')

describe('verify', () => {
  it('only last call works', done => {
    nock('http://api.test.com')
      .get('/users')
      .query(query => query.name)
      .delay(300)
      .reply(200, uri => uri)

    const request = create()
    const funcs = [
      () => {
        throw new Error()
      },
      () => {
        throw new Error()
      },
      res => {
        expect(res.data).to.equal('/users?name=2')
      }
    ]

    const result = []

    for (let i = 0; i < 3; i++) {
      result.push(
        request({
          method: 'get',
          url: 'http://api.test.com/users',
          params: {
            name: i
          }
        }).then(funcs[i])
      )
    }

    Promise.all(result).catch(err => done(err))

    setTimeout(done, 1500)
  })
})
