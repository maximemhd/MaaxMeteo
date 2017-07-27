const fs = require('fs')
const path = require('path')

function getDirectories (srcpath) {
  return fs.readdirSync(srcpath)
    .filter(file => fs.lstatSync(path.join(srcpath, file)).isDirectory())
}

var subdir;
var files;
var string = "";
var dirs = getDirectories("./departements/");

//console.log(dirs)

for(var i in dirs){
  //subdir = getDirectories("./departements/"+dirs[i]);
  //console.log(subdir);
  files = fs.readdirSync("./departements/"+dirs[i]);
  console.log(files);
  var temp = dirs[i].substring(3);
  temp = temp.replace(/-/g, '');
  string +="case \""+temp+"\": \n commune = \""+dirs[i]+"/"+files[2]+ "\"; \n break; \n";
  //console.log(dirs[i])
  //console.log(path.dirname("departements/"+dirs[i]+"/"));
  //console.log(fs.readdirSync("./departements/"+dirpath))
}
fs.writeFileSync("case", string, "UTF-8");
//console.log(string)
