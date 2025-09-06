import React from 'react';

interface Member {
  id: string;
  name: string;
  email: string;
}

function App() {
  const members: Member[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@buildmonday.com'
    },
    {
      id: '2',
      name: 'Michael Chen',
      email: 'michael.chen@buildmonday.com'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      email: 'emily.rodriguez@buildmonday.com'
    },
    {
      id: '4',
      name: 'David Thompson',
      email: 'david.thompson@buildmonday.com'
    },
    {
      id: '5',
      name: 'Jessica Park',
      email: 'jessica.park@buildmonday.com'
    },
    {
      id: '6',
      name: 'Alex Kumar',
      email: 'alex.kumar@buildmonday.com'
    },
    {
      id: '7',
      name: 'Maria Garcia',
      email: 'maria.garcia@buildmonday.com'
    },
    {
      id: '8',
      name: 'James Wilson',
      email: 'james.wilson@buildmonday.com'
    },
    {
      id: '9',
      name: 'Lisa Anderson',
      email: 'lisa.anderson@buildmonday.com'
    },
    {
      id: '10',
      name: 'Robert Lee',
      email: 'robert.lee@buildmonday.com'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="divide-y divide-gray-200">
            {members.map((member) => (
              <div
                key={member.id}
                className="p-6 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-600">
                      {member.email}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-lg">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;