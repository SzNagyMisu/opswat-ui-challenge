import { required, email } from '@/quasar-rules'

describe('Quasar validation rules', () => {
  describe('required', () => {
    it('returns true if value is given', () => {
      expect(required('some value')).toBe(true)
    })

    it('returns "Field is required" if value is empty', () => {
      expect(required('')).toEqual('Field is required')
    })
  })

  describe('email', () => {
    it('returns true if email is valid', () => {
      expect(email('valid@email.hu')).toBe(true)
    })

    it('returns "Invalid e-mail format" if email format is invalid', () => {
      expect(email('invalid.email.hu')).toEqual('Invalid e-mail format')
    })

    it('returns "Invalid e-mail format" if email is not given', () => {
      expect(email('')).toEqual('Invalid e-mail format')
    })
  })
})
