interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  textColor?: string;
  className?: string;
  onClick?: () => void;
}
