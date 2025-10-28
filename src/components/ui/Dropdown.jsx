import React, { useState, useRef, useEffect } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const dropdownClasses = cva(
  'relative inline-block transition-all duration-200',
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

const Dropdown = ({
  // Required parameters with defaults
  placeholder = "Region : All Regions",
  text_font_size = "12",
  text_font_family = "Inter",
  text_font_weight = "400",
  text_line_height = "15px",
  text_text_align = "left",
  text_color = "#0f172a",
  fill_background_color = "#ffffff",
  border_border = "0 solid #e5e7eb",
  border_border_radius = "10px",
  
  // Optional parameters (no defaults)
  layout_gap,
  layout_width,
  padding,
  position,
  
  // Standard React props
  size,
  className,
  options = [],
  value,
  onChange,
  disabled = false,
  leftImage,
  rightImage,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || placeholder);
  const dropdownRef = useRef(null);

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

  // Build button styles
  const buttonStyles = {
    fontSize: `${text_font_size}px`,
    fontFamily: text_font_family,
    fontWeight: text_font_weight,
    lineHeight: text_line_height,
    textAlign: text_text_align,
    color: text_color,
    backgroundColor: fill_background_color,
    border: border_border?.replace(/(\d+)\s+solid\s+/, '$1px solid '),
    borderRadius: border_border_radius,
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef?.current && !dropdownRef?.current?.contains(event?.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (option) => {
    setSelectedValue(option?.label || option);
    setIsOpen(false);
    if (typeof onChange === 'function') {
      onChange(option);
    }
  };

  // Default options if none provided
  const defaultOptions = [
    { label: 'All Regions', value: 'all' },
    { label: 'North America', value: 'na' },
    { label: 'Europe', value: 'eu' },
    { label: 'Asia Pacific', value: 'ap' },
  ];

  const dropdownOptions = options?.length > 0 ? options : defaultOptions;

  return (
    <div ref={dropdownRef} className={twMerge(dropdownClasses({ size }), optionalClasses, className)}>
      <button
        type="button"
        onClick={handleToggle}
        disabled={disabled}
        style={buttonStyles}
        className={twMerge(
          'w-full flex items-center justify-between px-3 py-2 cursor-pointer hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
          disabled && 'opacity-50 cursor-not-allowed'
        )}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        {...props}
      >
        <div className="flex items-center flex-1">
          {leftImage && (
            <img 
              src={leftImage?.src} 
              alt="" 
              className="mr-2 flex-shrink-0" 
              style={{ width: `${leftImage?.width}px`, height: `${leftImage?.height}px` }}
            />
          )}
          <span className="truncate">{selectedValue}</span>
        </div>
        {rightImage && (
          <img 
            src={rightImage?.src} 
            alt="" 
            className={twMerge('ml-2 flex-shrink-0 transition-transform duration-200', isOpen && 'rotate-180')} 
            style={{ width: `${rightImage?.width}px`, height: `${rightImage?.height}px` }}
          />
        )}
      </button>
      {isOpen && (
        <div 
          className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto"
          role="listbox"
        >
          {dropdownOptions?.map((option, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSelect(option)}
              className="w-full px-3 py-2 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none first:rounded-t-lg last:rounded-b-lg"
              role="option"
              aria-selected={selectedValue === (option?.label || option)}
            >
              {option?.label || option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;