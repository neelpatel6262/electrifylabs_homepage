import { ArrowUpRight } from 'lucide-react';

// Blog data array
const blogs = [
  {
    id: 1,
    heading: 'Quantum Annealing in Energy Grids: Beyond Theoretical Limits',
    description:
      'As we approach 2026, quantum computing transitions from laboratory curiosity to industrial-scale utility. Our team at ElectrifyLabs Berlin has achieved a breakthrough: 127-qubit processors now optimize municipal power grids in real-time, reducing waste by 37% compared to classical algorithms.',
    date: '3 July, 2025',
  },
  {
    id: 2,
    heading: 'The Quantum Advantage Paradox',
    description:
      'By treating decoherence not as noise but as training data, our machine learning layer converts quantum instability into predictive power. This paradigm shift—documented in our recent IEEE paper—allows commercially available quantum processors to outperform supercomputers in specific load-balancing scenarios.',
    date: '22 Aug, 2025',
  },
  {
    id: 3,
    heading: 'Munich Case Study: From Theory to Grid Reality',
    description:
      'As we approach 2026, quantum computing transitions from laboratory curiosity to industrial-scale utility. Our team at ElectrifyLabs Berlin has achieved a breakthrough: 127-qubit processors now optimize municipal power grids in real-time, reducing waste by 37% compared to classical algorithms.',
    date: '3 July, 2025',
  },
];

// BlogCard — reusable blog card component
function BlogCard({ heading, description, date }) {
  return (
    <div className="blog-one">

      {/* Horizontal Rule */}
      <hr className="blog-image-hr" />

      {/* Blog Content */}
      <div className="blog-content">
        <div className="blog-heading">
          <h1>{heading}</h1>
          <p>{description}</p>
        </div>

        {/* Date + Read CTA */}
        <div className="blog-cta">
          <div className="blog-cta-content">
            <p>{date}</p>
            <h4>
              Read <ArrowUpRight size={20} />
            </h4>
          </div>
          <hr className="line" />
        </div>

      </div>
    </div>
  );
}

function BlogSection() {
  return (
    <div className="blog-section">
      <div className="blog-container">

        {/* Intro */}
        <div className="blog-intro-section">
          <p>blogs</p>
          <h1>Latest Insights and Innovations</h1>
        </div>

        {/* Blog Cards */}
        <div className="blogs-contents">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default BlogSection;