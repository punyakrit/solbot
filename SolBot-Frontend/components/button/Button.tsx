import React, { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const buttonClass = cva("border  px-6 rounded-full font-medium h-9", {
  variants: {
    variant: {
      primary: " bg-lime-400 text-neutral-950 border-lime-400",
      secondary: "border-white/60 text-white bg-transparent",
    },
    size:{
      sm:'h-6'
    }
  },
});

function Button(
  props: {
    size? : "sm";
    variant: "primary" | "secondary";
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {

  const {variant, size, className, ...otherProps} = props
  return (
    <button
      className={buttonClass({
        variant,
        size,
        className,
      })}
      {...otherProps}
    />
  );
}

export default Button;
