import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CustomIcon, IconType } from "../components/custom_icon";
import { Section } from "../components/section";
import { ThemedText } from "../components/themed_text";
import { cn } from "@/lib/utils";

const SKILLS: ICol[] = [
  {
    name: "Frontend",
    skills: [
      { icon: "php", name: "Php" },
      { icon: "react", name: "React" },
      { icon: "angular", name: "Angular", isPrefered: true },
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
      { icon: "jira", name: "Jira" },
      { icon: "docker", name: "Docker" },
      { icon: "sonar", name: "SonarQube", isPrefered: true },
    ],
  },
];

interface ICol {
  name: string;
  skills: ISkill[];
}

interface ISkill {
  icon: IconType;
  name: string;
  isPrefered?: boolean;
}

export const SkillSection = () => {
  return (
    <Section title="Compétences">
      <div className="flex justify-center items-center gap-2">
        <div className="block h-6 w-6 bg-accent/40 border-2 border-primary rounded-md"></div>
        <ThemedText variant="muted">Ce que je préfère</ThemedText>
      </div>
      <ul className="flex flex-col items-center gap-8">
        {SKILLS.map((col) => (
          <li key={col.name}>
            <Card className="bg-accent/20">
              <CardHeader>
                <ThemedText variant="h4">{col.name}</ThemedText>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col items-start gap-4">
                  {col.skills.map((skill) => (
                    <li key={skill.name}>
                      <Card
                        className={cn(
                          "bg-accent/40",
                          skill.isPrefered ? "border-2 border-primary" : null
                        )}
                      >
                        <CardContent className="flex items-center gap-4 m-0 py-2">
                          <CustomIcon icon={skill.icon} size={40} />
                          <ThemedText>{skill.name}</ThemedText>
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
};
