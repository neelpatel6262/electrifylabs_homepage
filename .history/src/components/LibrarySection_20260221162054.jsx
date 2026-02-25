import { LibraryBig } from 'lucide-react';
import LibraryOne from '../assets/Library-One-Placeholder.jpg';
import LibraryTwo from '../assets/Library-Two-Placeholder.jpg';
import PersonOne from '../assets/person-one.jpg';
import PersonTwo from '../assets/peson-two.jpg';

// Cards data array
const libraryCards = [
  {
    id: 1,
    image: LibraryOne,
    category: 'Resources',
    heading: 'Latest Innovations in Technology',
    subheading: 'Discover cutting-edge insights and developments in our tech library.',
    personImage: PersonOne,
    personName: 'Jane Doe',
    date: '15 Mar 2023',
    readTime: '4 min read',
  },
  {
    id: 2,
    image: LibraryTwo,
    category: 'Whitepaper',
    heading: 'Understanding AI in Modern Tech',
    subheading: 'A comprehensive guide to AI applications in technology today.',
    personImage: PersonTwo,
    personName: 'John Smith',
    date: '10 Feb 2023',
    readTime: '6 min read',
  },
];

// LibraryCard — reusable card component
function LibraryCard({ image, category, heading, subheading, personImage, personName, date, readTime }) {
  return (
    <div className="card-one">

      {/* Card Main Image */}
      <img src={image} alt={heading} />

      {/* Card Text Content */}
      <div className="card-one-content">
        <p>{category}</p>
        <h2>{heading}</h2>
        <h4>{subheading}</h4>
      </div>

      {/* Author Details */}
      <div className="person-details">
        <img src={personImage} alt={personName} />
        <div className="person-info">
          <h4>{personName}</h4>
          <div className="person-library-content">
            <h4>{date}</h4>
            <h5>{readTime}</h5>
          </div>
        </div>
      </div>

    </div>
  );
}

function LibrarySection() {
  return (
    <div className="library-section">
      <div className="library-container">

        {/* Intro */}
        <div className="library-intro">
          <p>Our Library</p>
          <h1>Explore a wealth of tech resources at your fingertips</h1>
        </div>

        {/* Cards */}
        <div className="cards">
          {libraryCards.map((card) => (
            <LibraryCard
              key={card.id}
              image={card.image}
              category={card.category}
              heading={card.heading}
              subheading={card.subheading}
              personImage={card.personImage}
              personName={card.personName}
              date={card.date}
              readTime={card.readTime}
            />
          ))}
        </div>

        {/* Button */}
        <button className="library-primary-btn">
          <div className="library-primary-btn-container">
            view our library
            <LibraryBig size={20} />
          </div>
        </button>

      </div>
    </div>
  );
}

export default LibrarySection;