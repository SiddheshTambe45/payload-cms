import React from 'react';
import { redirect } from 'next/navigation';
import Dropdown from './blogdropdown';

const Page = async ({ params }: { params: { type: string } }) => {
  const { type } = params;

  // Validate `type` parameter and redirect if invalid
  if (!type || type.trim() === '') {
    redirect('/');
  }

  // Render Dropdown with the type parameter
  return (
    <div className="p-6">
      <Dropdown params={{ type }} />
    </div>
  );
};

export default Page;
