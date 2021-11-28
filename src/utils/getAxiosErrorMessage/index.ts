import axios, { AxiosError } from 'axios';

export const getAxiosErrorMessage = (error: AxiosError | unknown): string => {
  return axios.isAxiosError(error) ? error.message : 'An unknown error ocurred';
};
