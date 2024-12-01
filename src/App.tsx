import { ThemeSwitch } from "@/components/ThemeSwitch"

export function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6 bg-white font-sans text-black dark:bg-black dark:text-white">
      <h1 className="text-4xl font-bold underline">Switch</h1>

      <ThemeSwitch />
    </div>
  )
}
