import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    children,
    className,
    disabled,
    type = "button"
    , ...props
}, ref) => {
  return (
    <button
        type={type}
        className={twMerge(`
            w-full rounded-full bg-indigo-500 border border-transparent px-3 py-2 tracking-wider disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-75 transition
            `,
            className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
    >
        {children}        
    </button>
  )
})

Button.displayName = "Button";

export default Button;