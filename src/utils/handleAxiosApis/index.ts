import { AxiosResponse } from 'axios';

export async function handleAxiosApis<T extends any[]>(
  axiosPromise1: Promise<AxiosResponse<T[0]>>,
  axiosPromise2?: Promise<AxiosResponse<T[1]>>,
  axiosPromise3?: Promise<AxiosResponse<T[2]>>,
  axiosPromise4?: Promise<AxiosResponse<T[3]>>,
  axiosPromise5?: Promise<AxiosResponse<T[4]>>,
  axiosPromise6?: Promise<AxiosResponse<T[5]>>,
  axiosPromise7?: Promise<AxiosResponse<T[6]>>,
  axiosPromise8?: Promise<AxiosResponse<T[7]>>,
  axiosPromise9?: Promise<AxiosResponse<T[8]>>,
  axiosPromise10?: Promise<AxiosResponse<T[9]>>
): Promise<[...T]> {
  const axiosPromises = [
    axiosPromise1,
    axiosPromise2,
    axiosPromise3,
    axiosPromise4,
    axiosPromise5,
    axiosPromise6,
    axiosPromise7,
    axiosPromise8,
    axiosPromise9,
    axiosPromise10,
  ];

  return Promise.all(
    axiosPromises.map(async (promise) => {
      if (promise) {
        const { data } = await promise;
        return data;
      }
    })
  ) as any;
}
