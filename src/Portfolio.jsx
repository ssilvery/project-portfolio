import React, { useState, useEffect } from 'react'
import Card from './components/Card'
import data from './data/projectsData.json'
import Skeleton from './components/Skeleton';

function SkeletonCard() {
  // const Skeleton = ({ className }) => (
  //   <div className={`bg-zinc-200 animate-pulse rounded ${className}`}></div>
  // );
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-xl ring-gray-900/5">
      
        <Skeleton className="h-6 w-3/3 mb-4" />
        <Skeleton className="h-6 w-2/3 mb-2" />
        <Skeleton className="h-6 w-2/4 mb-4" />
      

      <div className='mt-8 -mx-4 -mb-4'>
        <div className='flex flex-row-reverse'>
          <Skeleton className="h-6 w-1/5 mb-4" />
        </div>
        <Skeleton className="aspect-video w-full" />
      </div>
    </div>
  )
};

function Container() {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // 로컬 데이터이므로 실제로는 즉시 실행되지만, 
    // 로딩 UI 확인을 위해 1초 정도 지연 시간을 줘봅니다.
    const timer = setTimeout(() => {
      setProjects(data);
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="basis-1/2 md:basis-11/12 p-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {isLoading 
          ? (
            Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
          )))
          : projects.map(p => <Card key={p.id} project={p} />)
        }
      </div>
    </div>
  )
}

export default Container