"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

// PageTransition, route değiştiğinde içeriği yeniden key'leyerek sayfa geçiş animasyonunu tetikler.
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="page-transition" key={pathname}>
      {children}
    </div>
  );
}
