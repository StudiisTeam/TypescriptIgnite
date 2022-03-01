import { HttpResponse } from "../protocols/http-protocols"

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})
