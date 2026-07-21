import Image from "next/image";

interface ArticleImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  priority?: boolean;
}

export default function ArticleImage({
  src,
  alt,
  width,
  height,
  caption,
  priority = false,
}: ArticleImageProps) {
  return (
    <figure className="my-8">
      <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-md border border-gray-100 bg-white">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(min-width: 768px) 420px, 90vw"
          className="w-full h-auto"
          loading={priority ? undefined : "lazy"}
          priority={priority}
        />
      </div>
      {caption && (
        <figcaption className="text-sm text-gray-500 text-center max-w-md mx-auto mt-3 leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
