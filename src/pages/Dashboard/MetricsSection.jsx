import React from "react";
import Button from "../../components/ui/Button";

const MetricsSection = () => {
  const metrics = [
    {
      title: "Efficiency",
      icon: "/images/img_group_1437253151.png",
      description: "We're working 22%faster",
      highlightText: "22%faster",
      normalText: "We're working ",
    },
    {
      title: "Effectiveness",
      icon: "/images/img_group_1437253151_deep_orange_a700.png",
      description: "Results are 18% better",
      highlightText: "18% better",
      normalText: "Results are ",
    },
    {
      title: "Experience",
      icon: "/images/img_group_1437253152.png",
      description: "Teams are 16% happier",
      highlightText: "16% happier",
      normalText: "Teams are ",
    },
  ];

  return (
    <section className="w-full">
      {/* Main Container with exact dimensions */}
      <div className="relative w-full max-w-[1620px] h-[286px] rounded-[20px] overflow-hidden shadow-[0px_16px_34px_#c000001e] mx-auto">
        {/* Background Gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#ed2929] via-[#ff4545] to-[#ffb1b1]"
          style={{
            background:
              "linear-gradient(180deg, #EE2929 3%, #FB2B2B 19.5%, #FF4646 59%, #FFB2B2 100%)",
            borderRadius: "20px",
          }}
        >
          {/* Content Container */}
          <div className="relative h-full px-[28px] py-[28px]">
            <div className="flex flex-row justify-between items-start h-full">
              {/* Left Section */}
              <div className="flex flex-col gap-6">
                {/* Title */}
                <h1 className="text-[38px] font-bold leading-[50px] text-left text-white font-['Johnson_Display']">
                  AI Impact Snapshot
                </h1>

                {/* Top Right Text */}
                <p className="text-[20px] font-normal leading-[26px] text-left text-white font-['Johnson_Text']">
                  How AI is helping right now
                </p>

                {/* Cards Container */}
                <div className="flex flex-row gap-4 mt-8 items-start">
                  {/* Three Metrics Cards - Lifted up to align with AI Health card */}
                  <div className="flex flex-row gap-4 relative -top-4">
                    {metrics?.map((metric, index) => (
                      <div
                        key={index}
                        className="w-[162px] h-[89px] bg-white rounded-[9px] p-[12px]"
                      >
                        <div className="flex flex-col gap-[12px] justify-start items-start w-full h-full">
                          {/* Header Row */}
                          <div className="flex justify-between items-center w-full">
                            <h3 className="text-[15.5px] font-normal leading-[20px] text-left text-black font-['Johnson_Text']">
                              {metric?.title}
                            </h3>
                            <img
                              src={metric?.icon}
                              alt={metric?.title}
                              className="w-[25px] h-[25px]"
                            />
                          </div>

                          {/* Description */}
                          <div className="text-[11px] font-normal leading-[15px] text-left text-[#eb1700] font-['Johnson_Text']">
                            <span className="font-normal">
                              {metric?.normalText}
                            </span>
                            <span className="font-bold">
                              {metric?.highlightText}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* AI Health Score Card - Position unchanged, button now inside */}
                  <div className="ml-4 relative -top-20">
                    <div className="w-[327px] h-[161px] bg-white rounded-[15px] shadow-[0px_20px_60px_rgba(0,0,0,0.15)] relative">
                      {/* +5 vs last Q Button - Now positioned inside the card */}
                      <Button
                        text="+5 vs last Q"
                        text_font_size="12.7"
                        text_font_family="Johnson Text"
                        text_font_weight="700"
                        text_line_height="19px"
                        text_text_align="left"
                        text_color="#ffffff"
                        fill_background_color="#eb1700"
                        border_border="1.27px solid #fffefe"
                        border_border_radius="15px"
                        effect_box_shadow="0px 15px 40px rgba(217, 75, 75, 0.25)"
                        padding="6.3px 11.4px"
                        className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10"
                        layout_align_self="auto"
                        layout_gap="0"
                        layout_width="auto"
                        margin="0"
                        position="relative"
                        variant="primary"
                        size="medium"
                        onClick={() => {}}
                        leftImage=""
                        rightImage=""
                      />

                      <div className="flex flex-col justify-center items-center w-full h-full p-4">
                        {/* Score Display */}
                        <div className="flex flex-col justify-center items-center w-full h-full mt-16">
                          <h2 className="text-[30.5px] font-bold leading-[40px] tracking-wide text-left text-[#eb1700] font-['Johnson_Text'] mb-2">
                            87 / 100
                          </h2>
                          <h3 className="text-[25.3px] font-bold leading-[33px] mb-2 text-left text-black font-['Johnson_Text'] tracking-[0.03em]">
                            Overall AI Health
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section - Character Image */}
              <div className="flex flex-row items-end h-full">
                {/* Character Image */}
                <div className="w-[232px] h-[275px]">
                  <img
                    src="/images/img_picture_man_suit_glasses.png"
                    alt="AI Assistant Character"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Right Vector */}
            <div className="absolute bottom-5 right-[23px]">
              <img
                src="/images/img_vector_5.svg"
                alt=""
                className="w-[182px] h-5 rounded-xs"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
