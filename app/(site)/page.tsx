// home-page component
import { getProjects } from "@/sanity/sanity-utils"
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="p-2 m-4">
      <h1 className=" mb-6 text-6xl font-extrabold ">NextToEdit Solutions 

     Skräddarsydd hemsida optimerad utifrån tillgänglighet, SEO och prestanda

      </h1>

      <p className="mt-3 text-xl text-gray-700">Konsult med fokus på tillgänglighet, SEO och marknadsledande tekniker </p>

      <h2 className="mt-24 font-bold text-slate-800 text-3xl">Skräddarsydda lösningar - framtidssäkrade webbsidor</h2>

      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">{projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project._id} className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition">
          {project.image && (
            <Image
              src={project.image}
              alt={project.name}
              width={750}
              height={300}
              className="object-cover rounded-lg border border-gray-500" // This is a workaround for a bug in the Image component that causes the border to be cut off on the right side
            />
          )}
          <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            {project.name}
          </div>
        </Link>
      ))}
      </div>
    </div>
  )

}
