import React, { useState } from "react";

const AIContext = () => {
  const [formData, setFormData] = useState({
    opportunity: "",
    requirements: "",
    accelerators: "",
    sdlcPhase: "",
    sdlcActivity: "",
    targetTimeline: "",
    targetImplementation: "",
    majorPrograms: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white border border-gray-300 rounded-xl p-4 w-full my-4">
      {/* Section Header */}
      <div className="mb-3">
        <h2 className="text-lg font-bold text-gray-900">
          AI Context
        </h2>
        <p className="text-gray-600 text-sm">
          Where in SDLC, which accelerators, and rollout timeline
        </p>
      </div>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Opportunity and Requirements in same row */}
        <div className="md:col-span-1">
          <label className="block text-sm font-medium text-red-600 mb-1">
            Opportunity
          </label>
          <textarea
            name="opportunity"
            value={formData.opportunity}
            onChange={handleChange}
            rows="3"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe the opportunity..."
          />
        </div>

        <div className="md:col-span-1">
          <label className="block text-sm font-medium text-red-600 mb-1">
            What do you need to complete this?
          </label>
          <textarea
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            rows="3"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Mention dependencies or resources needed..."
          />
        </div>

        {/* Accelerators */}
        <div>
          <label className="block text-sm font-medium text-red-600 mb-1">
            Accelerators
          </label>
          <select
            name="accelerators"
            value={formData.accelerators}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-1 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select</option>
            <option value="Aurora">Aurora</option>
            <option value="Gemini">Gemini</option>
            <option value="Copilot">Copilot</option>
          </select>
        </div>

        {/* Target Timeline */}
        <div>
          <label className="block text-sm font-medium text-red-600 mb-1">
            Target Timeline
          </label>
          <select
            name="targetTimeline"
            value={formData.targetTimeline}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-1 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select</option>
            <option value="3-6 months">3–6 months</option>
            <option value="6-12 months">6–12 months</option>
            <option value="1 year+">1 year+</option>
          </select>
        </div>

        {/* SDLC Phase (L1) */}
        <div>
          <label className="block text-sm font-medium text-red-600 mb-1">
            SDLC Phase (L1)
          </label>
          <select
            name="sdlcPhase"
            value={formData.sdlcPhase}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-1 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select</option>
            <option value="Product Planning">Product Planning</option>
            <option value="Development">Development</option>
            <option value="Testing">Testing</option>
          </select>
        </div>

        {/* SDLC Activity (L2) */}
        <div>
          <label className="block text-sm font-medium text-red-600 mb-1">
            SDLC Activity (L2)
          </label>
          <select
            name="sdlcActivity"
            value={formData.sdlcActivity}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-1 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select</option>
            <option value="Test Case Generation">Test Case Generation</option>
            <option value="Code Review">Code Review</option>
            <option value="Deployment">Deployment</option>
          </select>
        </div>

        {/* Target Implementation Time */}
        <div>
          <label className="block text-sm font-medium text-red-600 mb-1">
            Target Implementation Time
          </label>
          <input
            type="text"
            name="targetImplementation"
            value={formData.targetImplementation}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Q3 2025"
          />
        </div>

        {/* Major Programs */}
        <div>
          <label className="block text-sm font-medium text-red-600 mb-1">
            Major Programs
          </label>
          <input
            type="text"
            name="majorPrograms"
            value={formData.majorPrograms}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Transcend, Digital Core"
          />
        </div>
      </div>
    </div>
  );
};

export default AIContext;