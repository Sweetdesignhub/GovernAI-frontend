import React from "react";

const IdentifyingInfo = () => {
  return (
    <div className="bg-white border border-gray-300 rounded-xl p-4 w-full my-4">
      {/* Section Header */}
      <div className="mb-3">
        <h2 className="text-lg font-bold text-gray-900">
          Identifying Info
        </h2>
        <p className="text-gray-600 text-sm">
          Basic metadata for tracking and reporting
        </p>
      </div>

      {/* Form Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* Use Case ID */}
        <div>
          <label className="block text-sm font-medium text-red-600 mb-1">
            Use Case ID
          </label>
          <input
            type="text"
            placeholder="Enter ID"
            className="w-full border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Use Case Name */}
        <div>
          <label className="block text-sm font-medium text-red-600 mb-1">
            Use Case Name
          </label>
          <input
            type="text"
            placeholder="Enter name"
            className="w-full border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Priority */}
        <div>
          <label className="block text-sm font-medium text-red-600 mb-1">
            Priority
          </label>
          <select
            className="w-full border border-gray-300 rounded-lg px-3 py-1 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>

        {/* Function */}
        <div>
          <label className="block text-sm font-medium text-red-600 mb-1">
            Function
          </label>
          <input
            type="text"
            placeholder="Enter function"
            className="w-full border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Owner */}
        <div>
          <label className="block text-sm font-medium text-red-600 mb-1">
            Owner
          </label>
          <input
            type="text"
            placeholder="Enter owner"
            className="w-full border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Region */}
        <div>
          <label className="block text-sm font-medium text-red-600 mb-1">
            Region
          </label>
          <select
            className="w-full border border-gray-300 rounded-lg px-3 py-1 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select</option>
            <option>NA</option>
            <option>APAC</option>
            <option>EMEA</option>
          </select>
        </div>

        {/* GenID */}
        <div>
          <label className="block text-sm font-medium text-red-600 mb-1">
            GenID
          </label>
          <input
            type="text"
            placeholder="Enter GenID"
            className="w-full border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* ITONICS ID */}
        <div>
          <label className="block text-sm font-medium text-red-600 mb-1">
            ITONICS ID
          </label>
          <input
            type="text"
            placeholder="Enter ITONICS ID"
            className="w-full border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-red-600 mb-1">
            Status
          </label>
          <input
            type="text"
            placeholder="Enter status"
            className="w-full border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Sector */}
        <div>
          <label className="block text-sm font-medium text-red-600 mb-1">
            Sector
          </label>
          <select
            className="w-full border border-gray-300 rounded-lg px-3 py-1 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select</option>
            <option>Enterprise</option>
            <option>Consumer</option>
          </select>
        </div>

        {/* Use Case Type */}
        <div>
          <label className="block text-sm font-medium text-red-600 mb-1">
            Use Case Type
          </label>
          <select
            className="w-full border border-gray-300 rounded-lg px-3 py-1 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select</option>
            <option>Gen AI</option>
            <option>ML</option>
            <option>Automation</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default IdentifyingInfo;