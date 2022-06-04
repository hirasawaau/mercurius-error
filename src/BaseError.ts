import mercurius from 'mercurius'

export abstract class MercuriusBaseError extends mercurius.ErrorWithProps {
  constructor(message: string, errorCode: string) {
    super(message, { code: errorCode }, 200)
  }
}
