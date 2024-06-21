import React, { ReactNode } from 'react'

function layout({children}: {children: React.ReactNode}) {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center">
        <div className="mt-12">{children}</div>
    </div>
  )
}

export default layout
