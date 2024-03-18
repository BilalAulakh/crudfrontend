import Link from 'next/link';
import React, { FC } from 'react';

export interface NavBarElement {
  className?: string;
}

const NavBar: FC<NavBarElement> = ({ className = "" }) => {
  return (
    <nav className={`bg-green-400 border-gray-200 dark:bg-green-200 ${className}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
       
      
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium tex-black flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg dark:bg-green-400 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-green-400 dark:border-gray-700">
            <li>
              <Link href={'/AddData'} className="block py-2 px-3  rounded md:bg-transparent md:text-blue-700 md:p-0  md:dark:text-blue-500" aria-current="page">Add Data</Link>
            </li>
            <li>
              <a href={'/Show-Single'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Show All Data</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Show Single Data</a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
