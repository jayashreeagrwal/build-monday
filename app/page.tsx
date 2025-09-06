import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center px-4 pt-20 pb-32">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo Section */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">BuildMonday</h1>
          </div>

          {/* Main Headline */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight max-w-6xl mx-auto">
            The only project management platform
            <br />
            <span className="text-blue-600">you and your team</span> will ever need
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Streamline your workflow, boost productivity, and deliver projects on time with our intuitive platform
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center mb-20">
            <button className="bg-blue-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg">
              Sign in to get started
            </button>
          </div>

          {/* Website Screenshot */}
          <div className="mt-16">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-5xl mx-auto">
              <div className="bg-gray-100 rounded-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop" 
                  alt="BuildMonday Dashboard Preview" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;