import { useRef, useCallback, useEffect, useState } from 'react'

interface LazyImageProps { 
  src: string,
  className?: string, 
  loadInitially?: boolean, 
  observerOptions?: IntersectionObserverInit,
  width?: number | string,
  height?: number | string
}

const LazyImage = ({ src, className, width, height, loadInitially = false, observerOptions = { root: null, rootMargin: '110px 0px' }}: LazyImageProps) => {
  const observerRef = useRef<IntersectionObserver>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(loadInitially);

  console.log(observerOptions)

  const observerCallback = useCallback<IntersectionObserverCallback>(
    (entries) => {
      if (entries[0].isIntersecting) {
        observerRef?.current?.disconnect();
        setIsLoaded(true);
      }
    },
    [observerRef]
  );

  useEffect(() => {
    if (loadInitially) 
      return;
    if ('loading' in HTMLImageElement.prototype) {
      setIsLoaded(true);
      return;
    }
    observerRef.current = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    if(imgRef.current){
      observerRef.current.observe(imgRef.current);
    }
    return () => {
      observerRef?.current?.disconnect();
    };
  }, []);

  return (
    <img
      src={isLoaded ? src : ''}
      ref={imgRef}
      className={className}
      loading={loadInitially ? undefined : 'lazy'}
      width={width}
      height={height}
    />
  );
};

export default LazyImage;