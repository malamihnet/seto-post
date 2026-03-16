import ProjectClient from "./ProjectClient"

type Params = {
  lang: string
  id: string
}

export async function generateMetadata({
params
}:{
params: Promise<Params>
}){

const { id } = await params

try{

const res = await fetch(`https://vimeo.com/api/v2/video/${id}.json`)

const data = await res.json()

const title = data?.[0]?.title || "Video"

return{
title: `${title} | Seto's Post Production`,
description: data?.[0]?.description || "Cinematic video production by Seto's Post Production."
}

}catch{

return{
title:"Video | Seto's Post Production"
}

}

}

export default async function Page({
params
}:{
params: Promise<Params>
}){

const { id, lang } = await params

const cleanId = String(id || "").replace(/\D/g,"")

if(!cleanId){
return(
<div className="min-h-screen bg-black text-white flex items-center justify-center">
Invalid Project
</div>
)
}

return(
<ProjectClient
id={cleanId}
lang={lang}
/>
)

}