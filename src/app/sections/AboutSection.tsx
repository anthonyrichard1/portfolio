import { forwardRef, HTMLAttributes, Ref } from "react";
import Text from "../components/Text";
import Section from "../components/Section";

const AboutSection = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ ...props }, ref) => {
    return (
      <Section title="À Propos" {...props} ref={ref as Ref<HTMLElement>}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          eaque ipsum fuga labore nam quia ad. Nobis cum tempore aspernatur sed
          magni minus cupiditate suscipit recusandae assumenda cumque rem odio
          debitis, sint, fugit deleniti quasi molestias eveniet. Impedit aperiam
          illum perspiciatis. Quam molestias nihil vitae ipsum dolorum eligendi
          ipsa totam?
        </Text>
      </Section>
    );
  }
);

AboutSection.displayName = "AboutSection";
export default AboutSection;
