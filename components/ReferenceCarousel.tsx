"use client";

import { PointerEvent, useEffect, useRef, useState } from "react";

type Reference = {
  name: string;
  logo: string;
};

// ReferenceCarousel, logoları otomatik kaydırır ve kullanıcıya mouse/touch ile sürükleme kontrolü verir.
export default function ReferenceCarousel({ references }: { references: Reference[] }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const lastFrameRef = useRef<number | null>(null);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Otomatik kaydırma, çoğaltılmış listenin yarısına gelince görünmeden başa sarar.
  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const animate = (time: number) => {
      if (lastFrameRef.current === null) {
        lastFrameRef.current = time;
      }

      const elapsed = Math.min(time - lastFrameRef.current, 32);
      lastFrameRef.current = time;

      if (!isPaused && !isDragging) {
        viewport.scrollLeft += elapsed * 0.035;

        if (viewport.scrollLeft >= viewport.scrollWidth / 3) {
          viewport.scrollLeft -= viewport.scrollWidth / 3;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
      lastFrameRef.current = null;
    };
  }, [isDragging, isPaused]);

  // handlePointerDown, sürükleme başlangıç koordinatını ve mevcut kaydırma konumunu saklar.
  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    viewport.setPointerCapture(event.pointerId);
    dragStartXRef.current = event.clientX;
    dragStartScrollRef.current = viewport.scrollLeft;
    setIsDragging(true);
  };

  // handlePointerMove, pointer hareketini yatay kaydırma mesafesine dönüştürür.
  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;

    if (!viewport || !isDragging) {
      return;
    }

    viewport.scrollLeft = dragStartScrollRef.current - (event.clientX - dragStartXRef.current);
  };

  // stopDragging, pointer bırakıldığında otomatik kaydırmanın yeniden başlamasını sağlar.
  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;

    if (viewport?.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }

    setIsDragging(false);
  };

  return (
    <div
      aria-label="Referans kurumları"
      className={`reference-carousel overflow-x-auto ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setIsDragging(false);
      }}
      onPointerCancel={stopDragging}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      ref={viewportRef}
    >
      <div className="flex w-max select-none gap-16 pr-16 md:gap-24 md:pr-24">
        {[0, 1, 2].map((groupIndex) =>
          references.map((reference) => (
            <div
              aria-hidden={groupIndex > 0}
              className="flex h-28 w-[240px] shrink-0 items-center justify-center md:h-32 md:w-[300px]"
              key={`${groupIndex}-${reference.name}`}
            >
              <img
                alt={groupIndex === 0 ? reference.name : ""}
                className="pointer-events-none max-h-20 max-w-full object-contain md:max-h-24"
                draggable={false}
                src={reference.logo}
              />
            </div>
          )),
        )}
      </div>
    </div>
  );
}
