import { useEffect, useState } from "react"
import { Switch } from "@/components/ui/switch"

export function ThemeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const root = document.documentElement

    if (isDarkMode) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm">{isDarkMode ? "Dark" : "Light"}</span>
      <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
    </div>
  )
}
