import { Database, Globe, MapPin, Code, Server, Blocks, Layers, Map } from 'lucide-react'

const skills = [
  {
    category: 'Geospatial Technologies',
    items: [
      { name: 'QGIS', icon: Globe, color: 'text-green-600' },
      { name: 'ArcGIS Pro', icon: MapPin, color: 'text-blue-700' },
      { name: 'ArcGIS JavaScript API', icon: Map, color: 'text-blue-500' },
      { name: 'PostGIS', icon: Database, color: 'text-indigo-600' },
    ]
  },
  {
    category: 'Web Development',
    items: [
      { name: 'React', icon: Code, color: 'text-blue-400' },
      { name: 'Next.js', icon: Blocks, color: 'text-black' },
      { name: 'Node.js', icon: Server, color: 'text-green-500' },
    ]
  },
  {
    category: 'Programming Languages',
    items: [
      { name: 'Python', icon: Code, color: 'text-yellow-600' },
      { name: 'JavaScript', icon: Code, color: 'text-yellow-400' },
    ]
  },
  {
    category: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: Database, color: 'text-blue-600' },
    ]
  },
  {
    category: 'Mapping Platforms',
    items: [
      { name: 'Mapbox', icon: Layers, color: 'text-blue-500' },
    ]
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My Skills
        </h2>
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-gray-700">{skillGroup.category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skillGroup.items.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className={`p-3 rounded-full bg-gray-100 ${skill.color}`}>
                    <skill.icon size={30} />
                  </div>
                  <span className="mt-2 text-sm font-medium text-gray-600">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
