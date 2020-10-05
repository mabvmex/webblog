import React, { useState } from "react";
import { Form, Input, Button, Checkbox /* notification */ } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import "./RegisterForm.scss";

export default function RegisterForm() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    privacyPolicy: false
  });

  const changeForm = e => {
      if (e.target.name === "privacyPolicy") {
      setInput({
        ...input,
        [e.target.name]: e.target.checked
      });
    } else {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    }
  };

  const register = e => {
      console.log(input);
  };

  return (
    <Form className="register-form" onFinish={register} onChange={changeForm}>
      <Form.Item>
        <Input
          prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="email"
          name="email"
          placeholder="email"
          className="register-form__inputs"
          value={input.email}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          name="password"
          placeholder="Password"
          className="register-form__inputs"
          value={input.password}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          name="repeatPassword"
          placeholder="Repite password"
          className="register-form__inputs"
          value={input.repeatPassword}
        />
      </Form.Item>
      <Form.Item>
        <Checkbox 
        name="privacyPolicy" checked={input.privacyPolicy}>
          He leído y acepto la política de privacidad.
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button htmlType="Submit" className="register-form__button">
          Crear cuenta
        </Button>
      </Form.Item>
    </Form>
  );
}