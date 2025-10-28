import React, { useState } from "react";
import { ShieldAlert, AlertTriangle, Users, Upload } from "lucide-react";

const GovernanceEvidence = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/plain",
      "application/octet-stream",
    ];

    if (allowedTypes.includes(file.type)) {
      setFileName(file.name);
    } else {
      alert("❌ Only PDF, Word, and .note files are supported. JPEG and PNG are not allowed.");
      event.target.value = "";
      setFileName("");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4 md:p-6 w-full">
      {/* Title */}
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
        Governance & Evidence
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Status, approvals, and required documentation
      </p>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Left section */}
        <div className="space-y-4">
          {/* Approval Stage */}
          <div className="flex items-start space-x-3 bg-gray-50 p-3 rounded-lg">
            <ShieldAlert className="text-red-500 w-5 h-5 mt-0.5" />
            <div>
              <h3 className="font-medium text-gray-800 text-sm">Approval Stage</h3>
              <p className="text-xs text-gray-500">
                Technical Review → Admin Review → Leadership
              </p>
            </div>
          </div>

          {/* Risk / Compliance */}
          <div className="flex items-start space-x-3 bg-gray-50 p-3 rounded-lg">
            <AlertTriangle className="text-yellow-500 w-5 h-5 mt-0.5" />
            <div>
              <h3 className="font-medium text-gray-800 text-sm">Risk / Compliance</h3>
              <p className="text-xs text-gray-500">
                Needs bias & traceability evidence before APAC rollout
              </p>
            </div>
          </div>

          {/* Stakeholders */}
          <div className="flex items-start space-x-3 bg-gray-50 p-3 rounded-lg">
            <Users className="text-blue-500 w-5 h-5 mt-0.5" />
            <div>
              <h3 className="font-medium text-gray-800 text-sm">Stakeholders</h3>
              <p className="text-xs text-gray-500">
                RSC Eng, GCA Ops, 1ASL SDLC
              </p>
            </div>
          </div>
        </div>

        {/* Right section - Upload box */}
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-red-400 bg-red-50 rounded-lg p-6 text-center hover:bg-red-100 transition">
          <label
            htmlFor="file-upload"
            className="cursor-pointer flex flex-col items-center"
          >
            <Upload className="w-8 h-8 text-red-500 mb-2" />
            <span className="font-medium text-gray-700 text-sm">
              Click to upload or drag and drop
            </span>
            <span className="text-xs text-gray-500 mt-1">
              Max. File Size 10 MB, Only supports PDF, Word, .note. JPEG and PNG are not supported
            </span>
          </label>

          <input
            id="file-upload"
            type="file"
            accept=".pdf,.doc,.docx,.note,.txt"
            onChange={handleFileChange}
            className="hidden"
          />

          {fileName && (
            <p className="mt-3 text-sm text-green-600 font-medium">
              ✅ Uploaded: {fileName}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GovernanceEvidence;