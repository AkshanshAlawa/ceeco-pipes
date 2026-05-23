import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/91XXXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="hidden group-hover:flex items-center bg-brand-navy text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg whitespace-nowrap">
        Chat with us
      </span>
      <span className="relative w-14 h-14 rounded-full bg-brand-green flex items-center justify-center text-white shadow-cta animate-pulse-ring hover:scale-105 transition-transform">
        <MessageCircle className="w-7 h-7" fill="currentColor" />
      </span>
    </a>
  );
}
