import { useState, useRef, type TouchEvent } from 'react';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
}

export default function MediaCarousel({ items }: { items: MediaItem[] }) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && current < items.length - 1) setCurrent(current + 1);
      if (diff < 0 && current > 0) setCurrent(current - 1);
    }
  };

  return (
    <div className="sm:hidden">
      <div
        className="overflow-hidden rounded-lg border border-[var(--color-border)]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {items[current].type === 'video' ? (
          <video
            controls
            muted
            playsInline
            src={items[current].src}
            className="w-full"
          />
        ) : (
          <img
            src={items[current].src}
            alt={items[current].alt || ''}
            className="w-full"
          />
        )}
      </div>
      <div className="flex justify-center gap-2 mt-3">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === current
                ? 'bg-[var(--color-accent)]'
                : 'bg-[var(--color-border-hover)]'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
