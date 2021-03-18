import React, {useState} from 'react'
import axios from 'axios'
import './fileupload.css'
import ClipLoader from "react-spinners/ClipLoader";
function FileUpload(){
    const[file, setfile] = useState('')
    const[preview, setpreview] = useState(false)
    const[imagetext, setimagetext] = useState('')
    const [loading, setloading] = useState(false)
    const [able, setable] = useState(false)
    const [notsupported, setnotsupported] = useState(false)
    
    const upload = async()=>{
        setable(false)
        setloading(true)
        const formdata = new FormData();
        formdata.append('file',file);
        try{
            const res = await axios.post('http://img2-text.herokuapp.com/', formdata)
            let text = res.data
            setloading(false)
            setimagetext(text)
            setable(true)
        }catch(error){
            console.log(error)
            setable(true)
        }
    }
    
    const handleupload = (e)=>{
        let file = null
        if(e.target.files[0]===undefined){
            setable(false)
            setpreview(false)
        }else{
            if(e.target.files[0].type=='image/jpeg'||e.target.files[0].type=='image/png'){
                file = e.target.files[0]
                setable(true)
                setnotsupported(false)
            }else{
                console.log('not supported type')
                setable(false)
                setnotsupported(true)
            }
        }
        
        // const file = e.target.files[0]
        // setfile(file)
        try{
            // const preview= URL.createObjectURL(e.target.files[0])
            const preview= URL.createObjectURL(file)
            setpreview(preview)
            
        }
        catch(err){
            console.log(err)
            
            setpreview(false)
        }
        setfile(file)
        
        
    }
    return(
        <div>
            {notsupported ? <h2>this type of file is not supported</h2>:''}
            {loading ? <ClipLoader color={'#D736D3'} loading={loading} size={30} />:''}
            <div className='image'>
                <img className='thisimage' src={preview} />
            </div>
            <div className = 'fileupload'>
                <input className='input' type='file' onChange = {handleupload}/>
                <button disabled = {!able} className='button' onClick = {upload}><div className='upload'>convert</div></button>
                <div className='clear'></div>
            </div>
            <div className='output'>
                {imagetext}
            </div>
            
        </div>
    )
}
export default FileUpload