import { IBook } from './../models/book';
import axios, {AxiosResponse} from 'axios'

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    del: (url: string) => axios.delete(url).then(responseBody),
}

const Books = {
    getAll: () => requests.get('/books'),
    get: (id: number) => requests.get(`/books/${id}`),
    create: (book: IBook) => requests.post(`/books/`, book),
    update: (book: IBook) => requests.put(`/books/`, book),
    delete: (id: number) => requests.del(`/books/${id}`)
}

export default {
    Books
}