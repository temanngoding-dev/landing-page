'use client'
import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-bg-panel border-2 border-line w-full max-w-md shadow-[8px_8px_0_#000] flex flex-col relative animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between border-b-2 border-line p-3">
          <h3 className="font-pixel text-[14px] text-gold">{title}</h3>
          <button 
            onClick={onClose}
            className="text-line-bright hover:text-xp transition-colors p-1"
          >
            ✕
          </button>
        </div>
        <div className="p-5 font-mono text-[13px] text-text-main leading-relaxed">
          {children}
        </div>
        <div className="p-4 border-t-2 border-line flex justify-end">
          <button 
            onClick={onClose}
            className="font-mono text-[12px] font-semibold px-[16px] py-[8px] bg-xp text-[#04140d] border-2 border-black shadow-[2px_2px_0_#000] hover:translate-x-px hover:translate-y-px hover:shadow-[1px_1px_0_#000] transition-all"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
