export enum HttpStatusCode {
  noContent = 204,
  unathorize = 401,
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
}
