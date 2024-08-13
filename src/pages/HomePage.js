import React from 'react';
import Header from '../components/Header'; 

function HomePage() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h2 className="text-xl font-semibold">Welcome to the Gitam GitHub Community!</h2>
        {/*content here */}
      </main>
    </div>
  );
}

export default HomePage;
