import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { CustomIcon, IconType } from "../../components/ui/custom_icon";
import Text from "../../components/ui/Text";
import Section from "../../components/ui/Section";
import { forwardRef, HTMLAttributes, Ref } from "react";
import { cn } from "@/lib/utils";

const HomeSection = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    interface IButton {
      icon: IconType;
      link: string;
    }

    const buttons: IButton[] = [
      { icon: "linkedin", link: "A" },
      { icon: "github", link: "B" },
      { icon: "resume", link: "C" },
      { icon: "mail", link: "D" },
    ];

    return (
      <Section
        className={cn(
          "flex-row justify-center items-center flex-wrap gap-8",
          className
        )}
        {...props}
        ref={ref as Ref<HTMLDivElement>}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col gap-2">
            <Text className="text-center" variant="h1">
              Anthony RICHARD
            </Text>
            <Text className="text-center" variant="h2">
              Étudiant en BUT Informatique
            </Text>
            <Text className="text-center" variant="lead">
              je suis actuellement en alternance en tant que développeur Java !
            </Text>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ul className="flex justify-center items-center gap-2">
              {buttons.map((button) => (
                <li key={button.link}>
                  <Link
                    className={buttonVariants({
                      variant: "ghost",
                      size: "icon",
                    })}
                    href={button.link}
                  >
                    <CustomIcon icon={button.icon} />
                  </Link>
                </li>
              ))}
            </ul>
            <Link className={buttonVariants()} href={""}>
              Contactez-moi !
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Image
            className="h-40 w-40 object-cover border-2 border-primary rounded-lg"
            src={"/me.jpg"}
            alt="Une photo de moi"
            height={999999}
            width={999999}
          />
          <div className="flex justify-center items-center gap-1">
            <CustomIcon className="text-primary" icon="location" size={25} />
            <Text variant="muted">Clermont-Ferrand</Text>
          </div>
        </div>
      </Section>
    );
  }
);

HomeSection.displayName = "HomeSection";
export default HomeSection;
