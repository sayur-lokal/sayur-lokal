'use client';
import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

interface ImageWithFallbackProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  fallbackSrc = '/images/placeholder_640_640.svg',
  alt,
  ...rest
}) => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Reset error state when src changes
    setError(false);
    
    // Check if src is a string (valid image path)
    if (typeof src === 'string') {
      setImgSrc(src);
    } else {
      // If src is not a string, use fallback
      setError(true);
    }
  }, [src]);

  // Handle image load error
  const handleError = () => {
    setError(true);
  };

  // If there's an error or no imgSrc, use fallback
  const finalSrc = error ? fallbackSrc : (imgSrc || fallbackSrc);

  return (
    <Image
      {...rest}
      src={finalSrc}
      alt={alt || "Product image"}
      onError={handleError}
    />
  );
};

export default ImageWithFallback;