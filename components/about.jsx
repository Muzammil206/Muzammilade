import Image from "next/image"
import Link from "next/link"

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/placeholder.svg"
              alt="About me image"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 space-y-6">
            <p className="text-gray-600 leading-relaxed">
            Hi, I'm Muzammil! I'm a passionate geospatial developer with over three years of experience
             creating innovative GIS and web-based solutions. 
             I've dedicated my career to blending geospatial technologies with modern web development
            </p>
            <p className="text-gray-600 leading-relaxed">
            My expertise spans technologies like PostgreSQL, PostGIS, Python, QGIS, Mapbox, Node.js, React , Next.js, and ArcGIS JavaScript API. I specialize in building intuitive WebGIS platforms, 
            processing and visualizing geospatial data, and creating seamless user experiences.
            </p>
            <p className="text-gray-600 leading-relaxed">
            I’m committed to advancing my skills and contributing to the field of geospatial development, constantly exploring new tools and technologies to craft effective solutions. 
            In addition to my work, I enjoy sharing insights about GIS, WebGIS, and software development
            </p>
            <div className="pt-4">
              <Link
                href="/path-to-your-resume.pdf"
                className="inline-block bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

