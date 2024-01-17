export const URLS = {
    signup:"api/user/signup",
    login:"api/user/login"
}
export const base_urls = {
    backend:"http://localhost:4000"
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