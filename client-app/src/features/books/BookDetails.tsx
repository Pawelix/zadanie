import React from 'react'
import { useHistory } from "react-router-dom";
import { Card, Form, Input, Button } from 'antd'

const BookDetails: React.FC = () => {

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

    return (
        <Card>
        <Form {...formItemLayout} >
        
            <Form.Item label="Title" name={['title']} >
                <Input readOnly/>
            </Form.Item>
            <Form.Item  label="Author" name={['author']}>
                <Input readOnly/>
            </Form.Item>        
            <Form.Item  label="Publisher" name={['publisher']}>
                <Input readOnly/>
            </Form.Item>
            <Form.Item  label="Description" name={['description']}>
                <Input disabled />
            </Form.Item>
            <Form.Item {...formItemLayoutWithOutLabel}>
                <Button type="dashed" onClick={()=> history.push('/')}>
                   Return
                </Button>
            </Form.Item>
        </Form>
    </Card>
    )
}

export default BookDetails