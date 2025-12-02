import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ArticleCardProps {
  title: string;
  authorName: string;
  authorAvatarUrl?: string;
  publishDate: string;
  readingTime: string;
  description: string;
  imageUrl?: string;
  slug: string;
}

export function ArticleCard({
  title,
  authorName,
  authorAvatarUrl,
  publishDate,
  readingTime,
  description,
  imageUrl,
  slug,
}: ArticleCardProps) {
  return (
    <Link href={`/article/${slug}`} className="block group">
      <div className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={authorAvatarUrl} alt={authorName} />
              <AvatarFallback>{authorName.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium text-muted-foreground">
              {authorName}
            </span>
          </div>
          <h2 className="text-xl font-bold mb-2 group-hover:underline">
            {title}
          </h2>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center text-xs text-muted-foreground">
            <span>{publishDate}</span>
            <span className="mx-1">•</span>
            <span>{readingTime} read</span>
          </div>
        </div>
        {imageUrl && (
          <div className="w-full sm:w-40 flex-shrink-0">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-32 object-cover rounded-md"
            />
          </div>
        )}
      </div>
    </Link>
  );
}