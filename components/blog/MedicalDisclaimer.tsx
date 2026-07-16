import { ShieldAlert } from "lucide-react";

const DEFAULT_DISCLAIMER =
  "This article is for educational and informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional regarding symptoms, medications, supplements, testing, or changes to your care plan.";

export default function MedicalDisclaimer({ text }: { text?: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 md:p-6 flex gap-4">
      <ShieldAlert
        className="w-5 h-5 mt-0.5 shrink-0 text-gray-400"
        aria-hidden="true"
      />
      <p className="text-sm text-gray-600 leading-relaxed">
        <span className="font-bold text-gray-700">Medical Disclaimer: </span>
        {text ?? DEFAULT_DISCLAIMER}
      </p>
    </div>
  );
}
