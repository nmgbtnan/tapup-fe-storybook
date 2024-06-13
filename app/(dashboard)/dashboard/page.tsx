'use client'
import DashboardAreachart from '@/components/dashboard/DashboardAreachart';
import DashboardBarchart from '@/components/dashboard/DashboardBarchart';
import DashboardCard from '@/components/dashboard/DashboardCard';
import DashboardActivity from '@/components/dashboard/DashboardActivity';
import DashboardTaps from '@/components/dashboard/DashboardTaps';
import GridCard from '@/components/Common/GridCard';
import Link from 'next/link';
import { useModalState } from '@/hooks/modalState';
import StartActivationModal from '@/components/dashboard/cardActivationModal/StartActivationModal';

export default function Overview() {
  const{ isActivationCardModalOpen } = useModalState();

  return (
    <section className="p-2">
      <span className={`mb-2 ml-1 relative inline-block font-bold md:mb-4 md:text-2xl ${isActivationCardModalOpen ? 'backdrop-blur-sm' : ''}`}>
        Dashboard
      </span>
      <div className="grid grid-cols-12 gap-4">
        <DashboardCard />

        <GridCard className="col-span-12 h-96 overflow-hidden p-6 pb-16 pt-3 sm:col-span-6 md:col-span-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-bold md:text-sm lg:text-lg">
              Recent Activity
            </span>
            <Link
              href={''}
              className="text-xs font-bold text-custom-textGray md:text-sm "
            >
              See all Activity
            </Link>
          </div>
          <DashboardActivity />
        </GridCard>

        <GridCard className="col-span-12 h-96 overflow-hidden p-6 pb-[100px] pt-3 sm:col-span-6 md:col-span-6">
          <span className="mb-8 inline-block text-xs font-bold md:text-sm lg:text-lg">
            Recent Taps
          </span>

          <DashboardTaps />
        </GridCard>

        <GridCard className="col-span-12 p-2 md:p-4 xl:col-span-5">
          <span className="my-4 ml-4 inline-block text-sm font-semibold">
            Engagement
          </span>

          <DashboardAreachart />
        </GridCard>
        <GridCard className="col-span-12 p-2 md:p-4 xl:col-span-7">
          <span className="my-4 ml-4 inline-block text-sm font-semibold">
            Profile Visits
          </span>
          <DashboardBarchart />
        </GridCard>
        {isActivationCardModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <StartActivationModal />
          </div>
        )}
      </div>
    </section>
  );
}
