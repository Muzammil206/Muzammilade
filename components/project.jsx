import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "WebGIS Platform for Urban Planning",
    description:
      "Developed a comprehensive WebGIS platform using React, Mapbox GL JS, and PostGIS to visualize and analyze urban development data for city planners.",
    image: "/placeholder.svg",
    tags: ["React", "Mapbox GL JS", "PostGIS", "Node.js"],
    liveLink: "https://urban-planning-webgis.example.com",
    githubLink: "https://github.com/yourusername/urban-planning-webgis",
  },
  {
    title: "Geospatial Data Processing Pipeline",
    description:
      "Created an automated pipeline using Python and GDAL to process and analyze large-scale satellite imagery for agricultural monitoring.",
    image: "/placeholder.svg",
    tags: ["Python", "GDAL", "Pandas", "NumPy"],
    liveLink: "https://agri-monitor.example.com",
    githubLink: "https://github.com/yourusername/geo-data-pipeline",
  },
  {
    title: "Interactive Flood Risk Map",
    description:
      "Built an interactive flood risk assessment tool using ArcGIS JavaScript API and React, integrating real-time weather data and historical flood records.",
    image: "/placeholder.svg",
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

