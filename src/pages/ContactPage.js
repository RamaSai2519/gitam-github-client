import React from 'react';
import { Form, Input, Button, Card } from 'antd';

function ContactPage() {
  return (
    <div className='flex items-center justify-center w-full h-[88vh] overflow-clip'>
      <Card title="Contact Us" bordered={false} style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <p>If you have any questions or need more information, please reach out to us using the form below:</p>
        <Form layout="vertical">
          <Form.Item label="Name" required>
            <Input placeholder="Your Name" />
          </Form.Item>
          <Form.Item label="Email" required>
            <Input placeholder="Your Email" type="email" />
          </Form.Item>
          <Form.Item label="Message" required>
            <Input.TextArea placeholder="Your Message" rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default ContactPage;
