import React from "react";
import Image from "next/image";

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "small",
  className,
}) => {
  const avatarSize = {
    small: 20,
    medium: 24,
    large: 32,
  }[size];

  const classes = {
    small: "w-5 h-5",
    medium: "w-6 h-6",
    large: "w-8 h-8",
  }[size];

  return (
    <div className={`rounded-full overflow-hidden ${classes} ${className}`}>
      <Image src={src} alt={alt} width={avatarSize} height={avatarSize} />
    </div>
  );
};

export default Avatar;
