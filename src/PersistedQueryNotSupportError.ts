import mercurius from 'mercurius'

export class PersistedQueryNotSupportError extends mercurius.ErrorWithProps {
  constructor(message: string, ext: Record<string, any> = {}) {
    super(message, { code: 'PERSISTED_QUERY_NOT_SUPPORTED', ...ext })
    this.name = 'PersistedQueryNotSupportError'
  }
}
