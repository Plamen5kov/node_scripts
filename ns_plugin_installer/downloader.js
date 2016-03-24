var fs = require("fs"),
	newLine = require('os').EOL,
	exec = require('child_process').execSync,
	
	inputFile = "nativescript-plugins.txt",
	arguments = process.argv;
	
if(arguments[2]) {
	inputFile = arguments[2];
	console.log("passed input file: " + inputFile);
}

var readFile = function(inputFile) {
	var content = fs.readFileSync(inputFile, "utf-8");
	var pluginNames = content.split(newLine);
	
	for(var i in pluginNames) {
		try {		
			exec("tns plugin add " + pluginNames[i])	
		}
		catch (e) {
			console.log(e.toString());
		}
	}
}

readFile(inputFile);