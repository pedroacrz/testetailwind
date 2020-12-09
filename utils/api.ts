import axios, { AxiosResponse } from 'axios';

export async function api(path: string): Promise<AxiosResponse<any>>{
    return axios.get(path);
}

export async function createUser(path: string, params): Promise<AxiosResponse<any>>{
    return axios.post(path, params);
}