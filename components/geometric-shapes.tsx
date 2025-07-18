"use client"

export function GeometricShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-blue-500/20 dark:border-blue-400/20 rounded-full animate-spin-slow" />
      <div className="absolute top-40 right-20 w-24 h-24 border border-purple-500/20 dark:border-purple-400/20 rotate-45 animate-pulse" />
      <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-400/10 dark:to-blue-400/10 rounded-lg animate-bounce-slow" />
      <div className="absolute bottom-20 right-40 w-16 h-16 border-2 border-dashed border-pink-500/20 dark:border-pink-400/20 rounded-full animate-spin-reverse" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-5" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-400/10 dark:to-purple-400/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-600/10 to-pink-600/10 dark:from-purple-400/10 dark:to-pink-400/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
    </div>
  )
}
