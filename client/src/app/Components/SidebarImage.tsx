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
        className={`hidden lg:flex w-1/2 h-full justify-center items-center bg-[#F9F9F9] ${
          className || ""
        }`}
      >
        <Image
          src={src}
          alt={alt}
          width={330}
          height={100}
          className="object-cover"
        />
      </div>
    );
};

export default SidebarImage;
