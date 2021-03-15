// const { createWorker } = require('tesseract.js');
// const image = 'D:/web_projects/react-express-mongodb-template/server/pictures/1ee1556be3d2fcd4cdbb0ec25746f3fb.jpg'
async function convert(img){
    const worker = createWorker(
        
      );
      
    console.log(worker)
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize(img);
    console.log(text);
    await worker.terminate();
      
}
// convert(image)
// .then(()=>console.log('done'))
const fs = require('fs')
const imagepath = 'D:/web_projects/react-express-mongodb-template/server/pictures/1ee1556be3d2fcd4cdbb0ec25746f3fb.jpg'
async function remove(path){
    try {
      fs.unlink(path)
      //file removed
    } catch(err) {
      console.error(err)
    }
}
remove(imagepath)
// async function convert(img){
//   const worker = createWorker(
      
//     );
    
//   console.log(worker)
//   await worker.load();
//   await worker.loadLanguage('eng');
//   await worker.initialize('eng');
//   const { data: { text } } = await worker.recognize(img);
//   console.log(text);
//   await worker.terminate();
    
// }
// async function remove(path){
//   try {
//     fs.unlink(path)
//     //file removed
//   } catch(err) {
//     console.error(err)
//   }
// }
