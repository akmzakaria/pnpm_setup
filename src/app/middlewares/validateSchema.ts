import { ZodObject } from 'zod'

export const validateSchema = (schema: ZodObject) => (req: any, res: any, next: any) => {
  schema.parse({
    body: req.body,
  })

  next()
}
