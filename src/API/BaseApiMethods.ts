import BaseAPI from "./BaseAPI";

const GetApi = (url:string) =>{
     return BaseAPI.get(url).then((response:any)=>{
          const {data,status}= response;
          return {
               data,
               status
          }
          
     }).catch((error:any)=>{
          const {data,status} = error.response ?? error;
          return {data,status}

     })
}

const PostApi = (url:string ,postData:any) =>{
    return BaseAPI.post(url,postData).then((response:any)=>{
          const {data,status}= response;
          return {
               data,
               status
          }
          
     }).catch((error:any)=>{
          const {data,status} = error.response ?? error;
          return {data,status}

     })
}
export {GetApi,PostApi}