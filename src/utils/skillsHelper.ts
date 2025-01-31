import { skills } from "../content/skills";

export function getSkillsByCategory() {
    return skills.reduce((acc, skill) => {
        if (!acc[skill?.category]) {
            acc[skill?.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<string, { name: string; level: string }[]>);
}
