import React from 'react'
import Card from './components/Card'
import data from './data/projectsData.json'

function Container() {
  return (
    <div className="basis-1/2 md:basis-11/12 p-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((project) => (
          <Card
            key={project.id}
            project={project}
          />
        ))}

      </div>
      
    </div>
  )
}

export default Container