import React from 'react';
import { Form, Input, Button, Checkbox, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './RegisterForm.scss';
import SizeContext from 'antd/lib/config-provider/SizeContext';

export default function RegisterForm() {
    return (
        <Form className = 'register-form'>
            <Form.Item>
                <Input 
                prefix = { < UserOutlined  style = {{color: 'rgba(0,0,0,.25)'}} /> }
                type = 'email'
                name = 'email'
                placeholder = 'email'
                className = 'register-form__input' 
                />
            </Form.Item>
            <Form.Item>
                <Input
                prefix = { < LockOutlined  style = {{color: 'rgba(0,0,0,.25)'}} /> }
                type = 'password'
                name = 'password'
                placeholder = 'Password'
                className = 'register-form__input'
                />
            </Form.Item>
            <Form.Item>
                <Input
                prefix = { < LockOutlined  style = {{color: 'rgba(0,0,0,.25)'}} /> }
                type = 'password'
                name = 'repeatPassword'
                placeholder = 'Repite password'
                className = 'register-form__input'
                />
            </Form.Item>
            <Form.Item>
                <Checkbox
                name = 'privayPolicy'
                >
                    He leído y acepto la política de privacidad.
                </Checkbox>
            </Form.Item>
            <Form.Item>
                <Button htmlType = 'Submit' className = 'register-form__button'>
                    Crear cuenta
                </Button>
            </Form.Item>

        </Form>
    );
}