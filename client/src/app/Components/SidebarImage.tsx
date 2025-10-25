"use client";
import Image from 'next/image';
import React from 'react'

interface SidebarImageProps{
    src: string;
    alt: string;
    className?: string;
}

const SidebarImage: React.FC<SidebarImageProps> = ({src, alt, className}) => {
    return (
      <div
        className={`w-full md:w-1/2 md:h-full flex justify-center bg-[#F9F9F9] ${
          className || ""
        }`}
      >
        <Image
          src={src}
          alt={alt}
          width={380}
          height={200}
          className="object-cover"
        />
      </div>
    );
};

export default SidebarImage;
