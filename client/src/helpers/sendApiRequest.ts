type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

const sendCorrectMethod = (method: Method, data: unknown): RequestInit => {
  if (method === 'GET') {
    return {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  return {
    method: method,
    json: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

export async function sendApiRequest<T>(
  url: string,
  method: Method,
  data: unknown = {},
): Promise<T> {
  const response = await fetch(url, {});
}
