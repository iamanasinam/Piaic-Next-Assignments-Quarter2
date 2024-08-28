import React from 'react';

const Page = () => {
  return (
    <div className='bg-slate-400 h-screen flex'>
      <div className='bg-red-500 h-[40] w-[40] flex'> 1</div>
      <div className='bg-green-500 h-[40] w-[40]'>2</div>
      <div className='bg-blue-500 h-[40] w-[40]'>3</div>
      {/* <div className='w-1/4'></div> */}
    </div>
  );
};

export default Page;
