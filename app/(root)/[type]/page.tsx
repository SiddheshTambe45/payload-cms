import React from 'react';
import { redirect } from 'next/navigation';
import Dropdown from './blogdropdown';


  

  // Render Dropdown with the type parameter
  return (
    <div className="p-6">
      <Dropdown params={{ type }} />
    </div>
  );
};

export default Page;
