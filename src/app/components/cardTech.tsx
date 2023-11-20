"use client";

import { useEffect, useState, useMemo } from "react";
import { Progress } from "@nextui-org/react";

export default function App() {
  const skills = useMemo(
    () => [
      { name: "HTML", progress: 100 },
      { name: "CSS", progress: 90 },
      { name: "JavaScript", progress: 80 },
      { name: "React", progress: 70 },
      { name: "Tailwind CSS", progress: 90 },
      { name: "TypeScript", progress: 50 },
      { name: "Next.js", progress: 80 },
      { name: "Python", progress: 15 },
    ],
    []
  );
  const [values, setValues] = useState(skills.map(() => 0));

  useEffect(() => {
    const intervals = skills.map((skill, index) => {
      return setInterval(() => {
        setValues((currentValues) => {
          const newValues = [...currentValues];
          if (newValues[index] < skill.progress) {
            newValues[index] += 1;
          }
          return newValues;
        });
      }, 500 / skill.progress);
    });

    return () => intervals.forEach(clearInterval);
  }, [skills]);

  return (
    <div className="py-4 grid grid-cols-2 gap-4 justify-items-end">
      {skills.map((skill, index) => (
        <div key={skill.name} className="mb-4 w-full justify-self-start">
          <div className="mb-1">{skill.name}</div>
          <Progress
            aria-label={`${skill.name} skill level`}
            size="md"
            value={values[index]}
            color="secondary"
            showValueLabel={true}
            className="max-w-md"
          />
        </div>
      ))}
    </div>
  );
}
