import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';
import Button from '../../components/ui/Button';

const UseCasesList = () => {
  const useCases = [
    {
      title: "Automated Test Script Generator (RSC)",
      value: "$1.2M / yr",
      status: "In Production",
      efficiency: "+22% Efficiency",
      experience: "+16% Experience",
      team: "RSC Engineering"
    },
    {
      title: "Automated Test Script Generator (RSC)",
      value: "$1.2M / yr", 
      status: "In Production",
      efficiency: "+22% Efficiency",
      experience: "+16% Experience",
      team: "RSC Engineering"
    },
    {
      title: "Automated Test Script Generator (RSC)",
      value: "$1.2M / yr",
      status: "In Production", 
      efficiency: "+22% Efficiency",
      experience: "+16% Experience",
      team: "RSC Engineering"
    }
  ];

  // Risk vs ROI Data
  const riskRoiData = [
    { x: 0.4, y: 6, size: 80 },
    { x: 0.7, y: 4, size: 60 },
    { x: 0.9, y: 2.5, size: 40 },
    { x: 1.1, y: 2.8, size: 50 }
  ];

  const yAxisLabels = ['8', '6', '4', '2'];
  const xAxisLabels = ['0.3', '0.6', '0.9', '1.2'];

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-6 lg:gap-8">
      {/* Top Performing Use Cases */}
      <div className="w-full lg:w-[38%] bg-white rounded-xl p-4 md:p-[18px] shadow-[0px_24px_64px_#0000000c] border border-[#e1e8f0]">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
            <h2 className="text-xl md:text-[22px] font-bold leading-6 md:leading-[29px] text-left text-[#0e162b] font-['Johnson_Text']">
              Top Performing Use Cases
            </h2>
            <Button
              text="Filter"
              text_font_size="13"
              text_font_family="Johnson Text"
              text_font_weight="400"
              text_line_height="17px"
              text_color="#0f172ab2"
              border_border="1 solid #0f172ab2"
              border_border_radius="10px"
              leftImage={{
                src: "/images/img_svg.svg",
                width: 14,
                height: 14
              }}
              padding="6px 10px 6px 28px"
              fill_background_color="transparent"
              effect_box_shadow="none"
              layout_align_self="auto"
              layout_gap="0"
              layout_width="auto"
              margin="0"
              position="relative"
              variant="default"
              size="medium"
              className=""
              onClick={() => {}}
              rightImage={null}
            />
          </div>
          <p className="text-base md:text-lg font-normal leading-5 md:leading-6 text-left text-[#0f172ab2] font-['Johnson_Text']">
            Where to scale next for more value
          </p>
        </div>

        {/* Use Cases List */}
        <div className="flex flex-col gap-3">
          {useCases?.map((useCase, index) => (
            <div key={index} className="py-2">
              <div className="flex flex-col gap-0.5 justify-start items-center w-full">
                {/* Title Row */}
                <div className="flex justify-between items-start w-full">
                  <h3 className="text-base font-medium leading-5 text-left text-[#0e162b] font-['Johnson_Text'] flex-1">
                    {useCase?.title}
                  </h3>
                  <span className="text-xs font-semibold leading-[14px] text-left text-[#0bc918] bg-[#ebfcf4] border border-[#0bc918] rounded-md px-2 py-0.5">
                    {useCase?.status}
                  </span>
                </div>
                
                {/* Details Row */}
                <div className="flex flex-wrap justify-start items-center w-full gap-2 mt-1">
                  <span className="text-sm font-normal leading-[19px] text-left text-[#1c283cb2] font-['Johnson_Text']">
                    {useCase?.value}
                  </span>
                  <span className="text-sm font-medium leading-[19px] text-left text-[#0bc918] bg-[#ebfcf4] border border-[#0bc918] rounded-md px-2 py-0.5 ml-3">
                    {useCase?.efficiency}
                  </span>
                  <span className="text-sm font-medium leading-[19px] text-left text-[#eb1700] bg-[#ffeeee] border border-[#eb1700] rounded-md px-2 py-0.5 ml-3">
                    {useCase?.experience}
                  </span>
                  <span className="text-sm font-medium leading-[19px] text-left text-[#0f172ab2] font-['Johnson_Text'] ml-3">
                    {useCase?.team}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Risk vs ROI */}
      <div className="w-full lg:w-[58%] bg-white rounded-xl p-4 md:p-[14px] shadow-[0px_24px_64px_#0000000c] border border-[#e1e8f0]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl md:text-[22px] font-bold leading-6 md:leading-[29px] text-left text-[#0e162b] font-['Johnson_Text']">
              Risk vs ROI
            </h2>
            <p className="text-base md:text-lg font-normal leading-5 md:leading-6 text-left text-[#0f172ab2] font-['Johnson_Text']">
              Bubble = Efficiency gain; Position Shows Value vs Risk
            </p>
          </div>
          <Button
            text="Filter"
            text_font_size="13"
            text_font_family="Johnson Text"
            text_font_weight="400"
            text_line_height="17px"
            text_color="#0f172ab2"
            border_border="1 solid #0f172ab2"
            border_border_radius="10px"
            leftImage={{
              src: "/images/img_svg.svg",
              width: 14,
              height: 14
            }}
            padding="6px 10px 6px 28px"
            fill_background_color="transparent"
            effect_box_shadow="none"
            layout_align_self="auto"
            layout_gap="0"
            layout_width="auto"
            margin="0"
            position="relative"
            variant="default"
            size="medium"
            className=""
            onClick={() => {}}
            rightImage={null}
          />
        </div>

        {/* Chart Container */}
        <div className="relative w-full">
          {/* Y-axis labels */}
          <div className="flex flex-col justify-between items-end absolute left-0 top-4 h-[150px] w-4">
            {yAxisLabels?.map((label, index) => (
              <span key={index} className="text-sm font-medium leading-[19px] text-right text-black font-['Johnson_Text']">
                {label}
              </span>
            ))}
          </div>

          {/* Chart Area */}
          <div className="ml-6 mb-8">
            <div className="w-full h-[150px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart>
                  <XAxis 
                    type="number" 
                    dataKey="x" 
                    domain={[0, 1.2]} 
                    axisLine={false}
                    tickLine={false}
                    tick={false}
                  />
                  <YAxis 
                    type="number" 
                    dataKey="y" 
                    domain={[0, 8]} 
                    axisLine={false}
                    tickLine={false}
                    tick={false}
                  />
                  <Scatter data={riskRoiData}>
                    {riskRoiData?.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill="#eb1700" />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
            </div>

            {/* X-axis labels */}
            <div className="flex justify-between items-center w-full mt-2">
              {xAxisLabels?.map((label, index) => (
                <span key={index} className="text-sm font-medium leading-[18px] text-center text-black font-['Johnson_Text']">
                  {label}
                </span>
              ))}
            </div>

            {/* Bottom left zero */}
            <div className="absolute bottom-0 left-0">
              <span className="text-sm font-medium leading-[18px] text-right text-black font-['Johnson_Text'] ml-1">
                0
              </span>
            </div>
          </div>
        </div>

        {/* Focus First Message */}
        <div className="flex items-center gap-2 mt-4 px-1">
          <img
            src="/images/img_svg_red_a700_01_16x16.svg"
            alt=""
            className="w-4 h-4"
          />
          <span className="text-base font-medium leading-[15px] text-left text-[#090909] font-['Johnson_Text'] ml-2">
            Focus First
          </span>
          <span className="text-base font-normal leading-[13px] text-left text-[#eb1700] font-['Segoe_UI'] ml-2">
            High $ + High Risk = exec attention required today.
          </span>
        </div>
      </div>
    </div>
  );
};

export default UseCasesList;