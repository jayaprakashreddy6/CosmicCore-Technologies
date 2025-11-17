import { ContactInfo } from '../types';

export const contactInfo: ContactInfo = {
  email: 'cosmiccoretechnologies@gmail.com',
  phone: '+91 9901480919',
  address: 'Kr Puram, Bangalore, Karnataka, India',
  socialMedia: {
    linkedin: 'https://www.linkedin.com/company/109826119/',
    twitter: 'https://x.com/cosmiccore4',
    facebook: 'https://www.facebook.com/share/1JSroE8fv8/',
    instagram: 'https://www.instagram.com/cosmiccore4/',
    whatsapp: 'https://wa.me/919901480919',
    youtube: 'https://www.youtube.com/@cosmiccoretechnologies'
  }
};

export const contactMethods = [
  {
    title: 'WhatsApp Message',
    description: 'Chat with us instantly for quick answers and support',
    value: contactInfo.phone,
    icon: '💬',
    action: contactInfo.socialMedia.whatsapp,
    color: 'from-green-400 to-green-600'
  },
  {
    title: 'Email Us',
    description: 'Send us an email anytime',
    value: contactInfo.email,
    icon: '📧',
    action: `mailto:${contactInfo.email}`,
    color: 'from-blue-400 to-blue-600'
  },
  {
    title: 'Call Us',
    description: 'Mon-Fri from 8am to 6pm',
    value: contactInfo.phone,
    icon: '📞',
    action: `tel:${contactInfo.phone}`,
    color: 'from-purple-400 to-purple-600'
  },
  {
    title: 'Visit Us',
    description: 'Come say hello at our office',
    value: contactInfo.address,
    icon: '📍',
    action: 'https://www.google.com/maps/place/COSMICCORE+TECHNOLOGIES+PVT+LTD/@13.0122578,77.7046377,19.5z/data=!4m15!1m8!3m7!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!2sBengaluru,+Karnataka!3b1!8m2!3d12.9628669!4d77.577509!16zL20vMDljMTc!3m5!1s0x1445a50e46eee03:0xfa2b27234de4e04!8m2!3d13.0124245!4d77.7046317!16s%2Fg%2F11y0xg_jt4?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D',
    color: 'from-orange-400 to-orange-600'
  }
];

export const faqs = [
  {
    question: 'What courses do you offer?',
    answer: 'We offer a wide range of technology and business courses including Java Full Stack, Data Science & Machine Learning, Python Full Stack, Data Structures & Algorithms, Cybersecurity, UI/UX Design, VLSI Design, Human Resources Management, Finance Management, Business Development & Sales, Internet of Things(IoT), Embedded Systems, and Data Analyst. Each course is designed with industry experts and includes hands-on projects.'
  },
  {
    question: 'How long does it take to complete a course?',
    answer: 'Course duration varies from 3 to 6 months depending on the program. We offer flexible learning schedules to accommodate different lifestyles and commitments.'
  },
  {
    question: 'Do you provide job placement assistance?',
    answer: 'Yes! We have a dedicated career services team that helps with resume building, interview preparation, and connecting students with our network of employer partners.'
  },
  {
    question: 'What is the cost of your courses?',
    answer: 'Course prices range from 9999 to 39999. We also offer payment plans and scholarships for eligible students. Contact us for detailed pricing information.'
  },
  {
    question: 'Do you offer online and in-person classes?',
    answer: 'Currently, we offer online courses with live instructor sessions. We\'re planning to launch in-person classes in select cities soon.'
  },
  {
    question: 'What prerequisites do I need?',
    answer: 'Most of our courses are designed for beginners, but some advanced courses may require basic programming knowledge. We provide detailed prerequisites for each course.'
  }
];