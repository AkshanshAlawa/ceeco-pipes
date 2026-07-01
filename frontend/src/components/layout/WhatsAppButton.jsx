import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

/**
 * WhatsApp floating button — retains its native green color (per user).
 */
export default function WhatsAppButton() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-button"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="hidden group-hover:flex items-center bg-black text-white text-sm font-semibold px-4 py-2 shadow-lg whitespace-nowrap uppercase tracking-wider">
        Chat with us
      </span>
      <span
        className="relative w-14 h-14 rounded-full flex items-center justify-center text-white shadow-cta animate-pulse-ring hover:scale-105 transition-transform"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle className="w-7 h-7" fill="currentColor" />
      </span>
    </a>
  );
}
