import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  description: string;
  icon: any; //LucideIcon: may cause error
  iconColor?: string;
  bgColor?: string;
}

export default function Heading({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
}: HeadingProps) {
  return (
    <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-3">
      <div className={cn("p-2 w-fit rounded-md", bgColor)}>
        <Icon className={cn("w-10 h-10", iconColor)} />
      </div>
      <div>
        <h2 className="text-3xl font-bold">
          {title}
          <p className="text-sm text-muted-foreground ml-1">{description}</p>
        </h2>
      </div>
    </div>
  );
}
