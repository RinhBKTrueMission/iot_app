import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import './index.scss';

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values) => {
    setLoading(true);
    // Thực hiện xử lý đăng nhập tại đây, ví dụ gọi API
    console.log(values);
    setLoading(false);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Đăng ký</h2>
        <Form className="login-form" onFinish={handleSubmit}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Vui lòng nhập tên đăng ký!' }]}
          >
            <Input placeholder="Tên đăng nhập" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Vui lòng nhập email đăng ký!' }]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
          >
            <Input.Password placeholder="Mật khẩu" />
          </Form.Item>
          <Form.Item
            name="password2"
            rules={[{ required: true, message: 'Vui lòng nhập lại mật khẩu!' }]}
          >
            <Input.Password placeholder="Mật khẩu" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
