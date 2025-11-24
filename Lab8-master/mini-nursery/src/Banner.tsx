import React from 'react'

type BannerProps = {
  children: React.ReactNode
}

export default function Banner({ children }: BannerProps) {
  return (
    <div className="bg-light p-4 rounded mb-4">
      {children}
    </div>
  )
}
