// import React from 'react';
import { useCategoriesQuery, useServicesQuery } from '../Store/BeatyDayApi/BeatyDay.api';

const App = () => {
  const {data: servicesData} = useServicesQuery(null)
  const {data: categoryData} = useCategoriesQuery(null)

  console.log(servicesData);
  
  console.log(categoryData);
  
  
  return (
    <div>
      
    </div>
  );
};

export default App;