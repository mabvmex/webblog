import React, { useState } from 'react';
import { Form, Input, Button, notification } from 'antd';
import { KeyOutlined, GiftFilled, DollarCircleFilled, GlobalOutlined } from '@ant-design/icons';
import { getAccessTokenApi } from '../../../../api/auth';
import { addCourseApi } from '../../../../api/course';

import './AddEditCourseForm.scss';

export default function AddEditCourseForm(props) {
    const { setIsVisibleModal, setReloadCourses, course } = props;
    const [ courseData, setCourseData ] = useState({});

    const addCourse = e => {
        if(!courseData.idCourse) {
            notification['error']({
                message: 'El ID del curso es obligatorio'
            });
        } else {
            const accessToken = getAccessTokenApi();
            
            addCourseApi(accessToken, courseData)
            .then(response => {
                const typeNotification = response.code === 200 ? 'success' : 'warning';
                notification[typeNotification]({
                    message: response.message
                });
                setIsVisibleModal(false);
                setReloadCourses(true);
                setCourseData({});
            })
            .catch(err => {
                notification['error']({
                    message: 'Error del servidor, intentalo más tarde'
                })
            })
        };
    }

    const updateCourse = e => {
        console.log('=== ACTUALIZANDO CURSO ===');
    }

    return (
        <div className='add-edit-course-form' >
            <AddEditForm
                course = {course}
                addCourse = {addCourse}
                updateCourse = {updateCourse}
                courseData = {courseData}
                setCourseData = {setCourseData}
            />
        </div>
    )
}


function AddEditForm(props) {
    const { course, addCourse, updateCourse, courseData, setCourseData } = props;

    return (
        <Form 
            className='form-add-edit'
            onFinish={course ? updateCourse : addCourse } 
        >
            <Form.Item>
                <Input
                    prefix={<KeyOutlined/>}
                    placeholder='ID del curso'
                    value={courseData.idCourse}
                    onChange={e => setCourseData({...courseData, idCourse: e.target.value})}
                    disabled = { course ? true : false}
                />
            </Form.Item>

            <Form.Item>
                <Input
                    prefix={<GlobalOutlined />}
                    placeholder='URL del curso'
                    value={courseData.link}
                    onChange={e => setCourseData({...courseData, link: e.target.value})}
                    disabled = { course ? true : false}
                />
            </Form.Item>

            <Form.Item>
                <Input
                    prefix={<GiftFilled />}
                    placeholder='Cupón de descuento'
                    value={courseData.coupon}
                    onChange={e => setCourseData({...courseData, coupon: e.target.value})}
                />
            </Form.Item>

            <Form.Item>
                <Input
                    prefix={<DollarCircleFilled />}
                    placeholder='Precio'
                    value={courseData.price}
                    onChange={e => setCourseData({...courseData, price: e.target.value})}
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