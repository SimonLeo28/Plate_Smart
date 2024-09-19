import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({ item }) => {
  const { organization, content , mobile } = item;
  console.log('Card item:', item); // Log the item to verify data

  return (
    <div className='bg-white m-5 p-5 rounded-sm '>
      <h1 className='text-3xl py-4 px-2 '>{organization}</h1>
      <p className='text-2xl px-2'>
        {content}
      </p>
      <p className='text-2xl px-2'>
        Contact us on {mobile}
      </p>
    </div>
  );
};
