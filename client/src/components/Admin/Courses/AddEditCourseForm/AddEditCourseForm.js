import React, { useState } from 'react';
import { Form, Input, Button, notification } from 'antd';
import { KeyOutlined, GiftFilled, DollarCircleFilled, FileTextOutlined } from '@ant-design/icons';
import { getAccessTokenApi } from '../../../../api/auth';

import './AddEditCourseForm.scss';

export default function AddEditCourseForm(props) {
    const { setIsVisibleModal, setReloadCourses, course } = props;
    const [ courseData, setCourseData ] = useState({});

    return (
        <div className='add-edit-course-form' >
            <AddEditForm
                course = {course}
            />
        </div>
    )
}


function AddEditForm(props) {
    const { course } = props;

    return (
        <Form 
            className='form-add-edit'
            onFinish={()=> console.log('=== Submit Form ===')}
        >
            <Form.Item>
                <Input
                    prefix={<KeyOutlined/>}
                    placeholder='ID del curso'
                    // value={}
                    // onChange={}
                    disabled = { course ? true : false}
                />
            </Form.Item>

            <Form.Item>
                <Input
                    prefix={<FileTextOutlined />}
                    placeholder='URL del curso'
                    // value={}
                    // onChange={}
                    disabled = { course ? true : false}
                />
            </Form.Item>

            <Form.Item>
                <Input
                    prefix={<GiftFilled />}
                    placeholder='Cupón de descuento'
                    // value={}
                    // onChange={}
                />
            </Form.Item>

            <Form.Item>
                <Input
                    prefix={<DollarCircleFilled />}
                    placeholder='Precio'
                    // value={}
                    // onChange={}
                />
            </Form.Item>

            <Form.Item>
                <Button type='primary' htmlType='submit' className='btn-submit' >
                    {course ? 'Actualizar curso' : 'Crear curso'}
                </Button>
            </Form.Item>
        </Form>
    );
}