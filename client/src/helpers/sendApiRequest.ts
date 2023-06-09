type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

export async function sendApiRequest<T>(
  url: string,
  method: Method,
  data: unknown = {},
): Promise<T> {}
