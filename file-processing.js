const fs = require('fs');

class FileManager{

    constructor(path){
        this.filePath = path
    }

    readFile = async()=>{
        debugger;
        let content = fs
        .readFileSync(this.filePath)
        .toString('UTF8')
        .split('\n');

        content = content.filter(line => line.trim()).map(line => line.trim());
        return content;
    }
}

module.exports =  { FileManager };