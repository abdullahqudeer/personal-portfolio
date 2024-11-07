import React from "react";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      icon: "images/skills/html.png",
    },
    {
      name: "CSS",
      icon: "images/skills/css.svg",
    },
    {
      name: "JavaScript",
      icon: "images/skills/javascript.png",
    },
    {
      name: "Angular",
      icon: "images/skills/angular_full_color_logo.svg",
    },
    {
      name: "React",
      icon: "images/skills/react-icon.svg",
    },
    {
      name: ".NET Framework",
      icon: "images/skills/dot-net-framework.png",
    },
    {
      name: ".NET Core",
      icon: "images/skills/dot_net_core_logo.svg",
    },
    {
      name: "C#",
      icon: "images/skills/c_sharp_logo.png",
    },
    {
      name: "VB.NET",
      icon: "images/skills/vb_dot_net.png",
    },
    {
      name: "SignalR",
      icon: "images/skills/swimlane-azure-signalr-logo.svg",
    },
    {
      name: "SQL (SQL Server, My SQL)",
      icon: "images/skills/sql_logo.png",
    },
    {
      name: "Entity Framework",
      icon: "images/skills/entity-framework-core.png",
    },
    {
      name: "AWS",
      icon: "images/skills/amazon_web_services_logo.svg",
    },
    {
      name: "Microservices Architecture",
      icon: "images/skills/microservices_architecture.png",
    },
    {
      name: "Identity Server",
      icon: "images/skills/identityserver.webp",
    },
    {
      name: "RESTful API Design",
      icon: "images/skills/restful_api_ design.png",
    },
    {
      name: "Agile Development",
      icon: "images/skills/agile-icon.png",
    },
  ];

  return (
    <>
      <div className="pb-[250px] pt-[5rem] bg-[rgb(9,4,52)]">
        <div className="container max-w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-4">
          <div className="flex flex-wrap -mx-[16px]">
            <div className="w-full px-4">
              <div className="text-center max-w-[570px] mb-12 mx-auto">
                <h2 className="text-2xl text-white font-bold mb-4 md:text-4xl">
                  What I Bring to the Table
                </h2>
                <p className="text-[rgb(149_156_177)] font-medium text-lg leading-7">
                  Equipped with a robust toolkit of technical and soft skills,
                  driving projects to success.
                </p>
              </div>
            </div>
            <div className="w-full px-4">
              <div className="flex flex-wrap justify-center gap-4 p-8 z-10">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group relative w-72 h-72 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl p-6 flex flex-col justify-center items-center"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <image src="https://www.nicepng.com/png/detail/1-18174_vector-free-stock-clouds-svg-white-cloud-svg.png"></image>
                    </div>
                    <div className="z-10 flex flex-col items-center justify-center">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="h-[8rem] mb-4 transition-transform duration-300 group-hover:scale-110"
                      ></img>
                      <h2 className="text-2xl font-bold text-center">
                        {skill.name}
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-wrap justify-center gap-8 p-8 bg-[rgb(9,14,52)]">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group w-50 h-50 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl p-6 flex flex-col justify-center items-center"
          >

            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 mb-4 transition-transform duration-300 group-hover:scale-110"
            />


            <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 mb-2">
              {skill.name}
            </h2>

            <p className="text-gray-600 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {skill.description}
            </p>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default Skills;
