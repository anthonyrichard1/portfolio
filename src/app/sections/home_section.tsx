import Image from "next/image";
import { Section } from "../components/section";
import { ThemedText } from "../components/themed_text";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { CustomIcon, IconType } from "../components/custom_icon";

const BUTTONS: IButton[] = [
  { icon: "linkedin", link: "A" },
  { icon: "github", link: "B" },
  { icon: "resume", link: "C" },
  { icon: "mail", link: "D" },
];

interface IButton {
  icon: IconType;
  link: string;
}

export const HomeSection = () => {
  return (
    <Section className="gap-8">
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-col gap-2">
          <ThemedText className="text-center" variant="h1">
            Anthony RICHARD
          </ThemedText>
          <ThemedText className="text-center" variant="h2">
            Étudiant en BUT Informatique
          </ThemedText>
          <ThemedText className="text-center" variant="lead">
            je suis actuellement en alternance en tant que développeur Java !
          </ThemedText>
        </div>
        <div className="flex flex-col items-center gap-2">
          <ul className="flex justify-center items-center gap-2">
            {BUTTONS.map((button) => (
              <li key={button.link}>
                <Link
                  className={buttonVariants({ variant: "ghost", size: "icon" })}
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
          <ThemedText variant="muted">Clermont-Ferrand</ThemedText>
        </div>
      </div>
    </Section>
  );
};
