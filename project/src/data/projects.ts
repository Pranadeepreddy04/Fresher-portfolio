import { Project } from '../types/project';

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Developed a fully responsive and visually appealing portfolio website to highlight personal projects, skills, and achievements. Used React.js and Tailwind CSS to create a modern, clean, and user-friendly interface with smooth animations. Integrated contact form with validation and email functionality, ensuring fast load times and SEO optimization.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Netlify"],
    imageUrl: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Weather App",
    description: "Developed a dynamic weather application that fetches real-time data based on user-input city names. Implemented comprehensive weather metrics including temperature, humidity, wind speed, and UV index, with a 3-hour interval forecast feature. Enhanced user experience with dynamic backgrounds that reflect current weather conditions.",
    tech: ["React.js", "JavaScript", "Weather API", "HTML/CSS"],
    imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Driver Drowsiness Detection",
    description: "Developed a system to monitor and analyze driver alertness through image processing and machine learning techniques. Implemented facial recognition algorithms to detect drowsiness patterns, reducing potential risks of accidents.",
    tech: ["Python", "OpenCV", "Machine Learning"],
    imageUrl: "https://newsroom.aaa.com/wp-content/uploads/2014/11/More-than-One-in-Five-Fatal-Crashes-Involve-Drowsy-Drivers.jpg"
  },
  {
    title: "Fake News Detection",
    description: "Developed an advanced machine learning system for identifying misinformation in news articles. Implemented natural language processing techniques and deep learning models to analyze text content, writing style, and source credibility. Created a user-friendly interface for real-time news verification, achieving 94% accuracy in detecting fake news articles. Integrated fact-checking APIs and maintained a database of verified sources to improve detection reliability.",
    tech: ["Python", "NLP", "Deep Learning", "TensorFlow"],
    imageUrl: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Advanced Virtual Assistant",
    description: "Created a voice-based virtual assistant with the ability to recognize commands, perform tasks, and interact with users. Programmed features for voice recognition and task automation, significantly enhancing user productivity.",
    tech: ["Python", "Speech Recognition", "NLP"],
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Nourish Navigator",
    description: "Designed and built a web application to assist users in planning and organizing their weekly meals based on dietary preferences. Created a User-friendly website for creating own preferred meal for lunch, breakfast and dinner based on own diet.",
    tech: ["React", "Node.js", "MongoDB"],
    imageUrl: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&auto=format&fit=crop&q=60"
  }
];