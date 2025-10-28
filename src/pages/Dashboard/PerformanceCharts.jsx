import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import Button from '../../components/ui/Button';

const PerformanceCharts = () => {
  // AI Initiative Data
  const initiativeData = [
    { status: 'Submitted', count: 120, rate: '71% approval rate', color: '#e17100', bgColor: '#fffcfa' },
    { status: 'Approved', count: 85, rate: '12.5% live rate', color: '#01af2f', bgColor: '#fafffa' },
    { status: 'Live', count: 15, rate: 'Success prob 82%', color: '#eb1700', bgColor: '#fef2f2' }
  ];

  // Value Timeline Data
  const timelineData = [
    { month: 'Jan', value: 0.5 },
    { month: 'Feb', value: 1.2 },
    { month: 'Mar', value: 2.1 },
    { month: 'Apr', value: 2.8 },
    { month: 'May', value: 3.5 },
    { month: 'Jun', value: 4.1 },
    { month: 'Jul', value: 4.6 },
    { month: 'Aug', value: 5.0 },
    { month: 'Sep', value: 5.3 },
    { month: 'Oct', value: 5.6 },
    { month: 'Nov', value: 5.8 },
    { month: 'Dec', value: 6.0 }
  ];

  // Risk vs ROI Data
  const riskRoiData = [
    { x: 0.4, y: 6, size: 80, color: '#eb1700' },
    { x: 0.7, y: 4, size: 60, color: '#eb1700' },
    { x: 0.9, y: 2.5, size: 40, color: '#eb1700' },
    { x: 1.1, y: 2.8, size: 50, color: '#eb1700' }
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-6 lg:gap-8">
      {/* AI Initiative Throughout */}
      <div className="w-full lg:w-[38%] bg-white rounded-xl p-4 md:p-[18px] shadow-[0px_24px_64px_#0000000c] border border-[#e1e8f0]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl md:text-[22px] font-bold leading-6 md:leading-[29px] text-left text-[#0e162b] font-['Johnson_Text']">
              AI Initiative Throughout
            </h2>
            <p className="text-base md:text-lg font-normal leading-5 md:leading-6 text-left text-[#0f172ab2] font-['Johnson_Text']">
              Ideas → approval → production
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
            fill_background_color="#ffffff"
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

        {/* Initiative Stats */}
        <div className="flex flex-col sm:flex-row gap-8 md:gap-[66px] justify-center items-center mb-8 mt-6">
          {initiativeData?.map((item, index) => (
            <div key={index} className="flex flex-col gap-2 md:gap-3 justify-start items-center w-full sm:w-auto">
              <div 
                className="text-lg font-bold leading-6 text-center rounded-xl px-4 py-1 border"
                style={{ 
                  color: item?.color, 
                  backgroundColor: item?.bgColor,
                  borderColor: item?.color
                }}
              >
                {item?.status}
              </div>
              <div className="flex flex-col gap-2 justify-start items-center">
                <span className="text-[32px] md:text-[36px] font-bold leading-[42px] md:leading-[47px] text-center text-[#0e162b] font-['Johnson_Text']">
                  {item?.count}
                </span>
                <span className="text-base md:text-lg font-medium leading-5 md:leading-[25px] text-center text-[#0f172ab2] font-['Johnson_Text']">
                  {item?.rate}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Projected Annual Value */}
        <div className="flex flex-col sm:flex-row justify-start items-start sm:items-end gap-4 mt-12">
          <div className="flex items-end gap-1">
            <img
              src="/images/img_svg_red_a700_01.svg"
              alt=""
              className="w-5 h-5 mb-2"
            />
            <div className="flex gap-1 items-center px-1 mb-1">
              <span className="text-base font-medium leading-5 text-left text-black font-['Johnson_Text']">
                Projected Annual Value
              </span>
              <span className="text-sm font-normal leading-[19px] text-left text-[#0f172ab2] font-['Johnson_Text']">
                (current)
              </span>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-1 border border-[#e1e8f0] ml-3">
            <div className="flex justify-center items-center gap-3">
              <img
                src="/images/img_svg_green_a700_01.svg"
                alt=""
                className="w-5 h-5"
              />
              <span className="text-xl md:text-[22px] font-bold leading-6 md:leading-[29px] text-left text-[#0bc918] font-['Johnson_Text']">
                4.2M
              </span>
              <span className="text-xs font-normal leading-[13px] text-left text-[#e7000a] bg-[#fef2f2] border border-[#ffc9c9] rounded px-1 py-0.5 ml-3">
                + $320K vs last Q
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Value Realization Timeline */}
      <div className="w-full lg:w-[58%] bg-white rounded-xl p-4 md:p-[14px] shadow-[0px_24px_64px_#0000000c] border border-[#e1e8f0]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl md:text-[22px] font-bold leading-6 md:leading-[29px] text-left text-[#0e162b] font-['Johnson_Text']">
              Value Realization Timeline
            </h2>
            <p className="text-base md:text-lg font-normal leading-5 md:leading-6 text-left text-[#0f172ab2] font-['Johnson_Text']">
              Annualized value realized from AI-enabled SDLC initiatives
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
            fill_background_color="#ffffff"
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

        {/* Chart */}
        <div className="w-full h-[200px] md:h-[250px] mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={timelineData}>
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#666' }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#666' }}
                domain={[0, 8]}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#eb1700" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Forecast */}
        <div className="flex items-center gap-3">
          <img
            src="/images/img_svg_red_a700_01_20x20.svg"
            alt=""
            className="w-5 h-5"
          />
          <span className="text-base font-medium leading-5 text-left text-[#090909] font-['Johnson_Text'] ml-3">
            Forecast
          </span>
          <div className="text-base font-normal leading-[22px] text-left text-[#eb1700] font-['Johnson_Text'] ml-3">
            <span className="font-normal">Expected to reach </span>
            <span className="font-bold">$5.1M/yr</span>
            <span className="font-bold"> by Dec (+$900K upside)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceCharts;