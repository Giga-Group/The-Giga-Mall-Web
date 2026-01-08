'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  quality?: number;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
  onError?: () => void;
}

export default function OptimizedImage({
  src,
  alt,
  priority = false,
  quality = 75,
  fill,
  width,
  height,
  sizes,
  className,
  style,
  onError,
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false);

  if (imageError && onError) {
    onError();
    return null;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      priority={priority}
      loading={priority ? 'eager' : 'lazy'}
      quality={quality}
      sizes={sizes}
      className={className}
      style={style}
      onError={() => setImageError(true)}
    />
  );
}

