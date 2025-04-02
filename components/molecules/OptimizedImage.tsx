"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps extends Omit<ImageProps, "onLoad"> {
  lowQualitySrc?: string
}

export default function OptimizedImage({ src, alt, className, lowQualitySrc, ...props }: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  // Use a low quality placeholder or blur placeholder
  const placeholder = lowQualitySrc ? "empty" : "blur"
  const blurDataURL = !lowQualitySrc
    ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+"
    : undefined

  return (
    <div className="relative overflow-hidden">
      {lowQualitySrc && !isLoaded && (
        <Image
          src={lowQualitySrc || "/placeholder.svg"}
          alt=""
          className={cn("absolute inset-0 w-full h-full", className)}
          style={{ filter: "blur(10px)" }}
          {...props}
        />
      )}
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        className={cn("image-fade-in", isLoaded && "loaded", className)}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        onLoadingComplete={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  )
}

