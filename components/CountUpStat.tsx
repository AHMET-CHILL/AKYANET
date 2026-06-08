"use client";

import { useEffect, useRef, useState } from "react";

type CountUpStatProps = {
  target: number;
  prefix?: string;
  suffix?: string;
};

// easeOutCubic, sayımın başlangıçta hızlı ve hedefe yaklaşırken yumuşak ilerlemesini sağlar.
function easeOutCubic(progress: number) {
  return 1 - Math.pow(1 - progress, 3);
}

// CountUpStat, görünür olduğunda hedef değere yalnızca bir kez animasyonlu olarak ulaşır.
export default function CountUpStat({ target, prefix = "", suffix = "" }: CountUpStatProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef(false);
  // Sunucu çıktısında hedef değer gösterilir; JavaScript yüklenemezse metrikler 0 olarak kalmaz.
  const [value, setValue] = useState(target);

  // useEffect, öğenin viewport'a girişini izler ve requestAnimationFrame sayımını başlatır.
  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    // animateCount, sayacı sıfırlayıp hedef değere ease-out geçişiyle ulaştırır.
    const animateCount = () => {
      if (hasAnimatedRef.current) {
        return;
      }

      hasAnimatedRef.current = true;
      setValue(0);

      const duration = 1400;
      const startTime = performance.now();

      // animateValue, geçen süreyi ease-out ilerleme oranına çevirerek ekrandaki değeri günceller.
      const animateValue = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const nextValue = Math.round(target * easeOutCubic(progress));

        setValue(nextValue);

        if (progress < 1) {
          requestAnimationFrame(animateValue);
        }
      };

      requestAnimationFrame(animateValue);
    };

    // Eski tarayıcılarda IntersectionObserver yoksa animasyon doğrudan başlatılır.
    if (!("IntersectionObserver" in window)) {
      animateCount();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimatedRef.current) {
          return;
        }

        observer.disconnect();
        animateCount();
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [target]);

  return (
    <span
      className="font-display-lg text-5xl font-extrabold tracking-normal text-metallic-gold md:text-6xl"
      data-prefix={prefix}
      data-suffix={suffix}
      data-target={target}
      ref={elementRef}
    >
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
