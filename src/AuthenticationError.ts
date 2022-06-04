import mercurius from 'mercurius'

export class AuthenticationError extends mercurius.ErrorWithProps {
  constructor(message: string, ext: Record<string, any> = {}) {
    super(message, { ...ext, code: 'UNAUTHENTICATED' }, 200)
    this.name = 'AuthenticationError'
  }
}
