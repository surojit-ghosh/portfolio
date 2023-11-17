import { twMerge } from "tailwind-merge";

export default function Section({ children, height = "fit", className, ...props }: React.HTMLProps<HTMLDivElement> & { height?: "screen" | "fit" }) {
    return (
        <div {...props} className={`app-section py-10 md:py-20 w-full mx-auto px-5 [&:nth-child(odd)]:bg-dark-gray-2 h-${height}`}>
            <div className={twMerge("max-w-7xl w-full mx-auto h-full", className)}>
                {children}
            </div>
        </div>);
};