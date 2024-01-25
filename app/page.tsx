import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ArticleItemBig from "@/components/view/ArticleItem/Big";
import ArticleItem from "@/components/view/ArticleItem/Small";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const articles = [
  {
    tags: ["Featured"],
    title: "The US President wants half of all new vehicles...",
  },
  {
    tags: ["News"],
    title: "The US President wants half of all new vehicles...",
  },
  {
    tags: ["News"],
    title: "The US President wants half of all new vehicles...",
  },
];

const bigArticles = [
  {
    image: "/images/2.png",
    title:
      "The US President wants half of all new vehicles to be zero emissions by 2030",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare sit elit consectetur aliquam...",
  },
  {
    image: "/images/3.png",
    title:
      "The US President wants half of all new vehicles to be zero emissions by 2030",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare sit elit consectetur aliquam...",
  },
  {
    image: "/images/4.png",
    title:
      "The US President wants half of all new vehicles to be zero emissions by 2030",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare sit elit consectetur aliquam...",
  },
];

export default function Home() {
  return (
    <>
      <article className="flex flex-col items-start gap-y-16 my-6 mx-auto max-w-7xl px-10 lg:px-0">
        <div className="flex items-start flex-col lg:flex-row gap-y-6 lg:gap-y-0">
          <div className="flex flex-col w-full lg:w-2/3 items-start gap-4">
            <div className="flex items-center gap-x-2">
              <span className="text-primary-800 font-semibold hover:text-primary-900 cursor-pointer">
                NEWS
              </span>
              <div
                style={{
                  height: "5px",
                  width: "5px",
                }}
                className="rounded-full bg-primary-800"
              ></div>
              <span className="text-gray-500">September 21, 2021</span>
            </div>
            <h1 className="text-5xl font-semibold">
              Biden sets electric vehicle target in drive to cut emissions
            </h1>
            <div className="flex flex-col gap-y-2 w-full mt-10">
              <div className="h-[448px] w-full relative">
                <Image
                  layout="fill"
                  src="/images/1.webp"
                  alt="image"
                  className="object-cover"
                />
              </div>
              <span className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>
            <p className="text-gray-700 text-lg mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat
              faucibus id vitae suspendisse. Ipsum erat malesuada sit faucibus
              faucibus massa. Mauris et morbi vitae habitant sit. Maecenas
              pretium in consectetur velit auctor. Porttitor tellus ut pretium,
              scelerisque orci erat. Etiam imperdiet ridiculus eu tincidunt. Vel
              dui, pulvinar vivamus lorem risus.
              <br />
              <br />
              Bibendum aliquet adipiscing sed interdum. Arcu consequat fames
              blandit nisi. Vulputate dignissim tempus duis ultrices. Arcu sed
              porttitor morbi lobortis mattis pellentesque. Dui quam sed eu
              ultrices ut nullam. Maecenas tortor auctor eros erat volutpat
              sapien dui pretium.
              <br />
              <br />
              Hac sed diam tristique in consequat in suspendisse habitant. Et
              mauris venenatis posuere auctor tortor, placerat. Quisque
              tincidunt euismod dictum neque, massa nisi. Sagittis, dictum nibh
              bibendum cursus neque, nunc molestie. Odio viverra sagittis,
              platea nibh eget. Egestas a cras bibendum amet, mi magna cursus.
              Ante suscipit felis vitae amet.
            </p>
          </div>
          <div className="flex flex-col w-full lg:w-1/3 gap-y-6 px-0 lg:px-6 sticky top-2">
            <h2 className="text-xl font-bold">Related Articles</h2>
            {articles.map((article, index) => (
              <>
                <ArticleItem key={index} {...article} />
                {index !== articles.length - 1 && (
                  <Separator orientation="horizontal" className="w-full" />
                )}
              </>
            ))}
            <Button
              variant="link"
              className="w-fit flex items-center gap-x-2 text-primary-500"
            >
              View More <ArrowRight size={12} className="stroke-primary-500" />
            </Button>
          </div>
        </div>
      </article>
      <div className="bg-gray-50 p-16">
        <div className="wrapper flex flex-col gap-y-4">
          <h1 className="text-2xl font-bold">Other Articles You May Like</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {bigArticles.map((article, index) => (
              <ArticleItemBig key={index} {...article} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
