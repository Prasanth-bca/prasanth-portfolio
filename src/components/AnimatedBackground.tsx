export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden grain">
      <div
        className="bg-blob bg-blob-1"
        style={{
          width: 600,
          height: 600,
          top: "-10%",
          left: "-10%",
          background: "radial-gradient(circle, oklch(0.78 0.13 245), transparent 70%)",
        }}
      />
      <div
        className="bg-blob bg-blob-2"
        style={{
          width: 700,
          height: 700,
          top: "20%",
          right: "-15%",
          background: "radial-gradient(circle, oklch(0.82 0.1 220), transparent 70%)",
        }}
      />
      <div
        className="bg-blob bg-blob-3"
        style={{
          width: 550,
          height: 550,
          bottom: "-15%",
          left: "20%",
          background: "radial-gradient(circle, oklch(0.85 0.09 270), transparent 70%)",
        }}
      />
    </div>
  );
}
