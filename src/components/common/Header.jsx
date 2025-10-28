import React from "react";
import Button from "../ui/Button";
import SearchView from "../ui/SearchView";
import Dropdown from "../ui/Dropdown";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 h-16">
      <div className="w-full max-w-[1437px] mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo/Title Section - Reduced by 20% */}
          <div className="flex-shrink-0">
            <h1 className="w-[169px] h-[21px] text-[14px] leading-[21px] font-bold text-black font-johnson-text tracking-[0.16px] flex items-center">
              ADPR SDLC Govern AI
            </h1>
          </div>

          {/* Search Bar - Centered, properly reduced */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="w-[200px] h-[30px]">
              <SearchView
                placeholder="Search use case, owner, ID…"
                text_font_size="11"
                text_font_family="Johnson Text"
                text_font_weight="400"
                text_line_height="14px"
                text_color="rgba(15, 23, 42, 0.7)"
                fill_background_color="#FFFFFF"
                border_border="1px solid #E5E7EB"
                border_border_radius="10px"
                effect_box_shadow="inset 0px 1.6px 8px rgba(0, 0, 0, 0.08)"
                leftImage={{
                  src: "/images/img_search.svg",
                  width: 16,
                  height: 16,
                }}
                padding="6px 10px 6px 29px"
                layout_gap="0"
                layout_width="200px"
                position="relative"
                size="medium"
                className="search-field"
                value=""
                onChange={() => {}}
                onFocus={() => {}}
                onBlur={() => {}}
                rightImage={{
                  src: "",
                  width: 0,
                  height: 0,
                }}
              />
            </div>
          </div>

          {/* Right Section - Filters and Actions */}
          <div className="flex items-center gap-3">
            {/* Filters Container */}
            <div className="flex gap-2">
              {/* Region Dropdown */}
              <Dropdown
                placeholder="Region : All Regions"
                text_font_size="10"
                text_font_family="Johnson Text"
                text_font_weight="400"
                text_line_height="12px"
                text_color="#0F172A"
                fill_background_color="#FFFFFF"
                border_border="0.74px solid #E5E7EB"
                border_border_radius="8px"
                rightImage={{
                  src: "/images/img_arrowdropdown.svg",
                  width: 13,
                  height: 13,
                }}
                padding="8px 24px 7px 11px"
                options={[
                  { label: "All Regions", value: "all" },
                  { label: "North America", value: "na" },
                  { label: "Europe", value: "eu" },
                  { label: "Asia Pacific", value: "ap" },
                ]}
                layout_gap="0"
                layout_width="123px"
                position="relative"
                size="small"
                className="h-[28px]"
                onChange={() => {}}
                leftImage={{
                  src: "",
                  width: 0,
                  height: 0,
                }}
              />

              {/* Status Dropdown */}
              <Dropdown
                placeholder="Status : All Status"
                text_font_size="10"
                text_font_family="Johnson Text"
                text_font_weight="400"
                text_line_height="12px"
                text_color="#0F172A"
                fill_background_color="#FFFFFF"
                border_border="0.74px solid #E5E7EB"
                border_border_radius="8px"
                rightImage={{
                  src: "/images/img_arrowdropdown.svg",
                  width: 13,
                  height: 13,
                }}
                padding="8px 24px 7px 11px"
                options={[
                  { label: "All Status", value: "all" },
                  { label: "Active", value: "active" },
                  { label: "Pending", value: "pending" },
                  { label: "Completed", value: "completed" },
                ]}
                layout_gap="0"
                layout_width="117px"
                position="relative"
                size="small"
                className="h-[28px]"
                onChange={() => {}}
                leftImage={{
                  src: "",
                  width: 0,
                  height: 0,
                }}
              />

              {/* Timeline Dropdown */}
              <Dropdown
                placeholder="Timeline : Q4 2025"
                text_font_size="10"
                text_font_family="Johnson Text"
                text_font_weight="400"
                text_line_height="12px"
                text_color="#0F172A"
                fill_background_color="#FFFFFF"
                border_border="0.74px solid #E5E7EB"
                border_border_radius="8px"
                rightImage={{
                  src: "/images/img_arrowdropdown.svg",
                  width: 13,
                  height: 13,
                }}
                padding="8px 24px 7px 11px"
                options={[
                  { label: "Q4 2025", value: "q4-2025" },
                  { label: "Q1 2026", value: "q1-2026" },
                  { label: "Q2 2026", value: "q2-2026" },
                  { label: "Q3 2026", value: "q3-2026" },
                ]}
                layout_gap="0"
                layout_width="121px"
                position="relative"
                size="small"
                className="h-[28px]"
                onChange={() => {}}
                leftImage={{
                  src: "",
                  width: 0,
                  height: 0,
                }}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              {/* New Use Case Button - Reduced by 20% */}
              <Button
                text="New Use Case"
                text_font_size="11"
                text_font_family="Johnson Text"
                text_font_weight="500"
                text_line_height="14px"
                text_text_align="center"
                text_color="#FFFFFF"
                fill_background_color="#EB1700"
                border_border="1px solid #FFFFFF"
                border_border_radius="8px"
                effect_box_shadow="0px 7.2px 12.8px rgba(0, 0, 0, 0.08)"
                leftImage={{
                  src: "/images/img_add_white.svg",
                  width: 12,
                  height: 12,
                }}
                padding="6px 8px 6px 30px"
                layout_align_self="center"
                layout_gap="0"
                layout_width="114px"
                margin="0"
                position="relative"
                variant="primary"
                size="medium"
                className="h-[26px]"
                onClick={() => {}}
                rightImage={{
                  src: "",
                  width: 0,
                  height: 0,
                }}
              />

              {/* Profile Image - Reduced by 20% */}
              <div className="w-6 h-6 rounded-full border-[0.8px] border-[#E6EFF5] shadow-[0px_5.24px_9.31px_rgba(0,0,0,0.2)] overflow-hidden">
                <img
                  src="/images/img_image.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
