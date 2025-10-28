import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const searchClasses = cva(
  'relative inline-flex items-center transition-all duration-200 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500',
  {
    variants: {
      size: {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
);

const SearchView = ({
  // Required parameters with defaults
  placeholder = "Search use case, owner, ID…",
  text_font_size = "14",
  text_font_family = "Johnson Text",
  text_font_weight = "400",
  text_line_height = "19px",
  text_text_align = "left",
  text_color = "#0f172ab2",
  fill_background_color = "#ffffff",
  border_border = "1 solid #e5e7eb",
  border_border_radius = "12px",
  effect_box_shadow = "0px 2px 10px #00000014",
  
  // Optional parameters (no defaults)
  layout_gap,
  layout_width,
  padding,
  position,
  
  // Standard React props
  size,
  className,
  value,
  onChange,
  onFocus,
  onBlur,
  leftImage,
  rightImage,
  disabled = false,
  ...props
}) => {
  const [searchValue, setSearchValue] = useState(value || '');

  // Safe validation for optional parameters
  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap?.trim() !== '';
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidGap ? `gap-[${layout_gap}]` : '',
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Build container styles
  const containerStyles = {
    backgroundColor: fill_background_color,
    border: border_border?.replace(/(\d+)\s+solid\s+/, '$1px solid '),
    borderRadius: border_border_radius,
    boxShadow: effect_box_shadow,
  };

  // Build input styles
  const inputStyles = {
    fontSize: `${text_font_size}px`,
    fontFamily: text_font_family,
    fontWeight: text_font_weight,
    lineHeight: text_line_height,
    textAlign: text_text_align,
    color: text_color,
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    width: '100%',
  };

  const handleChange = (event) => {
    const newValue = event?.target?.value;
    setSearchValue(newValue);
    if (typeof onChange === 'function') {
      onChange(event);
    }
  };

  return (
    <div
      style={containerStyles}
      className={twMerge(
        searchClasses({ size }),
        optionalClasses,
        'px-3 py-2',
        className
      )}
    >
      {leftImage && (
        <img 
          src={leftImage?.src} 
          alt="" 
          className="mr-2 flex-shrink-0" 
          style={{ width: `${leftImage?.width}px`, height: `${leftImage?.height}px` }}
        />
      )}
      <input
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        style={inputStyles}
        className="flex-1 min-w-0"
        {...props}
      />
      {rightImage && (
        <img 
          src={rightImage?.src} 
          alt="" 
          className="ml-2 flex-shrink-0" 
          style={{ width: `${rightImage?.width}px`, height: `${rightImage?.height}px` }}
        />
      )}
    </div>
  );
};

export default SearchView;