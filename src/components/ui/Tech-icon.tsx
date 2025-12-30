import type { SimpleIcon } from "simple-icons"
interface TechIconProps {
    icon: SimpleIcon
    name: string
    size: number
    color: string
}

const TechIcon = ({ icon, name, size, color }: TechIconProps) => {
    return (
        <div className="relative group flex justify-center">
            {/* Icon */}
            <svg
                viewBox="0 0 24 24"
                width={size}
                height={size}
                fill="currentColor"
                className="transition-transform duration-200 group-hover:scale-110"
                style={{ color }}
            >
                <path d={icon.path} />
            </svg>

            {/* Tooltip */}
            <div className="
          pointer-events-none absolute -top-9
          rounded-md bg-accent-foreground px-2 py-1
          text-xs text-background opacity-0
          transition-opacity duration-200
          group-hover:opacity-100
          whitespace-nowrap
        ">
                {name}
            </div>
        </div>
    );
};

export default TechIcon;
