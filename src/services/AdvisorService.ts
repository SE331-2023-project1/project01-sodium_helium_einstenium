import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { AdvisorInfo } from '@/info'
const apiClient: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
export default {
    getAdvisor(): Promise<AxiosResponse<AdvisorInfo[]>>{
        return apiClient.get<AdvisorInfo[]>('/advisors')
    },
    getAdvisorById(id:number): Promise<AxiosResponse<AdvisorInfo>>{
        return apiClient.get<AdvisorInfo>('advisors/'+ id.toString())
    },
    addAdvisor(id:number, data: AdvisorInfo): Promise<AxiosResponse<AdvisorInfo>>{
        return apiClient.post<AdvisorInfo>('/advisor' + id.toString(), data)
    }
}