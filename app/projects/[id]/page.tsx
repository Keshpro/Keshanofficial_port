"use client";

import { allProjects } from "@/app/data/projectsData";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Check } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function ProjectDetailsPage() {
  const params = useParams<{ id: string }>();

  const projectId =
    typeof params?.id === "string"
      ? decodeURIComponent(params.id)
      : "";

  const project = allProjects.find(
    (project) => project && project.id === projectId
  );

  const [activeImage, setActiveImage] = useState(0);

  /* =========================================================
     PROJECT NOT FOUND
  ========================================================= */
  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center px-6 text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Project not found!
          </h1>

          <p className="mt-3 text-sm text-white/40">
            Project ID: {projectId || "No project ID"}
          </p>

          <Link
            href="/projects"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-amber-500 transition-colors hover:text-amber-400"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  /* =========================================================
     SAFE IMAGE HANDLING
  ========================================================= */
  const projectImages =
    Array.isArray(project.images) && project.images.length > 0
      ? project.images
      : [];

  const currentImage = projectImages[activeImage];

  return (
    <div className="min-h-screen px-6 pb-24 pt-32 text-gray-200">
      <div className="mx-auto max-w-6xl">

        {/* =====================================================
            BACK BUTTON
        ===================================================== */}
        <Link
          href="/projects"
          className="mb-12 inline-flex items-center text-amber-500 transition-colors hover:text-amber-400"
        >
          <ArrowLeft
            size={20}
            className="mr-2"
          />

          Back to Catalog
        </Link>

        {/* =====================================================
            PROJECT LAYOUT
        ===================================================== */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">

          {/* ===================================================
              LEFT SIDE — IMAGE GALLERY
          =================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="flex flex-col gap-4"
          >
            {/* MAIN IMAGE */}
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111]/70 backdrop-blur-md">

              {currentImage ? (
                <img
                  src={currentImage}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-sm text-white/30">
                  No project image available
                </div>
              )}

            </div>

            {/* THUMBNAILS */}
            {projectImages.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">

                {projectImages.map((img, idx) => (
                  <button
                    key={`${img}-${idx}`}
                    type="button"
                    onClick={() => setActiveImage(idx)}
                    aria-label={`View project image ${idx + 1}`}
                    className={`
                      h-24
                      w-24
                      flex-shrink-0
                      overflow-hidden
                      rounded-lg
                      border-2
                      transition-all
                      duration-300
                      ${
                        activeImage === idx
                          ? "border-amber-500 opacity-100"
                          : "border-transparent opacity-50 hover:opacity-100"
                      }
                    `}
                  >
                    <img
                      src={img}
                      alt={`${project.title} preview ${idx + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}

              </div>
            )}
          </motion.div>

          {/* ===================================================
              RIGHT SIDE — PROJECT DETAILS
          =================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="flex flex-col"
          >
            {/* CATEGORY */}
            <span className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber-500">
              {project.category}
            </span>

            {/* TITLE */}
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              {project.title}
            </h1>

            {/* DESCRIPTION */}
            <p className="mb-8 text-lg leading-relaxed text-gray-400">
              {project.longDescription}
            </p>

            {/* =================================================
                TECHNOLOGIES
            ================================================= */}
            {Array.isArray(project.tech) &&
              project.tech.length > 0 && (
                <div className="mb-10">

                  <h3 className="mb-4 text-lg font-semibold text-white">
                    Technologies Used:
                  </h3>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                    {project.tech.map((tech, index) => (
                      <div
                        key={`${tech}-${index}`}
                        className="flex items-center text-gray-300"
                      >
                        <Check
                          size={16}
                          className="mr-2 flex-shrink-0 text-amber-500"
                        />

                        {tech}
                      </div>
                    ))}

                  </div>
                </div>
              )}

            {/* =================================================
                ACTION BUTTONS
            ================================================= */}
            <div className="mt-auto flex flex-col gap-4 sm:flex-row">

              {project.liveUrl &&
                project.liveUrl !== "#" && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-amber-500
                      px-8
                      py-4
                      font-bold
                      text-black
                      transition-all
                      duration-300
                      hover:bg-amber-600
                    "
                  >
                    <ExternalLink size={20} />
                    Live Preview
                  </Link>
                )}

              {project.githubUrl &&
                project.githubUrl !== "#" && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      px-8
                      py-4
                      font-bold
                      text-white
                      transition-all
                      duration-300
                      hover:border-white/20
                      hover:bg-white/[0.08]
                    "
                  >
                    <ExternalLink size={20} />
                    View Source
                  </Link>
                )}

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}