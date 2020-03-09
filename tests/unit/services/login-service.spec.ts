import moxios from 'moxios'
import loginService from '@/services/login-service'
import { BACKEND_BASE_URL } from '@/constants'

describe('LoginService', () => {
  beforeEach(() => {
    moxios.install(loginService.http)
  })
  afterEach(() => {
    moxios.uninstall(loginService.http)
  })

  describe('createUser(userData)', () => {
    const userData = { username: 'me', email: 'my@email.com', password: 'my-password' }

    it('should send a post request to <BACKEND_BASE_URL>/users with parameter json stringified for body', (done) => {
      loginService.createUser(userData)

      moxios.wait(() => {
        const request = moxios.requests.mostRecent()
        expect(request.config).toHaveProperty('baseURL', BACKEND_BASE_URL)
        expect(request.config).toHaveProperty('url', 'users')
        expect(request.config).toHaveProperty('method', 'post')
        expect(request.config).toHaveProperty('data', JSON.stringify(userData))
        done()
      })
    })

    it('should return user in a promise on success', (done) => {
      const onResolved = jest.fn()
      loginService.createUser(userData).then(onResolved)

      moxios.wait(() => {
        const request = moxios.requests.mostRecent()
        request.respondWith({
          status: 200,
          response: { user: { username: 'me', email: 'my@email.com' } }
        }).then(() => {
          expect(onResolved).toHaveBeenCalledWith({ username: 'me', email: 'my@email.com' })
          done()
        })
      })
    })
  })
})
