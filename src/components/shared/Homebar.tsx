import { MapPin } from "lucide-react";

export default function Homebar() {
  return (
    <div className="wrapper flex items-center justify-between py-4">
      <div>Hello 👋</div>
      <div className="flex items-center gap-1 text-sm text-purple-600">
        <MapPin className="w-5 h-5" /> Lagos, Nigeria
      </div>
    </div>
  );
}
