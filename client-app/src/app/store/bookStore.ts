import { IBook } from './../models/book';
import { observable, action, runInAction } from 'mobx'
import { createContext } from 'react'
import agent from '../api/agent';

class BookStore {
    @observable books: IBook[] = [];
    @observable currentBook: any = null 
    @observable loading = false;

    @action getAll = async () => {
        const books = await agent.Books.getAll();
        runInAction('loading ', () => {
            this.books = books;
        })
    };

    @action get = async (id: number) => {
        this.loading = true     
        this.currentBook  = await agent.Books.get(id);    
        this.loading = false
        // runInAction('loading ', () => {
        
        // }
        //)
    };

    @action create = async (book: IBook) => {
        await agent.Books.create(book);
    };

    @action update = async (book: IBook) => {
        agent.Books.update(book);
    }

    @action delete = async (id: number) => {
        await agent.Books.delete(id);
    };
}

export default createContext(new BookStore())