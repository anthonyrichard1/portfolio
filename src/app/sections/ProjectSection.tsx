import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CustomIcon, IconType } from "../components/custom_icon";
import { MONTHS } from "../date_utils";
import Section from "../components/Section";
import Text from "../components/Text";
import { forwardRef, HTMLAttributes, Ref } from "react";

const ProjectSection = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ ...props }, ref) => {
    type ProjectType = "videogame" | "mobile" | "web";

    interface IProject {
      name: string;
      type: ProjectType;
      description: string;
      startDate: Date;
      endDate: Date;
      cover: string;
      stack: IconType[];
    }

    const projects: IProject[] = [
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
        description:
          "Toolbox pour aider les étudiants en mobilité à l'étranger",
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

    function getProjectIcon(type: ProjectType): IconType {
      switch (type) {
        case "videogame":
          return "videogame";
        case "mobile":
          return "mobile";
        case "web":
          return "web";
      }
    }

    return (
      <Section title="Projets" ref={ref as Ref<HTMLElement>} {...props}>
        <ul className="flex justify-center gap-8 flex-wrap">
          {projects.map((project) => (
            <li key={project.name}>
              <Card className="bg-accent/20">
                <CardHeader>
                  <div className="flex justify-between flex-wrap">
                    <Text variant="muted">
                      {MONTHS[project.startDate.getMonth()] +
                        " " +
                        project.startDate.getFullYear() +
                        " - " +
                        MONTHS[project.endDate.getMonth()] +
                        " " +
                        project.endDate.getFullYear()}
                    </Text>
                    <CustomIcon
                      className="text-primary"
                      icon={getProjectIcon(project.type)}
                      size={40}
                    />
                  </div>
                  {/* image */}
                </CardHeader>
                <CardContent>
                  <CardTitle>{project.name}</CardTitle>
                  <Text variant="muted">{project.description}</Text>
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
  }
);

ProjectSection.displayName = "ProjectSection";
export default ProjectSection;
