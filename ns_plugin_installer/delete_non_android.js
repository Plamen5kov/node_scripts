var filewalker = require('filewalker'),
	fs = require("fs"),

	arguments = process.argv,
	inputFolder = "./input",
	foldersToKeep = {},
	allFolders = {};
	
if(arguments[2]) {
	inputFolder = arguments[2];
	console.log("passed input folder: " + inputFolder);
}

var removeNonNativeAndroidPlugins = function(inputFolder) {

	filewalker(inputFolder)
	  .on('file', function(p) {
			// console.log(p);
			var name = p.substring(0, p.indexOf("/"));			
			allFolders[name] = inputFolder + "/" + name;
			
			if(p.indexOf("platforms/android") != -1) {
					foldersToKeep[name] = allFolders[name];
			}
	  })
	  .on('error', function(err) {
		console.error(err);
	  })
	  .on('done', function() {
		  for(var i in foldersToKeep) {
			console.log(i);  
		  }
		  console.log("----")
		  for(var i in allFolders) {
			  if(foldersToKeep[i]) {
				  console.log("don't delete")
				  continue;
			  }
			  deleteFolderRecursive(allFolders[i])
		  }
	  })
	.walk();
}

var deleteFolderRecursive = function(path) {
  if( fs.existsSync(path) ) {
    fs.readdirSync(path).forEach(function(file,index){
      var curPath = path + "/" + file;
      if(fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};

removeNonNativeAndroidPlugins(inputFolder);
	