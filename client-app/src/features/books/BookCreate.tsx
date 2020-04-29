import React, { useContext } from 'react'
import BookStore from '../../app/store/bookStore';
import { Card, Form, Input, Button } from 'antd'
import { useHistory } from "react-router-dom";

const BookCreate = () => {

    const bookStore = useContext(BookStore);
    const history = useHistory();

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
        bookStore.create(values).then(() => {
            history.push('/')
        });
    };

    return (
        <Card>
            <Form {...formItemLayout} onFinish={onFinish}>
                <Form.Item label="Title" name={['title']} >
                    <Input />
                </Form.Item>
                <Form.Item label="Author" name={['author']}>
                    <Input />
                </Form.Item>
                <Form.Item label="Publisher" name={['publisher']}>
                    <Input />
                </Form.Item>
                <Form.Item label="Description" name={['description']}>
                    <Input />
                </Form.Item>
                <Form.Item {...formItemLayoutWithOutLabel}>
                    <Button type="dashed" onClick={() => history.push('/')}>
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

export default BookCreate