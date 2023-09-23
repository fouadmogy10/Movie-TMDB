import { fetchDataFromApi } from "../../utils/baseURL.jsx"

const getMD =(data)=>{
    return fetchDataFromApi(`/${data.type}/${data.id}`)
}
const reco =(data)=>{
    return fetchDataFromApi(`/${data.type}/${data.id}}/recommendations`)
}
const OfficialVideos =(data)=>{
    return fetchDataFromApi(`/${data.type}/${data.id}}/videos`)
}
const crew_cast =(data)=>{
    return fetchDataFromApi(`/${data.type}/${data.id}}/credits`)
}
const explore =(data)=>{
    return fetchDataFromApi(`/discover/${data.mediaType}?page=${data.page}&sort_by=${data.sort!==""? data.sort:"popularity.desc"}`)
}
const movieServices ={
    getMD,reco,OfficialVideos,crew_cast,explore
}
export default movieServices