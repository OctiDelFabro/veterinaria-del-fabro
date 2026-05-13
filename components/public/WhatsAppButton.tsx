import { businessData } from "@/lib/business-data";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  message: string;
  children?: React.ReactNode;
  className?: string;
};

export function WhatsAppButton({ message, children, className = "" }: WhatsAppButtonProps) {
  const url = buildWhatsAppUrl(businessData.whatsappInternational, message);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-md bg-veterinarian-violet px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-veterinarian-violetDark ${className}`.trim()}
    >
      {children ?? "Consultar por WhatsApp"}
    </a>
  );
}
