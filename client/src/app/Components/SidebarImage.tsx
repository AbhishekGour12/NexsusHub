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
        className={`hidden  min-[768px]:flex w-1/2 h-full justify-center items-center bg-[] ${
          className || ""
        }`}
      >
        <Image
          src={src}
          alt={alt}
          width={330}
          height={50}
          className="object-cover  h-[70%] w-[50%] "
        />
      </div>
    );
};

export default SidebarImage;
