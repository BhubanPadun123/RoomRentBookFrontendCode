export const URLS = {
    signup:"api/user/signup",
    login:"api/user/login",
    roomImgUpload:"api/upload/image",
    roomRegister : "api//user/register"
}
export const base_urls = {
    backend:"http://localhost:5000"
}

var config:object = {}
let s3Folder:string = ""

if(process.env.NODE_ENV==="production"){
    config = {
        baseURl:"www.bhubanpadunroombooking.com"
    }
    s3Folder="production"
}else{
    config = {
        baseURL:""
    }
}

export {s3Folder}
export default config