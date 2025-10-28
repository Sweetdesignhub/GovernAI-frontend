import React from "react";
import Button from "../../components/ui/Button";

const NewUseCard = () => {
  const metrics = [
    {
      title: "Efficiency",
      description: "We’re working 22% faster",
    },
    {
      title: "Effectiveness",
      description: "Results are 18% better",
    },
    {
      title: "Experience",
      description: "Teams are 16% happier",
    },
  ];

  return (
    <section className="w-full mt-8">
      <div className="relative w-full max-w-[1620px] h-[286px] rounded-[20px] overflow-hidden shadow-[0px_16px_34px_#c000001e] mx-auto">
        {/* Background Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #EE2929 0%, #FB2B2B 40%, #FF4646 70%, #FFB2B2 100%)",
            borderRadius: "20px",
          }}
        ></div>

        {/* Main Content */}
        <div className="relative h-full px-[32px] py-[24px] flex justify-between items-start">
          {/* Left Section */}
          <div className="flex flex-col gap-5 text-white">
            <h1 className="text-[28px] font-bold">SDLC New Use Case</h1>
            <p className="text-[16px] max-w-[780px] leading-[22px]">
              Capture the business value, SDLC phase, and governance needs for
              this AI initiative. This will determine the approval and rollout
              path in the Executive Dashboard.
            </p>

            {/* Metric Cards */}
            <div className="flex gap-4 mt-4">
              {metrics.map((item, i) => (
                <div
                  key={i}
                  className="bg-white text-black w-[165px] h-[82px] rounded-[10px] p-[12px] flex flex-col justify-between"
                >
                  <h3 className="text-[15px] font-semibold">{item.title}</h3>
                  <p className="text-[13px] text-[#eb1700]">{item.description}</p>
                </div>
              ))}

              {/* Projected Value Card - same size as others */}
              <div className="bg-white text-black w-[165px] h-[82px] rounded-[10px] p-[12px] flex flex-col justify-between overflow-hidden">
                <div className="flex justify-between items-center">
                  <h3 className="text-[15px] font-semibold">Projected Value</h3>
                  <span className="text-[11px] text-gray-500">FY25</span>
                </div>
                <h2 className="text-[14px] font-bold text-[#eb1700]">$1.2M / yr</h2>
                <p className="text-[10px] text-gray-500 leading-[13px]">
                  Based on historical AI efficiency & time saved
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-end">
            {/* Top Buttons Row */}
            <div className="flex gap-3 mb-2 relative top-[-4px]">
              <button
                className="flex items-center justify-center px-[13px] py-[9px]
                w-[102px] h-[34px] bg-white border border-[#E5E7EB] rounded-[10px]
                text-[#0F172A] font-['Johnson_Text'] text-[11.5px] font-normal leading-[14px]"
              >
                Save Draft
              </button>

              <button
                className="flex items-center justify-center px-[13px] py-[9px]
                w-[170px] h-[34px] bg-white border border-[#E5E7EB] rounded-[10px]
                text-[#0F172A] font-['Johnson_Text'] text-[11.5px] font-normal leading-[14px]"
              >
                Generate PDF Summary
              </button>

              <button
                className="flex items-center justify-center px-[13px] py-[9px]
                w-[154px] h-[34px] bg-[#EB1700] border border-white rounded-[10px]
                text-white font-['Johnson_Text'] text-[11.5px] font-bold leading-[14px]
                shadow-[0px_7.68px_4px_rgba(108,0,0,0.15)]"
              >
                Submit for Approval
              </button>
            </div>

            {/* Character Image */}
            <img
              src="/images/img_picture_man_suit_glasses.png"
              alt="Character"
              className="w-[220px] h-[270px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewUseCard;
