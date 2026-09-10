import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  message?: string;
  phoneNumber?: string;
  className?: string;
  floating?: boolean;
}

export function WhatsAppButton({ 
  message = "Hello PrimeHomes Minna, I am interested in exploring some properties.",
  phoneNumber = "2348000000000",
  className = "",
  floating = false
}: WhatsAppButtonProps) {
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  if (floating) {
    return (
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    );
  }

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#20b858] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      <span>WhatsApp Agent</span>
    </a>
  );
}
