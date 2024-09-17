import { v4 as uuidv4 } from 'uuid';
import UTrackerImg from '../images/p1.png';
import GreenCtgImg from '../images/p2.png';
import CoinTrackerImg from '../images/p3.png';
import CavinImg from '../images/p4.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Task Management',
    desc:
      'A centralized platform to organize, prioritize, and track tasks.',
    img: UTrackerImg,
    link: 'https://github.com/SidGit195/Task-Management-Software',
  },
  {
    id: uuidv4(),
    name: 'EcomCart',
    desc:
      'An ecommerce website where customers can find products, browse offerings, and place purchases online.',
    img: GreenCtgImg,
    link: 'https://github.com/SidGit195/EcomCart',
  },
  {
    id: uuidv4(),
    name: 'Blogger',
    desc:
      'A platform that allows users to share their thoughts, ideas, and content through blog posts. Users can easily create, edit, and manage their blog posts.',
    img: CoinTrackerImg,
    link: 'https://github.com/SidGit195/Blogger',
  },
  {
    id: uuidv4(),
    name: "URL-Shortener",
    desc:
      ' It allows users to generate short, unique URLs for their long URLs, making it easier to share and manage links.',
    img: CavinImg,
    link: 'https://github.com/SidGit195/URL-Shortener',
  },
];

export default projects;
