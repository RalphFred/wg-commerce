import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface DashboardCardProps {
  icon: ReactNode
  label: string
  value: string | number
  variant?: "purple" | "white"
  className?: string
}

export function StatsCard({ icon, label, value, variant = "white", className }: DashboardCardProps) {
  return (
    <div
      className={cn(
        "p-4 rounded-2xl flex flex-col items-start grow",
        variant === "purple" ? "bg-purple-500 text-white" : "bg-white text-gray-800",
        className,
      )}
    >
      <div
        className={cn(
          "w-10 h-10 rounded-xl flex items-center justify-center mb-3",
          variant === "purple" ? "bg-purple-400" : "bg-purple-500",
        )}
      >
        {icon}
      </div>
      <div className="mt-auto">
        <p className="text-xs font-medium opacity-80">{label}</p>
        <p className={cn("text-sm font-semibold mt-1", variant === "purple" ? "" : "text-gray-900")}>{value}</p>
      </div>
    </div>
  )
}
