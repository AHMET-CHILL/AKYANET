export function Icon({ name, size = 24 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const paths = {
    sun: <><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" /></>,
    grid: <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><path d="M17.5 14v7M14 17.5h7" /></>,
    chart: <><path d="M4 19V9M10 19V5M16 19v-7M22 19H2" /><path d="m3 7 6-4 6 6 6-5" /></>,
    leaf: <><path d="M20.5 3.5C12 3.5 5 7.5 5 14c0 3.5 2.5 6 6 6 6.5 0 10-7 9.5-16.5Z" /><path d="M4 21c3-7 7-10 13-13" /></>,
    battery: <><rect x="3" y="6" width="17" height="12" rx="2" /><path d="M20 10h2v4h-2M7 12h4M9 10v4" /></>,
    bolt: <path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z" />,
    pipeline: <><path d="M3 7h6v4h6V7h6M5 7V4M19 7V4M5 20v-5h14v5" /><circle cx="5" cy="12" r="2" /><circle cx="19" cy="12" r="2" /></>,
    droplet: <path d="M12 2S5.5 9.2 5.5 14.2a6.5 6.5 0 0 0 13 0C18.5 9.2 12 2 12 2Z" />,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  };

  return <svg {...common}>{paths[name]}</svg>;
}

export function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 44 44" aria-hidden="true">
      <path d="M22 3 4 36h12l6-11 6 11h12L22 3Z" fill="currentColor" />
      <path d="m22 13-4.5 8H22l2.4-4.2L22 13Z" fill="#07111f" />
    </svg>
  );
}
