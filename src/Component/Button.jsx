import { Link } from "react-router-dom";

const variantClasses = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  ghost: "btn btn-ghost",
  outline: "btn btn-outline",
};

export default function Button({
  to,
  href,
  external = false,
  variant = "primary",
  className = "",
  children,
  type = "button",
  ...props
}) {
  const classes = `${variantClasses[variant] || variantClasses.primary} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return <button type={type} className={classes} {...props}>{children}</button>;
}
