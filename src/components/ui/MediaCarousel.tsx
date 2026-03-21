import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
}

export default function MediaCarousel({ items }: { items: MediaItem[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selected, setSelected] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <div className="sm:hidden">
      <div className="relative">
        {/* Carousel viewport */}
        <div ref={emblaRef} className="overflow-hidden rounded-lg border border-[var(--color-border)]">
          <div className="flex">
            {items.map((item, i) => (
              <div key={i} className="flex-[0_0_100%] min-w-0">
                {/* Fixed aspect ratio container */}
                <div className="relative w-full" style={{ paddingBottom: '177%' }}>
                  {item.type === 'video' ? (
                    <video
                      controls
                      muted
                      playsInline
                      src={item.src}
                      className="absolute inset-0 w-full h-full object-contain bg-black"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.alt || ''}
                      className="absolute inset-0 w-full h-full object-contain bg-black"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prev/Next arrows */}
        {canScrollPrev && (
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[var(--color-bg-primary)]/80 text-[var(--color-text-primary)] flex items-center justify-center"
            aria-label="Previous slide"
          >
            &#8249;
          </button>
        )}
        {canScrollNext && (
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[var(--color-bg-primary)]/80 text-[var(--color-text-primary)] flex items-center justify-center"
            aria-label="Next slide"
          >
            &#8250;
          </button>
        )}
      </div>

      {/* Dots + swipe hint */}
      <div className="flex flex-col items-center gap-2 mt-3">
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === selected
                  ? 'bg-[var(--color-accent)]'
                  : 'bg-[var(--color-border-hover)]'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        {selected === 0 && (
          <p className="text-xs text-[var(--color-text-muted)] animate-pulse">
            Swipe to see more &rarr;
          </p>
        )}
      </div>
    </div>
  );
}
