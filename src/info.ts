export interface StudentInfo{
    id: number
    studentID: string
    name: string
    surname: string
    studentProfile: string
    image: string
    advisorId: number
    addedData: string
    dataHeader: string
    courses: string[]
}

export interface AdvisorInfo {
    id: number
    name: string
    surname: string
    image: string
}

export interface CommentInfo {
    student_id: string
    student_name: string
    student_surname: string
    comment: string
    date: string
    professor_name: string
}