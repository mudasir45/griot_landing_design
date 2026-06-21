import Image, { type ImageProps } from "next/image";

type SectionImageProps = Omit<ImageProps, "alt"> & {
  alt: string;
  rounded?: "lg" | "xl" | "2xl" | "3xl";
};

const roundedMap = {
  lg: "rounded-2xl",
  xl: "rounded-3xl",
  "2xl": "rounded-[20px]",
  "3xl": "rounded-[28px]",
};

export default function SectionImage({
  alt,
  rounded = "2xl",
  className = "",
  ...props
}: SectionImageProps) {
  return (
    <Image
      alt={alt}
      className={`object-cover ${roundedMap[rounded]} ${className}`}
      {...props}
    />
  );
}
