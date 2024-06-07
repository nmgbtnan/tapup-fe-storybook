import CustomisableCard from '@/components/Editor/CustomisableCard';
import Accordions from '@/components/Editor/Accordions';
import Sidebar from '@/components/Editor/Sidebar';
import { Suspense } from 'react';

export default function Profile() {
  return (
    <div className="w-screen flex flex-row h-screen">
      <Suspense>
        <Sidebar />
      </Suspense>
      <Accordions />
      <section className="flex-grow py-14 border-x flex justify-center">
        <CustomisableCard />
      </section>
      <section className="w-[80px]"></section>
    </div>
  );
}
