import { TooltipProvider } from "@/components/ui/tooltip"

export default function TooltipProviderWrapper({ children }) {
  return (
    <TooltipProvider delayDuration={200}>
      {children}
    </TooltipProvider>
  )
}