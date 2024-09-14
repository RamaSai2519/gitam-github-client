import React, { useState, useEffect } from 'react';
import { Card, Button, Modal, Tag, Input, Tooltip, Progress, Spin, Tabs, Typography } from 'antd';
import { GithubOutlined, StarOutlined, ForkOutlined, EyeOutlined, SearchOutlined, LinkOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const { TabPane } = Tabs;
const { Title, Paragraph } = Typography;

const originalProjects = [
    {
      id: 1,
      title: 'Emotion Detection using CNN',
      description: 'This project focuses on detecting emotions using Convolutional Neural Networks (CNN). It includes training a model to identify different emotions from facial expressions.',
      link: 'https://github.com/lechakrawarthy/Emotion_Detection_CNN',
      tags: ['Machine Learning', 'Computer Vision', 'Python'],
      progress: 75,
      detailedDescription: 'This project utilizes deep learning techniques to analyze facial expressions and classify emotions. Key features include:\n\n- Data preprocessing pipeline for facial images\n- Custom CNN architecture optimized for emotion recognition\n- Training and evaluation scripts\n- Real-time emotion detection from webcam feed\n\nFuture improvements could involve expanding the emotion range, improving accuracy on diverse datasets, and deploying the model as a web service.',
    },
    {
      id: 2,
      title: 'Mark Word Game',
      description: 'Mark Word is a game designed to enhance vocabulary and word recognition skills. This project involves game development with interactive features.',
      link: 'https://github.com/RamaSai2519/mark-word',
      tags: ['Game Development', 'JavaScript', 'React'],
      progress: 90,
      detailedDescription: 'Mark Word is an engaging educational game that challenges players to improve their vocabulary. Key features include:\n\n- Dynamic word generation based on difficulty levels\n- Interactive UI with drag-and-drop functionality\n- Score tracking and leaderboard system\n- Timed gameplay modes\n\nFuture enhancements could include multiplayer mode, integration with dictionary APIs for word definitions, and adaptive difficulty based on player performance.',
    },
    {
      id: 3,
      title: 'Code camp',
      description: 'freeCodeCamp is an open-source codebase and curriculum. Learn to code for free.',
      link: 'https://github.com/freeCodeCamp/freeCodeCamp',
      tags: ['Education', 'Open Source', 'Web Development'],
      progress: 100,
      detailedDescription: 'freeCodeCamp is a nonprofit organization that provides a comprehensive platform for learning web development. Key aspects include:\n\n- Extensive curriculum covering various web technologies\n- Interactive coding challenges and projects\n- Community-driven forum for support and discussion\n- Certification programs for different web development tracks\n\nContribution opportunities include improving existing challenges, adding new curriculum content, and enhancing the platform\'s features.',
    },
  ];
  
  const inspirationalProjects = {
    webDevelopment: [
      {
        id: 4,
        title: 'Responsive Portfolio Website',
        description: 'Create a personal portfolio website showcasing your projects and skills.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
        difficulty: 'Beginner',
        externalLink: 'https://www.freecodecamp.org/news/how-to-build-a-developer-portfolio-website/',
      },
      {
        id: 5,
        title: 'E-commerce Platform',
        description: 'Build a full-fledged e-commerce website with product listings, cart, and checkout.',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
        difficulty: 'Advanced',
        externalLink: 'https://www.udemy.com/course/mern-ecommerce/',
      },
    ],
    machineLearning: [
      {
        id: 6,
        title: 'Image Classification Model',
        description: 'Develop a machine learning model to classify images into different categories.',
        tags: ['Python', 'TensorFlow', 'Keras', 'CNN'],
        difficulty: 'Intermediate',
        externalLink: 'https://www.tensorflow.org/tutorials/images/classification',
      },
      {
        id: 7,
        title: 'Sentiment Analysis Tool',
        description: 'Create a tool that analyzes the sentiment of text data using natural language processing.',
        tags: ['Python', 'NLTK', 'Scikit-learn', 'NLP'],
        difficulty: 'Intermediate',
        externalLink: 'https://www.datacamp.com/tutorial/text-analytics-beginners-nltk',
      },
    ],
    mobileDevelopment: [
      {
        id: 8,
        title: 'Cross-Platform Fitness App',
        description: 'Develop a mobile app for tracking workouts and nutrition using React Native.',
        tags: ['React Native', 'Firebase', 'Redux', 'Health APIs'],
        difficulty: 'Intermediate',
        externalLink: 'https://reactnative.dev/docs/getting-started',
      },
      {
        id: 9,
        title: 'Augmented Reality City Guide',
        description: 'Create an AR app that provides information about landmarks when pointed at them.',
        tags: ['ARKit', 'ARCore', 'Unity', 'Geolocation'],
        difficulty: 'Advanced',
        externalLink: 'https://developers.google.com/ar/develop',
      },
    ],
    dataScience: [
      {
        id: 10,
        title: 'Predictive Stock Analysis',
        description: 'Build a model to predict stock prices using historical data and machine learning.',
        tags: ['Python', 'Pandas', 'Scikit-learn', 'Time Series Analysis'],
        difficulty: 'Advanced',
        externalLink: 'https://www.kaggle.com/code/faressayah/stock-market-analysis-prediction-using-lstm',
      },
      {
        id: 11,
        title: 'Social Media Sentiment Analyzer',
        description: 'Develop a tool to analyze sentiment in social media posts using NLP techniques.',
        tags: ['Python', 'NLTK', 'Tweepy', 'Data Visualization'],
        difficulty: 'Intermediate',
        externalLink: 'https://www.datacamp.com/tutorial/twitter-sentiment-analysis-python',
      },
    ],
    cybersecurity: [
      {
        id: 12,
        title: 'Network Intrusion Detection System',
        description: 'Create a system to detect and alert on suspicious network activities.',
        tags: ['Python', 'Wireshark', 'Machine Learning', 'Network Protocols'],
        difficulty: 'Advanced',
        externalLink: 'https://www.kaggle.com/datasets/sampadab17/network-intrusion-detection',
      },
      {
        id: 13,
        title: 'Secure File Sharing Application',
        description: 'Develop an end-to-end encrypted file sharing application.',
        tags: ['Cryptography', 'Node.js', 'React', 'WebRTC'],
        difficulty: 'Intermediate',
        externalLink: 'https://medium.com/swlh/how-to-create-a-secure-file-sharing-service-with-node-js-4e8611d436f1',
      },
    ],
    iotAndEmbedded: [
      {
        id: 14,
        title: 'Smart Home Automation System',
        description: 'Build a system to control home devices using voice commands and mobile app.',
        tags: ['Raspberry Pi', 'MQTT', 'React Native', 'Node.js'],
        difficulty: 'Advanced',
        externalLink: 'https://www.instructables.com/Raspberry-Pi-Home-Automation/',
      },
      {
        id: 15,
        title: 'Environmental Monitoring Station',
        description: 'Create a device to monitor and report local environmental conditions.',
        tags: ['Arduino', 'Sensors', 'IoT Protocols', 'Data Visualization'],
        difficulty: 'Intermediate',
        externalLink: 'https://create.arduino.cc/projecthub/projects/tags/environmental-monitoring',
      },
    ],
  };

const difficultyColors = {
  Beginner: 'green',
  Intermediate: 'blue',
  Advanced: 'orange',
  Expert: 'red',
};

const ProjectPage = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProject, setSelectedProject] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('ourProjects');
    const [githubStats, setGithubStats] = useState({});
  
    const location = useLocation();
    const route = location.pathname;
  
    useEffect(() => {
      const fetchProjects = async () => {
        setLoading(true);
        try {
          // Simulating API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          setProjects(originalProjects);
        } catch (error) {
          console.error('Error fetching projects:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchProjects();
    }, []);
  
    useEffect(() => {
      const fetchGithubStats = async (project) => {
        if (!project.link) return;
        try {
          const repo = project.link.split('/').slice(-2).join('/');
          const response = await axios.get(`https://api.github.com/repos/${repo}`);
          setGithubStats(prevStats => ({
            ...prevStats,
            [project.id]: {
              stars: response.data.stargazers_count,
              forks: response.data.forks_count,
              watchers: response.data.watchers_count
            }
          }));
        } catch (error) {
          console.error('Error fetching GitHub stats:', error);
        }
      };
  
      projects.forEach(project => fetchGithubStats(project));
    }, [projects]);
  
    const handleProjectClick = (project) => {
      setSelectedProject(project);
      setModalVisible(true);
    };
  
    const filteredProjects = projects.filter(project =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  
    const cardVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };
  
    const renderProjectCard = (project, isOurProject = false) => (
        <motion.div key={project.id} variants={cardVariants}>
          <Card
            hoverable
            className="h-full flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300"
            cover={
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-4">
                <h3 className="text-xl font-bold text-black text-center">{project.title}</h3>
              </div>
            }
            actions={[
              isOurProject && project.link && (
                <Tooltip title="View on GitHub">
                  <Button 
                    type="link" 
                    icon={<GithubOutlined />} 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  />
                </Tooltip>
              ),
              !isOurProject && project.externalLink && (
                <Tooltip title="Learn More">
                  <Button 
                    type="link" 
                    icon={<LinkOutlined />} 
                    href={project.externalLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  />
                </Tooltip>
              ),
              <Tooltip title="Project Details">
                <Button 
                  type="link" 
                  icon={<EyeOutlined />} 
                  onClick={() => handleProjectClick(project)}
                />
              </Tooltip>
            ].filter(Boolean)}
          >
            <Card.Meta
              description={
                <>
                  <Paragraph ellipsis={{ rows: 3 }} className="mb-4">
                    {project.description}
                  </Paragraph>
                  <div className="mb-4">
                    {project.tags.map(tag => (
                      <Tag key={tag} color="blue" className="mr-1 mb-1">{tag}</Tag>
                    ))}
                  </div>
                  {isOurProject && project.progress && (
                    <Tooltip title="Project Progress">
                      <Progress percent={project.progress} status="active" />
                    </Tooltip>
                  )}
                  {!isOurProject && project.difficulty && (
                    <Tag color={difficultyColors[project.difficulty]}>{project.difficulty}</Tag>
                  )}
                </>
              }
            />
            {isOurProject && githubStats[project.id] && (
              <div className="mt-4 flex justify-between text-sm text-gray-500">
                <span><StarOutlined /> {githubStats[project.id].stars}</span>
                <span><ForkOutlined /> {githubStats[project.id].forks}</span>
                <span><EyeOutlined /> {githubStats[project.id].watchers}</span>
              </div>
            )}
          </Card>
        </motion.div>
      );
      
  
    return (
      <div className={`flex flex-col ${route !== "/" ? "min-h-screen" : ""} p-8 bg-gradient-to-br from-blue-100 to-purple-100`}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title level={2} className="text-center mb-12 text-blue-800">
            Our Projects & Inspiration Hub
          </Title>
        </motion.div>
  
        <div className="mb-8">
          <Input
            prefix={<SearchOutlined />}
            placeholder="Search projects by title, description, or tags"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md mx-auto"
          />
        </div>
  
        <Tabs activeKey={activeTab} onChange={setActiveTab} centered>
          <TabPane tab="Our Projects" key="ourProjects">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <Spin size="large" />
              </div>
            ) : (
              <AnimatePresence>
                <motion.div 
                  className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'
                  initial="hidden"
                  animate="visible"
                  variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                >
                  {filteredProjects.map(project => renderProjectCard(project, true))}
                </motion.div>
              </AnimatePresence>
            )}
          </TabPane>
          {Object.entries(inspirationalProjects).map(([category, projects]) => (
            <TabPane tab={category.replace(/([A-Z])/g, ' $1').trim()} key={category}>
              <AnimatePresence>
                <motion.div 
                  className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'
                  initial="hidden"
                  animate="visible"
                  variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                >
                  {projects.map(project => renderProjectCard(project))}
                </motion.div>
              </AnimatePresence>
            </TabPane>
          ))}
        </Tabs>
  
        <Modal
          title={selectedProject?.title}
          visible={modalVisible}
          onCancel={() => setModalVisible(false)}
          footer={null}
          width={700}
        >
          {selectedProject && (
            <div>
              <Paragraph>{selectedProject.detailedDescription || selectedProject.description}</Paragraph>
              <div className="mb-4">
                {selectedProject.tags.map(tag => (
                  <Tag key={tag} color="blue" className="mr-1 mb-1">{tag}</Tag>
                ))}
              </div>
              {selectedProject.progress && (
                <Progress percent={selectedProject.progress} status="active" className="mb-4" />
              )}
              {selectedProject.difficulty && (
                <Tag color={difficultyColors[selectedProject.difficulty]} className="mb-4">{selectedProject.difficulty}</Tag>
              )}
              {githubStats[selectedProject.id] && (
                <div className="mt-4 flex justify-between text-sm text-gray-500">
                  <span><StarOutlined /> {githubStats[selectedProject.id].stars}</span>
                  <span><ForkOutlined /> {githubStats[selectedProject.id].forks}</span>
                  <span><EyeOutlined /> {githubStats[selectedProject.id].watchers}</span>
                </div>
              )}
              {selectedProject.link && (
                <Button 
                  type="primary" 
                  icon={<GithubOutlined />} 
                  href={selectedProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4"
                >
                  View on GitHub
                </Button>
              )}
              {selectedProject.externalLink && (
                <Button 
                  type="primary" 
                  icon={<LinkOutlined />} 
                  href={selectedProject.externalLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 ml-4"
                >
                  Learn More
                </Button>
              )}
            </div>
          )}
        </Modal>
      </div>
    );
  }
  
  export default ProjectPage;