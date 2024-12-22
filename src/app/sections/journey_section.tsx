import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Legend } from "../components/Legend";
import { Section } from "../components/section";
import { ThemedText } from "../components/themed_text";
import { cn } from "@/lib/utils";
import { CustomIcon, IconType } from "../components/custom_icon";

const EVENTS: IEventCol[] = [
  {
    name: "Postes",
    events: [
      {
        title: "Développeur Java (alternance)",
        subtitle: "BeBlocks, Clermont-Ferrand (63)",
        date: "Septembre 2024 - Août 2025",
        content: [
          "Conception / développement",
          "Méthodes agiles",
          "CQRS / Event sourcing",
        ],
        stack: ["springboot", "elastic", "git", "docker", "jira"],
      },
      {
        title: "Développeur mobile (stage)",
        subtitle: "BeYs Trusted Solution, Clermont-Ferrand (63)",
        date: "Juin 2024 - Août 2024",
        content: ["Conception / développement", "Méthodes agiles"],
        stack: ["java", "cs", "git", "docker", "jira"],
      },
    ],
  },
  {
    name: "Études",
    events: [
      {
        title: "BUT Informatique",
        subtitle: "UCA, Aubière (63)",
        date: "Septembre 2022 - Août 2025",
        content: [
          "Développement web / mobile",
          "Administration réseau / BDD",
          "Patrons de conception / d'architecture",
          "Méthodes agiles",
        ],
      },
      {
        title: "Semestre d'étude au Canada",
        subtitle: "UQAC, Saguenay (CA)",
        date: "Janvier 2024 - Avril 2024",
        content: [
          "Cybersécurité",
          "Développement mobile / jeux-vidéo",
          "Forage de données (IA)",
        ],
      },
      {
        title: "Baccalauréat Général",
        subtitle: "Lycée Hippolyte Carnot, Roanne (42)",
        date: "Septembre 2019 - Juillet 2022",
        content: [
          "Développement web / mobile",
          "Administration réseau / BDD",
          "Patrons de conception / d'architecture",
          "Méthodes agiles",
        ],
      },
    ],
  },
];

interface IEventCol {
  name: string;
  events: IEvent[];
}

interface IEvent {
  title: string;
  subtitle: string;
  date: string;
  content: string[];
  stack?: IconType[];
}

export const JourneySection = () => {
  return (
    <Section title="Parcours">
      <Legend text="Derniers évènements" />
      <ul className="flex flex-col items-center flex-wrap gap-8">
        {EVENTS.map((eventCol) => (
          <li key={eventCol.name}>
            <Card className="bg-accent/20">
              <CardHeader>
                <ThemedText variant="h4">{eventCol.name}</ThemedText>
              </CardHeader>
              <CardContent>
                <ul className="flex justify-center items-center flex-wrap gap-8">
                  {eventCol.events.map((event, index) => (
                    <li key={event.title}>
                      <Card
                        className={cn(
                          "bg-accent/40",
                          index == 0 ? "border-primary border-2" : null
                        )}
                      >
                        <CardHeader>
                          <ThemedText variant="muted">{event.date}</ThemedText>
                          <ThemedText variant="h4">{event.title}</ThemedText>
                          <ThemedText variant="muted">
                            {event.subtitle}
                          </ThemedText>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc pl-4">
                            {event.content.map((elt) => (
                              <li key={elt}>{elt}</li>
                            ))}
                          </ul>
                        </CardContent>
                        {event.stack && event.stack.length != 0 ? (
                          <CardFooter>
                            <ul className="flex justify-center items-center gap-4 flex-wrap">
                              {event.stack?.map((elt) => (
                                <li key={elt}>
                                  <CustomIcon icon={elt} size={30} />
                                </li>
                              ))}
                            </ul>
                          </CardFooter>
                        ) : null}
                      </Card>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
};
