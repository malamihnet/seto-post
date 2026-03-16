import ServiceClient from "./ServiceClient"

type Params = {
  lang: string
  slug: string
}

export async function generateMetadata({
  params
}:{
  params: Promise<Params>
}){

const { slug } = await params

const title = slug
.split("-")
.map(word => word.charAt(0).toUpperCase() + word.slice(1))
.join(" ")

return {
title: `${title} | Seto's Post Production`,
description: `Professional ${title} services by Seto's Post Production, Iraq's leading cinematic post production studio.`
}

}

export default async function Page({
params
}:{
params: Promise<Params>
}){

const { slug, lang } = await params

return <ServiceClient slug={slug} lang={lang} />

}