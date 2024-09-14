import React, { useState } from 'react';
import { Form, Input, Button, Collapse, Tooltip, message } from 'antd';
import { motion } from 'framer-motion';
import { 
  TwitterOutlined, InstagramOutlined, LinkedinOutlined, 
  GithubOutlined, MailOutlined, PhoneOutlined, 
  UserOutlined, SendOutlined
} from '@ant-design/icons';
import { FaDiscord, FaSlack } from 'react-icons/fa';

const { Panel } = Collapse;
const { TextArea } = Input;

const ContactPage = () => {
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onFinish = (values) => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Form values:', values);
      message.success('Your message has been sent successfully!');
      form.resetFields();
      setIsSubmitting(false);
    }, 2000);
  };

  const faqData = [
    { question: "How can I join the GitHub Community Club?", answer: "You can join by filling out the membership form on our website. We'll review your application and get back to you soon." },
    { question: "What events do you organize?", answer: "We organize coding bootcamps, hackathons, workshops, and guest lectures. Check our Events page for updates." },
    { question: "How can I contribute to the community?", answer: "You can submit projects, write blogs, or volunteer for events. Use the Contact Us form to discuss how you can get involved." },
    { question: "Is there any fee to join?", answer: "No, joining the GitHub Community Club is completely free." },
    { question: "What are the benefits of joining?", answer: "You'll gain access to exclusive events, resources, and networking opportunities with industry professionals." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-4">We'd love to hear from you. Here's how you can reach us...</p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <MailOutlined className="text-2xl text-blue-500 mr-4" />
                <span>github_community@gitam.in</span>
              </div>
              <div className="flex items-center">
                <PhoneOutlined className="text-2xl text-green-500 mr-4" />
                <span>+91 8977938375</span>
              </div>
              <div className="flex items-center">
                <GithubOutlined className="text-2xl text-gray-700 mr-4" />
                <span>github.com/gitam-community</span>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Tooltip title="Twitter">
                <Button shape="circle" icon={<TwitterOutlined />} className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white" />
              </Tooltip>
              <Tooltip title="Instagram">
                <Button shape="circle" icon={<InstagramOutlined />} className="text-pink-500 border-pink-500 hover:bg-pink-500 hover:text-white" />
              </Tooltip>
              <Tooltip title="LinkedIn">
                <Button shape="circle" icon={<LinkedinOutlined />} className="text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white" />
              </Tooltip>
              <Tooltip title="Discord">
                <Button shape="circle" icon={<FaDiscord />} className="text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white" />
              </Tooltip>
              <Tooltip title="Slack">
                <Button shape="circle" icon={<FaSlack />} className="text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white" />
              </Tooltip>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <Form form={form} layout="vertical" onFinish={onFinish}>
              <Form.Item name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
                <Input prefix={<UserOutlined />} placeholder="Your Name" />
              </Form.Item>
              <Form.Item name="email" rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}>
                <Input prefix={<MailOutlined />} placeholder="Your Email" />
              </Form.Item>
              <Form.Item name="message" rules={[{ required: true, message: 'Please input your message!' }]}>
                <TextArea rows={4} placeholder="Your Message" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" loading={isSubmitting} icon={<SendOutlined />} className="w-full bg-blue-500 hover:bg-blue-600">
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
          <Collapse className="bg-white rounded-lg shadow-xl">
            {faqData.map((faq, index) => (
              <Panel header={faq.question} key={index} className="text-lg">
                <p>{faq.answer}</p>
              </Panel>
            ))}
          </Collapse>
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
          <p className="mb-4">Be part of our growing network of developers and tech enthusiasts.</p>
          <Button type="primary" size="large" icon={<UserOutlined />} className="bg-green-500 hover:bg-green-600">
            Become a Member
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;