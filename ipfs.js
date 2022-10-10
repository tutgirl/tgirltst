
  const fs = require("fs")
  const path = require("path")
  // const IPFS = require('ipfs-core')
  // const ipfsClient = require('ipfs-http-client')
"use strict";
var node = ( async () => {

  const { node } = await import("./testprofile.mjs");
  // const { version } = await import("./testprofile.mjs");

  // console.log(version.version)


function getAllFiles(dirPath, originalPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []
  originalPath = originalPath || path.resolve(dirPath, "..")

  folder = path.relative(originalPath, path.join(dirPath, "/"))

  arrayOfFiles.push({
      path: folder.replace(/\\/g, "/"),
      mtime: fs.statSync(folder).mtime
  })

  files.forEach(function (file) {
      if (fs.statSync(dirPath + "/" + file).isDirectory()) {
          arrayOfFiles = getAllFiles(dirPath + "/" + file, originalPath, arrayOfFiles)
      } else {
          file = path.join(dirPath, "/", file)

          arrayOfFiles.push({
              path: path.relative(originalPath, file).replace(/\\/g, "/"),
              content: fs.readFileSync(file),
              mtime: fs.statSync(file).mtime
          })
      }
  })

  return arrayOfFiles
}

function run() {
  files = getAllFiles(process.argv[2])
  ipfs =  node
  rootFolder = "/" + path.relative(path.resolve(process.argv[2], ".."), process.argv[2])

  ipfs.addAll(files, { pin: false,  }) 
    // .then(result => {
    //   rootItem = "/ipfs/" + result[result.length - 1].hash
    //   console.info(result)
    //   console.info("Copying from " + rootItem + " to " + rootFolder)
    //   ipfs.files.cp(rootItem, rootFolder)
    // })
    // .catch(error => console.error(error))
    
    
 
    // (filee = async () => {

      
    //   // const { version } = await import("./testprofile.mjs");
    
    //   // console.log(version.version)
    
    //   for await (const result of ipfs.addAll(filee)) {
    //     console.log(result)
    //   }
    // return node;
    
    // }) ();

    
   

    // }
    
}



run()
console.log(run)

}) ();








