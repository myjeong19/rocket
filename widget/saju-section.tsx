'use client';

import Header from '@/components/table/saju-header';

export default function SajuSection() {
  return (
    <section className="absolute top-9/12 left-1/2 transform -translate-x-1/2 translate-y-10 z-10 max-w-md w-full h-full flex flex-col items-center justify-center px-3 py-3">
      <div className="w-full  border-4 border-black h-screen ">
        <div className="flex relative w-full h-full">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-black z-10 mt-2"></div>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black z-10 mb-2"></div>
          <div className="absolute top-0 left-0 w-[2px] h-full bg-black z-10 ml-2"></div>
          <div className="absolute top-0 right-0 w-[2px] h-full bg-black z-10 mr-2"></div>

          <div className="absolute max-w-md top-0 left-0 w-full h-full text-center bg-amber-50">
            <Header />
          </div>
        </div>
      </div>
    </section>
  );
}
