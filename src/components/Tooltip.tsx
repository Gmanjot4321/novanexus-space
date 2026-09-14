import React, { useState, useRef, useEffect } from 'react';

interface TooltipProps {
  content: React.ReactNode;
  title?: string;
  badge?: string;
  children: React.ReactElement;
  side?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  delayMs?: number;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  title,
  badge,
  children,
  side = 'top',
  className = '',
  delayMs = 120,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delayMs);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Compute positioning classes
  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  }[side];

  // Triangle arrow positioning
  const arrowClasses = {
    top: 'top-full left-1/2 -translate-x-1/2 border-t-slate-900 border-x-transparent border-b-transparent',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-slate-900 border-x-transparent border-t-transparent',
    left: 'left-full top-1/2 -translate-y-1/2 border-l-slate-900 border-y-transparent border-r-transparent',
    right: 'right-full top-1/2 -translate-y-1/2 border-r-slate-900 border-y-transparent border-l-transparent',
  }[side];

  const clonedChild = React.cloneElement(children, {
    onMouseEnter: (e: React.MouseEvent) => {
      showTooltip();
      if (children.props.onMouseEnter) children.props.onMouseEnter(e);
    },
    onMouseLeave: (e: React.MouseEvent) => {
      hideTooltip();
      if (children.props.onMouseLeave) children.props.onMouseLeave(e);
    },
    onFocus: (e: React.FocusEvent) => {
      showTooltip();
      if (children.props.onFocus) children.props.onFocus(e);
    },
    onBlur: (e: React.FocusEvent) => {
      hideTooltip();
      if (children.props.onBlur) children.props.onBlur(e);
    },
  });

  return (
    <div className={`relative inline-flex items-center ${className}`}>
      {clonedChild}

      {isVisible && (
        <div
          role="tooltip"
          className={`absolute z-50 pointer-events-none w-max max-w-xs sm:max-w-sm p-2.5 rounded-xl bg-slate-950/95 backdrop-blur-xl border border-cyan-400/40 shadow-2xl shadow-black/90 text-left animate-in fade-in zoom-in-95 duration-150 ${positionClasses}`}
        >
          {/* Header with Title & Badge if available */}
          {(title || badge) && (
            <div className="flex items-center justify-between gap-2 mb-1 pb-1 border-b border-white/10">
              {title && (
                <span className="text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wider">
                  {title}
                </span>
              )}
              {badge && (
                <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {badge}
                </span>
              )}
            </div>
          )}

          {/* Body Content */}
          <div className="text-[10.5px] font-mono text-slate-200 leading-relaxed">
            {content}
          </div>

          {/* Arrow */}
          <div
            className={`absolute w-0 h-0 border-4 ${arrowClasses}`}
            style={{ filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.5))' }}
          />
        </div>
      )}
    </div>
  );
};
