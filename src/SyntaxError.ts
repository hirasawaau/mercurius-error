import mercurius from 'mercurius'

export class SyntaxError extends mercurius.ErrorWithProps {
  constructor(message: string, ext: Record<string, any> = {}) {
    super(message, { ...ext, code: 'GRAPHQL_PARSE_FAILED' }, 200)
    this.name = 'SyntaxError'
  }
}
