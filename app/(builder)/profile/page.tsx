import CustomisableCard from '@/components/Editor/CustomisableCard';
import Accordions from '@/components/Editor/Accordions';
import { Suspense } from 'react';
import Sidebar from '@/components/builder/Sidebar';

export default function Profile() {
  return (
    <section className="w-screen flex flex-row h-screen bg-gray-200 p-5">
      {/* <Suspense>
        <Sidebar />
      </Suspense>
      <Accordions />
      <section className="flex-grow py-14 border-x flex justify-center">
        <CustomisableCard />
      </section>
      <section className="w-[80px]"></section> */}
      <Sidebar/>
    </section>
  );
}
