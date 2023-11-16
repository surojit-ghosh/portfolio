import { twMerge } from "tailwind-merge";

export default function Section({ children, height = "fit", className, ...props }: React.HTMLProps<HTMLDivElement> & { height?: "screen" | "fit" }) {
    return (
        <div {...props} className={twMerge(`py-20 max-w-7xl mx-auto px-[5vw] h-${height}`, className)}>
            {children}
        </div>
    );
};