import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Sidebar from '../../components/common/Sidebar';
import MetricsSection from './MetricsSection';
import PerformanceCharts from './PerformanceCharts';
import UseCasesList from './UseCasesList';

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>AI Impact Dashboard | Real-Time Analytics & Performance Metrics</title>
        <meta name="description" content="Monitor AI initiative performance with 87/100 health score, efficiency improvements, team experience metrics, ROI analysis, and value realization insights for data-driven decisions." />
        <meta property="og:title" content="AI Impact Dashboard | Real-Time Analytics & Performance Metrics" />
        <meta property="og:description" content="Monitor AI initiative performance with 87/100 health score, efficiency improvements, team experience metrics, ROI analysis, and value realization insights for data-driven decisions." />
      </Helmet>

      <div className="flex w-full min-h-screen bg-[#f1f1f3]">
        <Sidebar />
        
        <main className="flex-1 lg:ml-20">
          <Header />
          
          <div className="w-full overflow-y-auto">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-5 md:gap-9 justify-start items-center w-full py-4 md:py-6">
                <MetricsSection />
                <PerformanceCharts />
                <UseCasesList />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;