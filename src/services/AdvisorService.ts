import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { AdvisorInfo } from '@/info'
const apiClient: AxiosInstance = axios.create({
    baseURL: "http://localhost:3004",
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