import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import React from "react";

export type ArticleItemProps = {
  tags: string[];
  title: string;
};

const ArticleItem = ({ tags, title }: ArticleItemProps) => {
  return (
    <div className="flex items-start gap-x-2 hover:bg-gray-50 p-2 cursor-pointer overflow-hidden w-full">
      <div className="w-20 h-20 bg-gray-200 rounded-md flex flex-shrink-0" />
      <div className="flex flex-col gap-y-2">
        <div className="flex flex-wrap gap-x-2 items-center">
          {tags.map((tag) => (
            <Badge
              className={cn(
                tag === "Featured"
                  ? "bg-[#DDFFF7] px-2 text-primary-800"
                  : "px-0"
              )}
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
        <h1 className="text-xs font-semibold">{title}</h1>
      </div>
    </div>
  );
};

export default ArticleItem;
