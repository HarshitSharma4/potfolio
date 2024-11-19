'use client';

import NavData from '@/data/Navigation.data';

const Navigation = () => {
  // Check if NavData is available to avoid errors
  if (!NavData) return null;

  return (
    <nav className="text-2xl fixed right-2 top-[50%] -translate-y-[50%] bg-darktheme-secondary rounded-xl  border-darktheme-acent border-2">
      <ul className=" text-3xl text-darktheme-acent px-4 py-5 flex flex-col gap-1rem justify-evenly items-center relative w-[6.25rem] h-80">
        {NavData.navItems.map((item, index) => (
          <li key={index} className='p-4 hover:border-2 hover:border-darktheme-acent rounded-[100%] hover:scale-105 hover:text-4xl' >{item.icon}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
