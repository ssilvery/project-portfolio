// import React from 'react'

export default function Card({ project }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-xl ring-gray-900/5">
      <div>
        <div className="mb-4">
          <h2 className="text-gray-900 dark:text-white font-bold text-2xl tracking-tight">
            {project.title}
          </h2>
        </div>
        <div className='not-prose flex flex-wrap mb-4'>
          <div
            className="flex justify-end items-center h-6 rounded-lg bg-indigo-400"
            style={{width: `${project.contribution}%`}}
          >
            <p className='text-xs text-white font-semibold mx-2'>기여도 {project.contribution}%</p>
          </div>
        </div>
        <ul className="flex flex-wrap justify-start gap-2 text-xs *:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10">
          {project.tech.map((t, idx) => (
            <li key={idx}>{t}</li>
          ))}
        </ul>
      </div>

      <div className='mt-8 -mx-4 -mb-4'>
        <a href={project.siteUrl} target='_blank' className='block text-right'>새창열기</a>
        <div className='h-100  border-1 border-solid border-gray-100 rounded-sm shadow-lg shadow-gray-300/30'>
          <iframe src={project.siteUrl} width='100%' height='100%'></iframe>
        </div>
      </div>
    </div>
  )
}

// export default Card