import mercurius from 'mercurius'

export class ForbiddenError extends mercurius.ErrorWithProps {
  constructor(message: string, ext: Record<string, any> = {}) {
    super(message, { ...ext, code: 'FORBIDDEN' }, 200)
    this.name = 'ForbiddenError'
  }
}
