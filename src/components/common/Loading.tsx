import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingProps {
  variant?: 'spinner' | 'dots' | 'pulse' | 'skeleton';
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

export const Loading: React.FC<LoadingProps> = ({
  variant = 'spinner',
  size = 'md',
  text,
  className = '',
}) => {
  const sizes = {
    sm: {
      icon: 16,
      height: 'h-4',
      width: 'w-4',
      text: 'text-sm',
    },
    md: {
      icon: 24,
      height: 'h-6',
      width: 'w-6',
      text: 'text-base',
    },
    lg: {
      icon: 32,
      height: 'h-8',
      width: 'w-8',
      text: 'text-lg',
    },
  };

  const renderSpinner = () => (
    <div className={`flex items-center gap-3 ${className}`}>
      <Loader2 
        size={sizes[size].icon} 
        className="animate-spin text-blue-500" 
      />
      {text && <span className={`${sizes[size].text} text-gray-600`}>{text}</span>}
    </div>
  );

  const renderDots = () => (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className={`${sizes[size].height} ${sizes[size].width} rounded-full bg-blue-500 animate-bounce`} />
      <div className={`${sizes[size].height} ${sizes[size].width} rounded-full bg-blue-500 animate-bounce [animation-delay:0.2s]`} />
      <div className={`${sizes[size].height} ${sizes[size].width} rounded-full bg-blue-500 animate-bounce [animation-delay:0.4s]`} />
      {text && <span className={`${sizes[size].text} text-gray-600 ml-2`}>{text}</span>}
    </div>
  );

  const renderPulse = () => (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`${sizes[size].height} ${sizes[size].width} rounded-full bg-blue-500 animate-pulse`} />
      {text && <span className={`${sizes[size].text} text-gray-600`}>{text}</span>}
    </div>
  );

  const renderSkeleton = () => (
    <div className={`space-y-3 ${className}`}>
      <div className="h-4 bg-gray-200 rounded animate-pulse" />
      <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
      <div className="h-4 bg-gray-200 rounded animate-pulse w-4/6" />
    </div>
  );

  switch (variant) {
    case 'dots':
      return renderDots();
    case 'pulse':
      return renderPulse();
    case 'skeleton':
      return renderSkeleton();
    default:
      return renderSpinner();
  }
};

// Usage examples:
export const LoadingExamples: React.FC = () => (
  <div className="space-y-8 p-4">
    {/* Spinner variants */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Spinner</h3>
      <div className="space-y-2">
        <Loading variant="spinner" size="sm" text="Loading..." />
        <Loading variant="spinner" size="md" text="Processing..." />
        <Loading variant="spinner" size="lg" text="Please wait..." />
      </div>
    </div>

    {/* Dots variants */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Dots</h3>
      <div className="space-y-2">
        <Loading variant="dots" size="sm" />
        <Loading variant="dots" size="md" text="Loading..." />
        <Loading variant="dots" size="lg" />
      </div>
    </div>

    {/* Pulse variants */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Pulse</h3>
      <div className="space-y-2">
        <Loading variant="pulse" size="sm" />
        <Loading variant="pulse" size="md" text="Loading..." />
        <Loading variant="pulse" size="lg" />
      </div>
    </div>

    {/* Skeleton variant */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Skeleton</h3>
      <Loading variant="skeleton" />
    </div>
  </div>
);