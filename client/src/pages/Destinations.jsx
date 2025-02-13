import React from 'react';
import NavigationBar from './Navbar1';

const Destinations = () => {
  const destinations = [
    { user: 'User1', dest_id: 1, country: 'France', city: 'Paris', travel_agency: 'Travel Co.', program: 'City Tour', email: 'user1@example.com' },
    { user: 'User2', dest_id: 2, country: 'Japan', city: 'Tokyo', travel_agency: 'Explore Japan', program: 'Cultural Experience', email: 'user2@example.com' },
    { user: 'User3', dest_id: 3, country: 'USA', city: 'New York City', travel_agency: 'Big Apple Tours', program: 'City Excursion', email: 'user3@example.com' },
    { user: 'User4', dest_id: 4, country: 'Italy', city: 'Rome', travel_agency: 'Roman Adventures', program: 'Historical Tour', email: 'user4@example.com' },
    { user: 'User5', dest_id: 5, country: 'Australia', city: 'Sydney', travel_agency: 'Down Under Tours', program: 'Nature Exploration', email: 'user5@example.com' },
    { user: 'User6', dest_id: 6, country: 'Spain', city: 'Barcelona', travel_agency: 'Sunny Spain Travels', program: 'Cultural Immersion', email: 'user6@example.com' },
    // Add more destinations as needed
  ];

  return (
    <div style={{ backgroundColor: '#e0f2e9', minHeight: '100vh', padding: '20px' }}>
      <NavigationBar />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {destinations.map(destination => (
          <div key={destination.dest_id} style={cardStyle}>
            <div style={contentStyle}>
              <h2 style={{ marginBottom: '10px', color: '#333' }}>{destination.city}, {destination.country}</h2>
              <p><strong>User:</strong> {destination.user}</p>
              <p><strong>Travel Agency:</strong> {destination.travel_agency}</p>
              <p><strong>Program:</strong> {destination.program}</p>
              <p><strong>Email:</strong> {destination.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const cardStyle = {
  borderRadius: '8px',
  border: '1px solid #ddd',
  padding: '20px',
  backgroundColor: '#fff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const contentStyle = {
  marginBottom: '10px',
  color: '#333', // Adjust text color as needed
};

export default Destinations;
