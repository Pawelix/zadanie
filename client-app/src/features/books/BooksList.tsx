import React, { useContext, useEffect } from 'react'
import BookStore from '../../app/store/bookStore';
import { Table, Button } from 'antd'
import { Link } from "react-router-dom";
import { observer } from 'mobx-react-lite';

const BooksList: React.FC = () => {
  const bookStore = useContext(BookStore);
  const { books } = bookStore;

  useEffect(() => {
    bookStore.getAll();
  }, [bookStore]);

  const deleteBook = (id: number) => {
    bookStore.delete(id).then(()=>{
      bookStore.getAll();
    });   
  };

  const columns = [{
    title: 'Title', 
    key: 'title',
    render: (record: any) => <Link to={`/details/${record.id}`}>{record.title}</Link>,
  },
  {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Publisher',
    dataIndex: 'publisher',
    key: 'publisher',
  },
  {
    title: 'Action',
    key: 'action',
    render: (record: any) => (
      <span>
        <Button type="dashed"><Link type="dashed" to={`/edit/${record.id}`}>Edit</Link></Button>
        <span className="ant-divider" />
        <Button type="dashed" onClick = {() => deleteBook(record.id)}>Delete</Button>        
      </span>
    ),
  }];

  return (
    <Table columns={columns} dataSource={books} />
  )
}

export default observer(BooksList);
