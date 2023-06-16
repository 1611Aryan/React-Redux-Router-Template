type Endpoint = {
  url: string;
  method: Method;
};
enum Method {
  'POST' = 'post',
  'GET' = 'get',
  'PATCH' = 'patch',
  'PUT' = 'put',
  'DELETE' = 'delete',
}

const baseUrl = process.env.NODE_ENV !== 'production' ? '' : '';

export const loginEndpoint: Endpoint = {
  url: `${baseUrl}/login`,
  method: Method.POST,
};
