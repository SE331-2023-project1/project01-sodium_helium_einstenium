import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { Information } from '@/info'
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
    getStudent(): Promise<AxiosResponse<Information[]>> {
        return apiClient.get<Information[]>('/students')
    },
    getStudentById(id: number): Promise<AxiosResponse<Information>> {
        return apiClient.get<Information>('students/' + id.toString())
    },
    getAdvisor(): Promise<AxiosResponse<AdvisorInfo[]>>{
        return apiClient.get<AdvisorInfo[]>('/advisors')
    },
    getAdvisorById(id:number): Promise<AxiosResponse<AdvisorInfo>>{
        return apiClient.get<AdvisorInfo>('advisors/'+ id.toString())
    }
}