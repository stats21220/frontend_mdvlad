import Image from "next/image";
import { useState } from "react";
import { IMyImage } from "./myImage.props";
export const MyImage = ({ defaultImageSrc, src, ...props }: IMyImage) => {
  const [srcImage, setSrcImage] = useState(src);

  return (
    <Image
      {...props}
      src={srcImage}
      onError={() => setSrcImage(defaultImageSrc)}
    />
  );
};
