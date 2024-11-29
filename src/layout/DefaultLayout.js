import { useState } from 'react';
import Header from '../components/Header';
import { Outlet, useLocation } from 'react-router-dom';

const DefaultLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [headerOpen, setHeaderOpen] = useState(false);


  return (
    <div className={`dark:bg-boxdark-2  dark:text-bodydark`}>
      <div className="flex h-screen overflow-hidden ">

        <div className="relative  flex flex-1 flex-col bg-[#f9f8f8] overflow-hidden">
          <Header className="fixed top-0 left-0 w-full z-50" headerOpen={headerOpen}  setHeaderOpen={setHeaderOpen} />


          <main className='overflow-y-auto flex-1 bg-[#f9f8f8]'>

            <div className="mx-auto max-w-screen p-4 md:p-5 2xl:p-10">
              <Outlet />
            </div>
          </main>
       
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
