import { cn } from "@/lib/utils";

export const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <h1 className={cn("text-3xl  font-bold text-shop_dark_green capitalize tracking-wide font-sans", className)}>{children}</h1>;
};
