import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HomeContent`.
 */
export type HomeContentProps = SliceComponentProps<Content.HomeContentSlice>;

/**
 * Component for "HomeContent" Slices.
 */
const HomeContent = ({ slice }: HomeContentProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for home_content (variation: {slice.variation})
      Slices
    </section>
  );
};

export default HomeContent;
