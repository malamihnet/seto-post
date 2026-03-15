import ProjectClient from "./ProjectClient"

export async function generateMetadata({ params }: {
  params: { id: string }
}) {

  const { id } = params

  const res = await fetch(`https://vimeo.com/api/v2/video/${id}.json`)
  const data = await res.json()

  const video = data?.[0]

  if (!video) {
    return {
      title: "Project | Seto's Post Production",
      description: "Seto's Post Production video portfolio"
    }
  }

  return {
    title: `${video.title} | Seto's Post Production`,
    description:
      video.description?.slice(0, 160) ||
      "Seto's Post Production video editing portfolio",
    openGraph: {
      title: video.title,
      images: [video.thumbnail_large]
    }
  }
}

type PageProps = {
  params: {
    id: string
    lang: string
  }
}

export default function Page({ params }: PageProps) {

  const { id, lang } = params

  return <ProjectClient id={id} lang={lang} />
}