import SajuHeader from '@/components/table/saju-header';
import SajuTable from '@/components/table/saju-table';

export default function SajuSection() {
  return (
    <section
      className="absolute xs:top-10/12 xs:left-1/2 xs:transform xs:-translate-x-1/2 xs:translate-y-50 z-10 
      xxs:top-11/12 xxs:left-1/2 xxs:transform xxs:-translate-x-1/2 xxs:translate-y-5/12
      max-w-md w-full h-fit max-h-[100vh] flex flex-col items-center justify-center xs:px-3 xxs:px-0
      "
    >
      <div className="w-full h-fit  border-4 border-black ">
        <div className="flex relative w-full h-full">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-black z-10 mt-2"></div>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black z-10 mb-2"></div>
          <div className="absolute top-0 left-0 w-[2px] h-full bg-black z-10 ml-2"></div>
          <div className="absolute top-0 right-0 w-[2px] h-full bg-black z-10 mr-2"></div>

          <div className="w-full h-full text-center bg-amber-50 py-14">
            <SajuHeader />
            <SajuTable />
          </div>
        </div>
      </div>
    </section>
  );
}
