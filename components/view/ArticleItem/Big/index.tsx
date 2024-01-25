import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export type BigArticleItemProps = {
  image: string;
  title: string;
  description: string;
};

const ArticleItemBig = ({ title, description, image }: BigArticleItemProps) => {
  return (
    <div className="flex flex-col items-start gap-y-2 p-4 hover:bg-gray-100">
      <div className="h-64 w-full relative">
        <Image layout="fill" src={image} alt="image" className="object-cover" />
      </div>
      <h3 className="text-base font-bold">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default ArticleItemBig;
