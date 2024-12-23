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
import { MONTHS } from "../date_utils";

const EVENTS: IEventCol[] = [
  {
    name: "Postes",
    events: [
      {
        title: "Développeur Java (alternance)",
        subtitle: "BeBlocks, Clermont-Ferrand (63)",
        startDate: new Date("2024-09"),
        endDate: new Date("2025-08"),
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
        startDate: new Date("2024-06"),
        endDate: new Date("2024-08"),
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
        startDate: new Date("2022-09"),
        endDate: new Date("2025-08"),
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
        startDate: new Date("2024-01"),
        endDate: new Date("2024-04"),
        content: [
          "Cybersécurité",
          "Développement mobile / jeux-vidéo",
          "Forage de données (IA)",
        ],
      },
      {
        title: "Baccalauréat Général",
        subtitle: "Lycée Hippolyte Carnot, Roanne (42)",
        startDate: new Date("2019-09"),
        endDate: new Date("2022-07"),
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
  startDate: Date;
  endDate: Date;
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
                <ul className="flex justify-center flex-wrap gap-8">
                  {eventCol.events.map((event, index) => (
                    <li key={event.title}>
                      <Card
                        className={cn(
                          "bg-accent/40",
                          index == 0 ? "border-primary border-2" : null
                        )}
                      >
                        <CardHeader>
                          <ThemedText variant="muted">
                            {MONTHS[event.startDate.getMonth()] +
                              " " +
                              event.startDate.getFullYear() +
                              " - " +
                              MONTHS[event.endDate.getMonth()] +
                              " " +
                              event.endDate.getFullYear()}
                          </ThemedText>
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
                            <ul className="flex gap-4 flex-wrap">
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
