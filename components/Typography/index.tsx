// components/Typography.tsx
import React from "react";

const Typography: React.FC<TypographyProps> = ({
  variant,
  textColor = "text-white",
  children,
  className,
  onClick,
  ...props
}) => {
  const textStyle = () => {
    switch (variant) {
      case "h1":
        return `text-4xl ${textColor}`;
      case "h2":
        return `text-3xl ${textColor}`;
      case "h3":
        return `text-2xl ${textColor}`;
      case "h4":
        return `text-xl ${textColor}`;
      case "h5":
        return `text-lg ${textColor}`;
      case "h6":
        return `text-base ${textColor}`;
      case "p":
        return `text-base ${textColor}`;
      default:
        return `text-base ${textColor}`;
    }
  };

  const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement(variant, props, children);

  return (
    <Heading
      onClick={onClick}
      className={`${textStyle()} ${className}`}
      {...props}
    >
      {children}
    </Heading>
  );
};

export default Typography;
