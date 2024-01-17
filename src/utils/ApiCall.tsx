import axios from "axios"

interface apiCallState{
    response:object,
    error:object
}


const runAxios=async(method:string,path:string,data:any,url:string):Promise<apiCallState>=> {
    console.log(url,"and==>",data)
    let result = {
        response:[],
        error:[]
    }
    switch(method){
        case "get":
            await axios.get(`${url}/${path}`,{params:data}).then((res)=>{
                result={
                    response:res.data,
                    error:[]
                }
            }).catch((err)=>{
                result = {
                    response:[],
                    error:err
                }
            })
            return result;
            break;
        case "post":
            await axios.post(`${url}/${path}`,data).then((res)=>{
                result={
                    response:res.data,
                    error:[]
                }
            }).catch((err)=>{
                result={
                    response:[],
                    error:err
                }
            })
            return result;
            break;
        case "delete":
            await axios.delete(`${url}/${path}`).then((res)=>{
                result = {
                    response: res.data,
                    error:[]
                }
            }).catch((err) => {
                result = {
                    response:[],
                    error:err
                }
            })
            return result;
            break;
        default:
            return result;
    }
}
async function makeCall(method:string,path:string|any,data:object|any,url:string|any):Promise<apiCallState>{
    const {error,response} = await runAxios(method,path,data,url)
    return {
        error,
        response
    }
}

export default makeCall