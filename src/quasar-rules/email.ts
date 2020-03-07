import * as EmailValidator from 'email-validator'

export default (val: string): true|string => val && EmailValidator.validate(val) || 'Invalid e-mail format'
