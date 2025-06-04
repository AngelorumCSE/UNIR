import React, { useContext } from "react";
import { Link, UNSAFE_RouteContext } from "react-router-dom";

export function SafeLink({ to, children, ...props }) {
  const ctx = useContext(UNSAFE_RouteContext) as any;
  const safe = ctx && typeof ctx.basename !== "undefined";

  if (!safe) {
    return (
      <a href={to} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
}
