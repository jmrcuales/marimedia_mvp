import { Quote } from "lucide-react";

export default function EditorialQuote({ text }: { text: string }) {
  return (
    <blockquote className="relative bg-[#FFF5F7] border-l-4 border-[#D6216E] rounded-2xl py-7 px-6 md:px-8 my-8">
      <Quote
        className="w-7 h-7 text-[#F06292] mb-3"
        aria-hidden="true"
        strokeWidth={1.75}
      />
      <p className="text-xl md:text-2xl font-medium text-[#222222] leading-snug">
        {text}
      </p>
    </blockquote>
  );
}
