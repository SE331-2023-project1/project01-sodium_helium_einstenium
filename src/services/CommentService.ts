import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { CommentInfo } from '@/info'

const apiClient: AxiosInstance = axios.create({
    baseURL: "http://localhost:3004",
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    addComment(id: number, comment: string): Promise<AxiosResponse<CommentInfo>>{
        return apiClient.post<CommentInfo>('/comments/' + id ,comment)
    }
}