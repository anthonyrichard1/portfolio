import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CustomIcon, IconType } from "../components/custom_icon";
import { Section } from "../components/section";
import { ThemedText } from "../components/themed_text";
import { MONTHS } from "../date_utils";

const PROJECTS: IProject[] = [
  {
    name: "In English Please",
    description:
      "Plateforme d'apprentissage ludique de l'anglais pour les étudiants",
    startDate: new Date("2023-09"),
    endDate: new Date("2023-12"),
    cover: "cover.png",
    type: "web",
    stack: ["git", "docker", "php", "js"],
  },
  {
    name: "Elpy",
    description: "Toolbox pour aider les étudiants en mobilité à l'étranger",
    startDate: new Date("2024-01"),
    endDate: new Date("2024-04"),
    cover: "cover.png",
    type: "mobile",
    stack: ["git", "java"],
  },
  {
    name: "POK",
    description: "Jeu de tir dans un monde post-apocalyptique",
    startDate: new Date("2021-08"),
    endDate: new Date("2022-07"),
    cover: "cover.png",
    type: "videogame",
    stack: ["unity", "cs"],
  },
];

type ProjectType = "videogame" | "mobile" | "web" | "app";

function getProjectTypeString(type: ProjectType) {
  switch (type) {
    case "videogame":
      return "Jeu";
    case "mobile":
      return "Application mobile";
    case "web":
      return "Site internet";
    case "app":
      return "Application";
  }
}

interface IProject {
  name: string;
  type: ProjectType;
  description: string;
  startDate: Date;
  endDate: Date;
  cover: string;
  stack: IconType[];
}

export const ProjectSection = () => {
  return (
    <Section title="Projets">
      <ul className="flex justify-center gap-8 flex-wrap">
        {PROJECTS.map((project) => (
          <li key={project.name}>
            <Card className="bg-accent/20">
              <CardHeader>
                <div className="flex justify-between flex-wrap">
                  <ThemedText variant="muted">
                    {MONTHS[project.startDate.getMonth()] +
                      " " +
                      project.startDate.getFullYear() +
                      " - " +
                      MONTHS[project.endDate.getMonth()] +
                      " " +
                      project.endDate.getFullYear()}
                  </ThemedText>
                  <ThemedText className="text-primary" variant="muted">
                    {getProjectTypeString(project.type)}
                  </ThemedText>
                </div>
                {/* image */}
              </CardHeader>
              <CardContent>
                <ThemedText variant="h4">{project.name}</ThemedText>
                <ThemedText variant="muted">{project.description}</ThemedText>
              </CardContent>
              <CardFooter>
                <ul className="flex justify-center items-center gap-4 flex-wrap">
                  {project.stack.map((elt) => (
                    <li key={elt}>
                      <CustomIcon icon={elt} />
                    </li>
                  ))}
                </ul>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
};
