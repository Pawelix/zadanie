import React, { useContext, useEffect ,} from 'react'
import { Card, Form, Input, Button } from 'antd'
import BookStore from '../../app/store/bookStore';
import {  
    useParams, useHistory
  } from "react-router-dom";
import { observer } from 'mobx-react-lite';

const BookEdit = () => {
    const { id } = useParams();
    const history = useHistory();
    const bookStore = useContext(BookStore); 
    const [form] = Form.useForm();
    const {currentBook , get} = bookStore

    useEffect(() => {

        console.log('1 raz')

        get(id).then(()=> {

            if(currentBook){
                console.log('then currentBook',currentBook)
                            form.setFieldsValue(currentBook)}
            }); 

    }, [bookStore, id]);    

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 4 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 20 },
        },
    };
    const formItemLayoutWithOutLabel = {
        wrapperCol: {
            xs: { span: 24, offset: 0 },
            sm: { span: 20, offset: 4 },
        },
    };

    const onFinish = (values: any) => { 
        bookStore.update({...values, id: id}).then(()=>{
            history.push('/')
        });
    };

    if (bookStore.loading){
        console.log('loading')
        return <span>Loading ...</span>;
    }  

    return (
        <Card>
            <Form {...formItemLayout} form={form} onFinish={onFinish}>
            
                <Form.Item label="Title" name={['title']} >
                    <Input />
                </Form.Item>
                <Form.Item  label="Author" name={['author']}>
                    <Input />
                </Form.Item>        
                <Form.Item  label="Publisher" name={['publisher']}>
                    <Input />
                </Form.Item>
                <Form.Item  label="Description" name={['description']}>
                    <Input  />
                </Form.Item>
                <Form.Item {...formItemLayoutWithOutLabel}>
                <Button type="dashed" onClick={()=> history.push('/')}>
                   Return
                </Button>
                    <Button type="dashed" htmlType="submit">
                        Save changes
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    )
}
export default observer(BookEdit);
