import React, { useState } from 'react'

const TechCube3D = () => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-[#151312] border border-white/5 overflow-hidden flex items-center justify-center group shadow-inner">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none bg-radial from-accent-orange/10 via-transparent to-transparent opacity-60" />

      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#151312] z-10 transition-opacity duration-500">
          <div className="w-10 h-10 rounded-full border-2 border-accent-orange/30 border-t-accent-orange animate-spin" />
          <span className="text-[11px] font-mono text-content-secondary uppercase tracking-widest">
            Loading 3D Hologram Globe...
          </span>
        </div>
      )}

      {/* Local Spline 3D Scene View */}
      <iframe
        src="/spline.html"
        onLoad={() => setIsLoading(false)}
        className="w-full h-full border-none pointer-events-auto rounded-2xl"
        title="Interactive 3D Hologram Globe"
      />

      {/* Bottom Floating Status Pill */}
      <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/70 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-accent-lime animate-pulse" />
        <span>HOLOGRAM GLOBE • 3D</span>
      </div>
    </div>
  )
}

export default TechCube3D
