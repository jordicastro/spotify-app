import { Search } from "lucide-react";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
    className,
    type,
    disabled,
    ...props
}, ref) => {
    return (
        <div
            className="flex justify-center items-center gap-x-4 w-full rounded-full bg-neutral-800 border border-transparent p-3 text-sm placeholder:text-neutral-500 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-white "
        >
            <Search className="w-4 h-4 text-neutral-400" />
            <input
                type={type}
                className={twMerge(`
                    w-full bg-neutral-800 focus:outline-none
                `,
                    className
                )}
                disabled={disabled}
                ref={ref}
                {...props}
            />
        </div>
    )
}) 

Input.displayName = "Input";

export default Input