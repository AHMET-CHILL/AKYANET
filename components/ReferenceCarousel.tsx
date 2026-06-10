"use client";

import { MouseEvent, PointerEvent, TouchEvent, useEffect, useRef, useState } from "react";

type Reference = {
  slug: string;
  name: string;
  logo: string;
  projectHref?: string;
};

// ReferenceCarousel, logoları otomatik kaydırır ve kullanıcıya mouse/touch ile sürükleme kontrolü verir.
export default function ReferenceCarousel({ references }: { references: Reference[] }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const lastFrameRef = useRef<number | null>(null);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Otomatik kaydırma, çoğaltılmış listenin bir grubunu tamamlayınca görünmeden başa sarar.
  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const animate = (time: number) => {
      if (lastFrameRef.current === null) {
        lastFrameRef.current = time;
      }

      const elapsed = Math.min(time - lastFrameRef.current, 32);
      lastFrameRef.current = time;

      if (!isDraggingRef.current) {
        viewport.scrollLeft += elapsed * 0.045;

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
      if (resumeTimerRef.current !== null) {
        clearTimeout(resumeTimerRef.current);
      }
      lastFrameRef.current = null;
    };
  }, []);

  // handlePointerDown, masaüstünde mouse ile sürükleme başlangıç konumunu saklar.
  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;

    // Dokunmatik cihazlarda tarayıcının doğal ve momentumlu yatay kaydırması kullanılır.
    if (!viewport || event.pointerType !== "mouse") {
      return;
    }

    viewport.setPointerCapture(event.pointerId);
    dragStartXRef.current = event.clientX;
    dragStartScrollRef.current = viewport.scrollLeft;
    hasDraggedRef.current = false;
    isDraggingRef.current = true;
    setIsDragging(true);
  };

  // handlePointerMove, yalnızca mouse hareketini yatay kaydırma mesafesine dönüştürür.
  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;

    if (!viewport || event.pointerType !== "mouse" || !isDraggingRef.current) {
      return;
    }

    event.preventDefault();
    if (Math.abs(event.clientX - dragStartXRef.current) > 6) {
      hasDraggedRef.current = true;
    }
    viewport.scrollLeft = dragStartScrollRef.current - (event.clientX - dragStartXRef.current);
  };

  // stopDragging, pointer bırakıldığında otomatik kaydırmanın yeniden başlamasını sağlar.
  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;

    if (event.pointerType !== "mouse") {
      return;
    }

    if (viewport?.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId);
    }

    isDraggingRef.current = false;
    setIsDragging(false);
  };

  // handleTouchStart, kullanıcı parmağıyla kaydırırken otomatik hareketin doğal kaydırmayla yarışmasını önler.
  const handleTouchStart = () => {
    if (resumeTimerRef.current !== null) {
      clearTimeout(resumeTimerRef.current);
    }

    isDraggingRef.current = true;
  };

  // handleLogoClick, mouse ile sürükleme tamamlandığında istem dışı sayfa yönlendirmesini engeller.
  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (hasDraggedRef.current) {
      event.preventDefault();
      hasDraggedRef.current = false;
    }
  };

  // handleTouchEnd, mobil momentum kaydırmasına zaman tanıdıktan sonra otomatik döngüyü yeniden başlatır.
  const handleTouchEnd = (_event: TouchEvent<HTMLDivElement>) => {
    if (resumeTimerRef.current !== null) {
      clearTimeout(resumeTimerRef.current);
    }

    resumeTimerRef.current = setTimeout(() => {
      isDraggingRef.current = false;
    }, 900);
  };

  return (
    <div
      aria-label="Referans kurumları"
      className={`reference-carousel overflow-x-auto ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
      onMouseLeave={() => {
        isDraggingRef.current = false;
        setIsDragging(false);
      }}
      onPointerCancel={stopDragging}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onTouchCancel={handleTouchEnd}
      onTouchEnd={handleTouchEnd}
      onTouchStart={handleTouchStart}
      ref={viewportRef}
    >
      <div className="flex w-max select-none gap-16 pr-16 md:gap-24 md:pr-24">
        {[0, 1, 2].map((groupIndex) =>
          references.map((reference) => (
            <a
              aria-hidden={groupIndex > 0}
              className="flex h-28 w-[240px] shrink-0 items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-metallic-gold md:h-32 md:w-[300px]"
              href={reference.projectHref ?? `/referanslar#${reference.slug}`}
              key={`${groupIndex}-${reference.name}`}
              onClick={handleLogoClick}
              tabIndex={groupIndex === 0 ? 0 : -1}
            >
              <img
                alt={groupIndex === 0 ? reference.name : ""}
                className={`pointer-events-none object-contain ${
                  reference.logo === "/reference-turk-telekom.svg"
                    ? "h-auto w-[88%] max-w-[280px]"
                    : "max-h-20 max-w-full md:max-h-24"
                }`}
                draggable={false}
                src={reference.logo}
              />
            </a>
          )),
        )}
      </div>
    </div>
  );
}
