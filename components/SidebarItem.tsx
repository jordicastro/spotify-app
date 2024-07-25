import { LucideIcon } from "lucide-react"
import Link from "next/link";
import { twMerge } from "tailwind-merge";


interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    active?: boolean;
    href: string;
}

const SidebarItem = ({icon: Icon, label, active, href}: SidebarItemProps) => {
    return (
        <Link
            href={href}
            className={twMerge(`
                flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1
            `,
                active && "text-white"
        )}
        >
            <Icon className="w-6 h-6"/>
            <p className="truncate w-full">{label}</p>
        </Link>
    )
}

export default SidebarItem