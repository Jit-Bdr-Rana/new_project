import axios from "axios"


const baseurl:string='http://localhost:3000'


const asyncGet=async(api:string,option?:any)=>{
    try{
    const response=await axios.get(baseurl+api,option) //get axois instance 
    return{data:response.data} //return data from instance
    }catch(e:any){
      return {
        error:e?.response?.data?e?.response.data:e?.response  // for error handeling
      }
    }
}

const asyncPost=async(api:string,payload:any,option?:any)=>{
    try{
    const response=await axios.post(baseurl+api,payload,option) //get axois instance 
    return{data:response.data} //return data from instance
    }catch(e:any){
      return {
        error:e?.response?.data?e?.response.data:e?.response  // for error handeling
      }
    }
}
const asyncPut=async(api:string,payload:any,option?:any)=>{
    try{
    const response=await axios.put(baseurl+api,payload,option) //get axois instance 
    return{data:response.data} //return data from instance
    }catch(e:any){
      return {
        error:e?.response?.data?e?.response.data:e?.response  // for error handeling
      }
    }
}
const asyncDelete=async(api:string)=>{
    try{
    const response=await axios.delete(baseurl+api) //get axois instance 
    return{data:response.data} //return data from instance
    }catch(e:any){
      return {
        error:e?.response?.data?e?.response.data:e?.response  // for error handeling
      }
    }
}






export{
    asyncGet,
    asyncDelete,
    asyncPost,
    asyncPut
}