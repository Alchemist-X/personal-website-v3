import React from 'react'

const Miscellaneous = () => {
  const lifePath = [
    {
      icon: '🏛️',
      institution: 'Institution 1',
      dates: '2025.07 - 2030.06 (Expected)',
      degree: 'Degree/Position'
    },
    {
      icon: '💻',
      institution: 'Institution 2',
      dates: '2024.06 - 2025.01',
      degree: 'Position'
    },
    {
      icon: '🎓',
      institution: 'Institution 3',
      dates: '2021.12 - 2024.06',
      degree: 'Degree'
    }
  ]

  return (
    <div className="min-h-screen p-8 pb-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-2">Miscellaneous</h1>
        <p className="text-white mb-8">A collection of things I enjoy and find interesting.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Life Path</h2>
            <div className="space-y-6">
              {lifePath.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-2xl">{item.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold">{item.institution}</h3>
                    <p className="text-gray-400 text-sm">{item.dates}</p>
                    <p className="text-gray-300 text-sm mt-1">{item.degree}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Achievement Title</h2>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center h-48">
                <span className="text-gray-500">Image placeholder</span>
              </div>
              <p className="text-gray-400 text-sm text-center">Caption for image</p>
            </div>
          </div>

          <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Places I have been to</h2>
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center h-64">
              <span className="text-gray-500">World map placeholder</span>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 max-w-md">
          <h2 className="text-2xl font-bold text-white mb-4">Random</h2>
          <p className="text-white">Sports I Do Right Now</p>
        </div>
      </div>
    </div>
  )
}

export default Miscellaneous

