import type { ReactNode } from "react";




export default function Container({ padding = false, children }: { padding?: boolean, children: ReactNode }) {
  return (
    <div className={`container mx-auto ${padding && "py-8"}`}>
      {children}
    </div>
  )
}
