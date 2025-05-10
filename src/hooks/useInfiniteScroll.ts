import { useCallback, useEffect, useRef } from "react";

interface Options {
  root: HTMLElement | null;
  hasMore: boolean;
  loading: boolean;
  onMore: () => void;
  threshold?: number;
}

export function useInfiniteScroll({
  root,
  hasMore,
  loading,
  onMore,
  threshold = 0.1,
}: Options) {
  const observer = useRef<IntersectionObserver | null>(null);

  const sentinelaRef = useCallback(
    (node: HTMLElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && hasMore && !loading) onMore();
        },
        { root, threshold },
      );

      if (node) observer.current.observe(node);
    },
    [root, hasMore, loading, onMore, threshold],
  );

  useEffect(() => () => observer.current?.disconnect(), []);

  return sentinelaRef;
}
