import { Skill } from "./Skill";

export function Skills() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 justify-center gap-x-12"
      data-content
      id="skills"
    >
      <div className="skills__area">
        <h3 className="text-lg text-center mb-6">Frontend Developer</h3>

        <div className="flex justify-center gap-x-12">
          <div className="grid items-start gap-y-4">
            <Skill level={3} skill="ReactJS" />
            <Skill level={3} skill="NextJS" />
            <Skill level={2} skill="Stiches" />
            
            <Skill level={3} skill="Typescript" />

          </div>

          <div className="grid items-start gap-y-4">
            <Skill level={3} skill="React Native" />
            <Skill level={3} skill="Expo" />
            <Skill level={3} skill="Styled Components" />
            <Skill level={2} skill="Firebase" />





          </div>
        </div>
      </div>

      <div className="skills__area">
        <h3 className="text-lg text-center mb-6">Backend Developer</h3>

        <div className="flex justify-center gap-x-12">
          <div className="grid items-start gap-y-4">
            <Skill level={1} skill="PHP" />
            <Skill level={1} skill="MySQL" />
            <Skill level={1} skill="NoSQL" />
          </div>

          <div className="grid items-start gap-y-4">
            <Skill level={2} skill="Node Js" />
            {/* <Skill level={1} skill="Docker" /> */}
            {/* <Skill level={1} skill="GraphQL" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
