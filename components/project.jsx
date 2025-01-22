import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Web-based cadastral database system",
    description:
      "Developed a real-time, interactive web-based cadastral database. This open-source application, built with MongoDB, Next.js, and Mapbox, allows users to efficiently visualize, manage, and cadastral data.",
    image: "/landg.png",
    tags: ["React", "Mapbox GL JS", "PostGIS", "Node.js"],
    liveLink: "https://land-guard.vercel.app/map",
    githubLink: "https://github.com/Muzammil206/LandGuard-",
  },
  {
    title: "st-data4 ( satallite data visualiation platform)",
    description:
      "A platform for exploring, visualizing, and downloading satellite data, with a special focus on Nigeria and global datasets. This tool provides access to high-resolution imagery, including data from two Nigerian satellites.",
    image: "/app.png",
    tags: ["next.js", "Ersi ArcGis javascript api",  "postgress", 'Supabase'],
    liveLink: "https://st-data4.vercel.app",
    githubLink: "https://github.com/Muzammil206/st-data4",
  },
  {
    title: "Interactive Flood Risk Map",
    description:
      "Built an interactive flood risk assessment tool using ArcGIS JavaScript API and React, integrating real-time weather data and historical flood records.",
    image: "/stdata.png",
    tags: ["ArcGIS JS API", "React", "Node.js", "PostgreSQL"],
    liveLink: "https://flood-risk-map.example.com",
    githubLink: "https://github.com/yourusername/flood-risk-map",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-48">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} layout="fill" objectFit="cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 flex items-center"
                  >
                    <Github size={16} className="mr-1" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

