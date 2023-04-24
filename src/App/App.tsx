// import React from 'react';
import AppRoutes from '../Routes/AppRoutes';
import { useCategoriesQuery, useServicesQuery } from '../Store/BeatyDayApi/BeatyDay.api';

const App = () => {
  const {data: servicesData} = useServicesQuery(null)
  const {data: categoryData} = useCategoriesQuery(null)

  console.log(servicesData);
  
  console.log(categoryData);
  
  
  return (
    <AppRoutes />
  );
};

export default App;