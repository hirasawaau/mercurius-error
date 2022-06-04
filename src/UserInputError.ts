import mercurius from 'mercurius'

export class UserInputError extends mercurius.ErrorWithProps {
  constructor(message: string, ext: Record<string, any> = {}) {
    super(message, { ...ext, code: 'BAD_USER_INPUT' }, 200)
    this.name = 'UserInputError'
  }
}
