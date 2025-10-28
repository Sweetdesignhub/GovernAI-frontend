import React, { useState } from "react";
import { Search, ChevronDown, Plus } from "lucide-react";
import Header from "../../components/common/Header";
import Sidebar from "../../components/common/Sidebar";
import { MdAssuredWorkload, MdPaid } from "react-icons/md";

const UseCaseRegistry = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const useCases = [
    {
      id: 1,
      status: "draft",
      statusColor: "bg-[#004AEB]",
      statusLabel: "In Draft",
      count: "06",
    },
    {
      id: 2,
      status: "review",
      statusColor: "bg-[#EB6E00]",
      statusLabel: "In Review",
      count: "06",
    },
    {
      id: 3,
      status: "approved",
      statusColor: "bg-[#0AB31E]",
      statusLabel: "Approved",
      count: "06",
    },
    {
      id: 4,
      status: "live",
      statusColor: "bg-[#EB1700]",
      statusLabel: "Live",
      count: "06",
    },
  ];

  const StatCard = ({ label, value, valueColor, colSpan = "col-span-1" }) => {
    return (
      <div
        className={`bg-white backdrop-blur rounded-xl px-3 py-2  transition-colors ${colSpan} flex flex-col items-center justify-center`}
      >
        <div className="text-xs md:text-sm text-gray-600 mb-1 text-center">
          {label}
        </div>
        <div
          className={`text-xl md:text-2xl font-bold text-center ${valueColor}`}
        >
          {value}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-20 flex flex-col">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto">
          {/* Hero Section */}
          <div
            className="rounded-2xl p-4 md:p-6 mb-6 md:mb-8 flex flex-col md:flex-row items-start justify-between"
            style={{
              background:
                "linear-gradient(180deg, #FC7575 0%, #FD6666 41%, #F93232 80.5%, #FB2D2D 97%)",
              borderImageSlice: 1,
              boxShadow: "0px 12px 24px 0px #27060026",
            }}
          >
            {/* Left: Title & Description */}
            <div className="md:w-1/2 mb-4 md:mb-0 flex flex-col justify-start">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-1 text-left">
                Use Case Registry
              </h2>
              <p className="text-white text-base md:text-lg text-left">
                Track, update & evolve your AI innovations
              </p>
            </div>

            {/* Right: Hero Stats */}
            <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3">
              <StatCard
                label="Total Use Cases"
                value="12"
                valueColor="text-red-600"
              />
              <StatCard
                label="Approved"
                value="6"
                valueColor="text-green-600"
              />
              <StatCard
                label="In Progress"
                value="4"
                valueColor="text-yellow-600"
              />
              <StatCard
                label="Needs Work"
                value="2"
                valueColor="text-red-600"
              />
              <StatCard
                label="Portfolio Value"
                value="$8.4M/yr"
                valueColor="text-blue-600"
                colSpan="col-span-2 md:col-span-3 lg:col-span-1"
              />
            </div>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {useCases.map((useCase, colIndex) => (
              <div key={colIndex} className="space-y-4 md:space-y-6">
                {/* Status Badge */}
                <div className="flex items-center gap-2">
                  <div
                    className={`${useCase.statusColor} text-white px-4 py-2 rounded-2xl flex items-center gap-2 shadow-sm`}
                  >
                    <div className="bg-white text-gray-900 font-medium px-2 py-1 rounded-full text-sm">
                      {useCase.count}
                    </div>
                    <span className="text-sm">{useCase.statusLabel}</span>
                  </div>
                </div>

                {/* Cards */}
                {[0, 1, 2].map((cardIndex) => (
                  <div
                    key={cardIndex}
                    className="bg-white rounded-xl p-4 md:p-5 shadow-sm border border-gray-200 hover:shadow-md transition-all hover:border-red-200"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-johnson-text font-bold text-gray-900 flex-1 text-sm md:text-base">
                        AI Rule Engine for Compliance
                      </h3>

                      <ChevronDown className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
                    </div>

                    <div className="mb-4 flex items-center gap-4 text-xs md:text-sm text-gray-600">
                      <div>
                        Owner:{" "}
                        <span className="font-medium text-gray-900">
                          Ram Kumar
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-orange-600 font-medium">
                          • APDR
                        </span>
                        <span className="text-red-600 font-medium">• NA</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 md:px-3 py-1 bg-pink-100 text-pink-700 rounded-lg text-xs font-medium">
                        24% Efficiency
                      </span>
                      <span className="px-2 md:px-3 py-1 bg-yellow-100 text-yellow-700 rounded-lg text-xs font-medium">
                        18% Effectiveness
                      </span>
                      <span className="px-2 md:px-3 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-medium">
                        15% Experience
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <div>
                        <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-1">
                          <MdPaid size={18} /> {/* Slightly bigger icon */}
                          <span className="text-sm">Value</span>{" "}
                          {/* Slightly bigger text */}
                        </div>
                        <div className="text-lg md:text-xl font-bold text-red-600">
                          $1.8M/yr
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5 text-sm text-gray-500 mb-1">
                          <MdAssuredWorkload size={18} />{" "}
                          {/* Slightly bigger icon */}
                          <span className="text-sm">Compliance</span>{" "}
                          {/* Slightly bigger text */}
                        </div>
                        <div className="text-lg md:text-xl font-bold text-red-600">
                          91%
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default UseCaseRegistry;
