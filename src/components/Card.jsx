import React, { useEffect, useState } from 'react'

export default function Card({ project }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() =>
      setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="animation-in fade-in duration-1000 slide-in-from-bottom-2 bg-white border-1 border-solid border-gray-100 dark:bg-gray-800 dark:border-none rounded-lg p-6 shadow-xl ring-gray-900/5">
      <div>
        <div className="mb-4">
          <h2 className="text-gray-900 dark:text-white font-bold text-2xl tracking-tight">
            {project.title}
          </h2>
        </div>
        <div className='not-prose flex flex-wrap mb-4'>
          <div
            className="flex justify-end items-center h-6 rounded-lg bg-indigo-400 contribution-bar-fill"
            style={{'--progress-width': isLoaded ? `${project.contribution}%` : '0%'}}
          >
            <p className={isLoaded ? "text-xs text-white font-semibold mx-2 transition duration-5000 delay-2000" : "hidden"}>기여도 {project.contribution}%</p>
          </div>
        </div>
        <ul className="flex flex-wrap justify-start gap-2 text-xs *:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10">
          {project.tech.map((t, idx) => (
            <li key={idx}>{t}</li>
          ))}
        </ul>
      </div>

      <div className='mt-8'>
        <a href={project.siteUrl} target='_blank' className='block text-right'>작업물 보기</a>
        <div className='flex flex-col justify-center max-h-100 min-h-100 overflow-y-auto border-1 border-solid border-zinc-200 dark:border-gray-700/50 dark:shadow-none rounded-sm shadow-lg shadow-gray-300/30'>
          {/* <iframe src={project.siteUrl} width='100%' height='100%'></iframe> */}
          <img src={project.imgUrl} alt={`${project.title} 이미지`} />
        </div>
      </div>
    </div>
  )
}

// export default Card