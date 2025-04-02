"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "@/components/molecules/Modal";

type GalleryItemProps = {
  src: string;
  alt: string;
};

export const GalleryItem: React.FC<GalleryItemProps> = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="cursor-pointer rounded-lg" onClick={() => setIsOpen(true)}>
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={600}
          height={400}
          className="object-contain w-full h-full rounded-lg"
        />
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="relative w-full h-full flex items-center justify-center rounded-lg">
            <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={1200}
            height={800}
            className="object-contain max-h-[80vh] w-auto rounded-lg"
            />
        </div>
    </Modal>
    </>
  );
};
