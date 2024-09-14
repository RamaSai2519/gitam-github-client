"use client";

import React from 'react';
import { Form, Input, Button, Card, Collapse } from 'antd';
import { TwitterOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  { question: "How can I join the GitHub Community Club?", answer: "You can join the GitHub Community Club by filling out the membership form on our website. We will review your application and get back to you with further details." },
  { question: "What events do you organize?", answer: "We organize a variety of events including coding bootcamps, hackathons, workshops, and guest lectures by industry experts. Stay tuned to our Events page for updates." },
  { question: "How can I contribute to the community?", answer: "You can contribute by submitting your projects, writing blogs, or volunteering for events. Reach out to us via the Contact Us form to discuss how you can get involved." },
  { question: "Is there any fee to join?", answer: "No, joining the GitHub Community Club is completely free." },
  { question: "How do I submit a project?", answer: "You can submit a project through our project submission page on our website." },
  { question: "Can I suggest a new event?", answer: "Absolutely! We welcome event suggestions from our members. Please use the Contact Us form to share your ideas." },
  { question: "What are the benefits of joining?", answer: "As a member, you'll gain access to exclusive events, resources, and networking opportunities with industry professionals." },
  { question: "How can I stay updated?", answer: "Follow our social media channels and subscribe to our newsletter to stay updated on the latest events and opportunities." },
  { question: "Where are your events held?", answer: "Our events are held both online and in various locations. Check our Events page for specific details." },
];

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center font-sans p-0">
      <div className="flex justify-between w-11/12 max-w-screen-lg py-10">
        <div className="w-1/2 text-left">
          <h1 className="text-4xl mb-5">Contact Us</h1>
          <p className="text-lg mb-2">Email, call, or complete the form to learn how Snappy can solve your messaging problem.</p>
          <p className="font-bold mb-2">github_community@gitam.in</p>
          <p className="font-bold mb-2">+91 8977938375</p>

          <div className="mt-8">
            <div className="mb-5">
              <h3 className="text-xl mb-2">Customer Support</h3>
              <p>Our support team is available around the clock to address any concerns or queries you may have.</p>
            </div>
            <div className="mb-5">
              <h3 className="text-xl mb-2">Feedback and Suggestions</h3>
              <p>We value your feedback and are continuously working to improve Snappy. Your input is crucial in shaping the future of GitHub Community.</p>
            </div>
            <div className="mb-5">
              <h3 className="text-xl mb-2">Any Inquiries</h3>
              <p>For community-related questions or inquiries, please contact us at github_community@gitam.in.</p>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter" className="text-2xl text-gray-600 hover:text-blue-500 transition-colors"><TwitterOutlined /></a>
            <a href="https://www.instagram.com/github.gitamblr/" target="_blank" rel="noopener noreferrer" title="Instagram" className="text-2xl text-gray-600 hover:text-blue-500 transition-colors"><InstagramOutlined /></a>
            <a href="https://www.linkedin.com/company/github-gitam" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-2xl text-gray-600 hover:text-blue-500 transition-colors"><LinkedinOutlined /></a>
          </div>
        </div>

        <div className="w-1/2 flex justify-center items-center py-10">
          <Card className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-2xl shadow-lg border border-opacity-20 p-5 relative z-10">
            <h2 className="text-2xl mb-3">Get in Touch</h2>
            <p className="mb-5">You can reach us anytime</p>
            <Form layout="vertical">
              <Form.Item label="First name">
                <Input placeholder="First name" />
              </Form.Item>
              <Form.Item label="Last name">
                <Input placeholder="Last name" />
              </Form.Item>
              <Form.Item label="Your email">
                <Input placeholder="Your email" type="email" />
              </Form.Item>
              <Form.Item label="Phone number">
                <Input placeholder="Phone number" />
              </Form.Item>
              <Form.Item label="How can we help?">
                <Input.TextArea placeholder="How can we help?" maxLength={120} rows={3} />
              </Form.Item>
              <Button type="primary" htmlType="submit" block>
                Submit
              </Button>
            </Form>
            <p className="mt-5 text-xs text-center">
              By contacting us, you agree to our <a href="https://github.com/gitam-github-client/terms-of-service" className="text-blue-500">Terms of Service</a> and <a href="https://github.com/gitam-github-client/privacy-policy" className="text-blue-500">Privacy Policy</a>.
            </p>
          </Card>
        </div>
      </div>

      <div className="w-11/12 max-w-screen-lg mt-12 p-5 rounded-lg">
        <h2 className="text-2xl mb-3">Frequently Asked Questions</h2>
        <Collapse accordion>
          {faqData.map((faq, index) => (
            <Panel header={faq.question} key={index}>
              <p>{faq.answer}</p>
            </Panel>
          ))}
        </Collapse>
      </div>
    </div>
  );
}

export default ContactPage; 