import React from 'react';
import Header from '../../components/common/Header';
import Sidebar from '../../components/common/Sidebar';
import IdentifyingInfo from '../../components/newcasefields/IdentifyingInfo.jsx';
import AIContext from "../../components/newcasefields/AIContext.jsx";
import BusinessValue from "../../components/newcasefields/BusinessValue.jsx";
import GovernanceEvidence from "../../components/newcasefields/GovernanceEvidence";
import NewUseCard from '../../components/newcasefields/Newusecard.jsx';


const NewCase = () => {
  return (
      <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-20 flex flex-col">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <div className="max-w-7xl mx-auto px-4 space-y-6">
        <NewUseCard />
        <IdentifyingInfo />
        <AIContext />
        <BusinessValue />
        <GovernanceEvidence />
      </div>
      </div>
    </div>
  );
};

export default NewCase;
