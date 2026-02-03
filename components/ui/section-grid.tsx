import { GridCard } from "@/components/ui/grid-card";
import { cn } from "@/lib/utils";

interface SectionItem {
  name: string;
  image: string;
  link: string;
}

interface SectionGridProps {
  title: string;
  items: SectionItem[];
  className?: string;
  gridClassName?: string;
  cardClassName?: string;
  headingClassName?: string;
  as?: "h1" | "h2" | "h3";
}

export function SectionGrid({ title, items, className, gridClassName, cardClassName, headingClassName, as: Tag = "h2" }: SectionGridProps) {
  return (
    <div className={cn("container mx-auto px-4 py-8", className)}>
      <Tag className={cn("mb-8 text-2xl font-bold", headingClassName)}>{title}</Tag>
      <div className={cn("grid grid-cols-2 gap-4 xl:grid-cols-4", gridClassName)}>
        {items.map((item) => (
          <GridCard key={item.name} title={item.name} image={item.image} link={item.link} className={cardClassName} />
        ))}
      </div>
    </div>
  );
}
