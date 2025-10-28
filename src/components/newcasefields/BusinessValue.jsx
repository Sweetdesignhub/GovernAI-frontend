import React, { useState } from "react";
import { TrendingUp, Clock } from "lucide-react";

const BusinessValue = () => {
  const [formData, setFormData] = useState({
    targetedValue: "",
    impactSummary:
      "Faster by 22%, better outcomes by 18%, and happier teams by 16%. Estimated annual value $1.2M / yr.",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4 md:p-6 w-full">
      {/* Section Header */}
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
        Business Value
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        How does this create measurable impact?
      </p>

      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Targeted Value */}
        <div className="flex flex-col">
          <label className="block text-sm font-medium text-red-600 mb-1">
            Targeted Value
          </label>
          <textarea
            name="targetedValue"
            value={formData.targetedValue}
            onChange={handleChange}
            rows="5"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Impact Summary */}
        <div className="flex flex-col bg-gray-50 border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="text-red-600 w-5 h-5" />
            <h3 className="font-semibold text-gray-900 text-base">
              Impact Summary
            </h3>
          </div>

          <p className="text-red-600 font-medium mb-2 leading-relaxed text-sm">
            {formData.impactSummary}
          </p>

          <div className="flex items-start gap-2 text-gray-500 text-xs mt-2">
            <Clock className="w-4 h-4 mt-0.5" />
            <span>
              After submission, this summary appears in Leadership View to
              justify funding / scaling.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessValue;