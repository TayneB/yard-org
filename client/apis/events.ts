import request from 'superagent'

const rootUrl = '/api/v1'

export async function getAllEvents(): Promise<string[]> {
  return request.get(rootUrl + '/events').then((res) => {
    return res.body
  })
}
