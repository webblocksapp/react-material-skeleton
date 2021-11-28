import { AxiosResponse } from 'axios';

export async function handleAxiosApi<T>(axiosPromise: Promise<AxiosResponse<T>>) {
  const { data } = await axiosPromise;
  return data;
}
