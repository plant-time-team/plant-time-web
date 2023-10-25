import PlantCard, { Plant } from './PlantCard';
import LoadingMessage from './LoadingMessage';
import React, { useState, useEffect } from 'react';

export default function PlantsGrid({ plants }: { plants: Plant[] }) {
  // Fake delay to simulate loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  });

  return (
    <div className='flex w-full flex-1 basis-0 flex-wrap justify-center gap-8 overflow-y-auto bg-white p-8 dark:bg-zinc-900'>
      {(plants.length === 0 || loading) && <LoadingMessage message={'Loading plants'} />}

      {!loading && plants.map((plant) => <PlantCard plant={plant} key={plant.scientificName} />)}
    </div>
  );
}
