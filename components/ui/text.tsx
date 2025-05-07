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
export const SubText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("text-sm text-gray-600 font-medium", className)}>
      {children}
    </p>
  );
};