import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CustomIcon, IconType } from "../components/custom_icon";
import { cn } from "@/lib/utils";
import Legend from "../components/Legend";
import Section from "../components/Section";
import Text from "../components/Text";
import { forwardRef, HTMLAttributes, Ref } from "react";

const SkillSection = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ ...props }, ref) => {
    interface ISkill {
      icon: IconType;
      name: string;
      isPrefered?: boolean;
    }

    interface ISkillCol {
      name: string;
      skills: ISkill[];
    }

    const skills: ISkillCol[] = [
      {
        name: "Frontend",
        skills: [
          { icon: "react", name: "React" },
          { icon: "angular", name: "Angular", isPrefered: true },
          { icon: "php", name: "Php" },
        ],
      },
      {
        name: "Backend",
        skills: [
          { icon: "cs", name: "C#", isPrefered: true },
          { icon: "springboot", name: "Spring boot", isPrefered: true },
          { icon: "elastic", name: "Elastic search" },
        ],
      },
      {
        name: "3D",
        skills: [
          { icon: "unity", name: "Unity" },
          { icon: "unreal", name: "Unreal engine", isPrefered: true },
        ],
      },
      {
        name: "Outils",
        skills: [
          { icon: "git", name: "Git", isPrefered: true },
          { icon: "docker", name: "Docker" },
          { icon: "sonar", name: "SonarQube", isPrefered: true },
          { icon: "jira", name: "Jira" },
        ],
      },
    ];

    return (
      <Section title="Compétences" {...props} ref={ref as Ref<HTMLElement>}>
        <Legend text="Ce que je préfère" />
        <ul className="flex justify-center flex-wrap gap-8">
          {skills.map((skillCol) => (
            <li key={skillCol.name}>
              <Card className="bg-accent/20">
                <CardHeader>
                  <Text variant="h4">{skillCol.name}</Text>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-col gap-4">
                    {skillCol.skills.map((skill) => (
                      <li key={skill.name}>
                        <Card
                          className={cn(
                            "bg-accent/40",
                            skill.isPrefered ? "border-2 border-primary" : null
                          )}
                        >
                          <CardContent className="flex items-center gap-4 m-0 py-2">
                            <CustomIcon icon={skill.icon} size={40} />
                            <Text>{skill.name}</Text>
                          </CardContent>
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
  }
);

SkillSection.displayName = "SkillSection";
export default SkillSection;
