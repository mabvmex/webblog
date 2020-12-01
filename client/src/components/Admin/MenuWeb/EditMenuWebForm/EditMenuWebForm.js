import React, { useState, useEffect } from 'react';
import { Form, Input, Button, notification } from 'antd';
import { FontSizeOutlined, LinkOutlined } from '@ant-design/icons';
import { updateMenuApi } from '../../../../api/menu';
import { getAccessTokenApi } from '../../../../api/auth';

import './EditMenuWebForm.scss';

export default function EditMenuWebForm(props) {
    const { setIsVisibleModal, setReloadMenuWeb, menu } = props;

    return(
        <div className='edit-menu-web-form'>
            <EditForm />
        </div>
    )
}

function EditForm(props){
    // const { menuWebData, serMenuWebData, editMenu, menu } = props;
    
    return(
        <Form className='form-edit'>
            <Form.Item>
                <Input
                    prefix={<FontSizeOutlined />}
                    placaholder='Titulo'
                    // value={}
                    // onChange={}
                />
            </Form.Item>

            <Form.Item>
            <Input
                    prefix={<LinkOutlined />}
                    placaholder='URL'
                    // value={}
                    // onChange={}
                />
            </Form.Item>

            <Form.Item>
                <Button type='primary' htmlType='submit' className='btn-submit'>
                    Actualizar menú
                </Button>
            </Form.Item>
        </Form>
    )
}