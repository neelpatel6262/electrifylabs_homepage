import React from 'react'
import { ArrowUpRight } from 'lucide-react';
import Line from '../assets/line.png';
import BlogOne from '../assets/Blog-One-placeholder.jpg';
import BlogTwo from '../assets/Blog-Two-placeholder.jpg';
import BlogThree from '../assets/Blog-Three-placeholder.jpg';


const BlogCard = [
  {
    id: 1,
    image: BlogOne,
    heading: 'Quantum Annealing in Energy Grids: Beyond Theoretical Limits',
    subheading: 'As we approach 2026, quantum computing transitions from laboratory curiosity to industrial-scale utility. Our team at ElectrifyLabs Berlin has achieved a breakthrough: 127-qubit processors now optimize municipal power grids in real-time, reducing waste by 37% compared to classical algorithms.',
    date: '3 july , 2025',
    cta: 'Read More',
  },
  {
    id: 2,
    image: BlogTwo,
    heading: 'The Quantum Advantage Paradox',
    subheading: 'By treating decoherence not as noise but as training data, our machine learning layer converts quantum instability into predictive power. This paradigm shift—documented in our recent IEEE paper—allows commercially available quantum processors to outperform supercomputers in specific load-balancing scenarios.',
    date: '22 Aug , 2025',
    cta: 'Read More',
  },
  {
    id: 3,
    image: BlogThree,
    subheading: 'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.',
    date: '05 Jan 2023',
    readTime: '8 min read',
    cta: 'Read More',
  },
];




function BlogSection() {
  return (
    <div>
      
    </div>
  )
}

export default BlogSection
