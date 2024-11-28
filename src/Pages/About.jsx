import React from "react";
import profile from "../assets/assetsImage/obaedpasportsize.jpg";
function About() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Git", "Tailwind CSS"];
  const projects = [
    { title: "Project 1", description: "A web app for task management.", link: "#" },
    { title: "Project 2", description: "An e-commerce platform for small businesses.", link: "#" },
    { title: "Project 3", description: "A portfolio website showcasing creative designs.", link: "#" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <img
            src={profile }
            alt="Developer"
            className="w-32 h-32 mx-auto rounded-full"
          />
          <h1 className="text-3xl font-bold mt-4">Abu Obaed</h1>
          <p className="text-gray-600 mt-2">Fontend Developer</p>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">About Me</h2>
          <p className="mt-2 text-gray-700">
            I am a passionate Full Stack Developer with experience in building scalable web applications. I love learning new
            technologies and solving challenging problems through code. When I’m not coding, I enjoy exploring new coffee
            shops and hiking in the mountains.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-md text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Projects</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-md shadow-sm">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-500 mt-2 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project &rarr;
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="mt-2 text-gray-700">
            Feel free to reach out to me for any collaborations or freelance opportunities.
          </p>
          <div className="mt-4">
            <p>Email: <a href="mailto:abuobaedashik@gmail.com" className="text-blue-500">abuobaedashik@gmail.com</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/johndoe" className="text-blue-500">linkedin.com/in/obaed</a></p>
            <p>GitHub: <a href="https://github.com/abuobaed" className="text-blue-500">github.com/johndoe</a></p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
