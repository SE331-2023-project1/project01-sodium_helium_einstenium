import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { StudentInfo } from '@/info'

const apiClient: AxiosInstance = axios.create({
    baseURL: "http://localhost:3004",
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getStudent(perPage: number, page: number): Promise<AxiosResponse<StudentInfo[]>> {
        return apiClient.get<StudentInfo[]>('/students?_limit=' + perPage + '&_page=' + page)
    },
    getStudentById(id: number): Promise<AxiosResponse<StudentInfo>> {
        return apiClient.get<StudentInfo>('students/' + id.toString())
    }
}