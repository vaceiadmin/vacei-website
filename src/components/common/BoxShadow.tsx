import React from 'react'
import { cn } from '@/lib/utils'

interface BoxShadowProps {
  children: React.ReactNode
  className?: string
}

const BoxShadow = ({ children, className }: BoxShadowProps) => {
  return (
    <div className={cn(
      "shadow-[0_0_50px_-12px_rgba(0,0,0,0.2)] rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10",
      className
    )}>
      {children}
    </div>
  )
}

export default BoxShadow
