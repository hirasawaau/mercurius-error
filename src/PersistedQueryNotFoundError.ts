import mercurius from 'mercurius'

export class PersistedQueryNotFoundError extends mercurius.ErrorWithProps {
  constructor(message: string, ext: Record<string, any> = {}) {
    super(message, { ...ext, code: 'PERSISTED_QUERY_NOT_FOUND' }, 200)
    this.name = 'PersistedQueryNotFoundError'
  }
}
