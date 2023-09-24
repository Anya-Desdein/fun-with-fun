
const input = [
    { size: 123, name: "kek.png", modified: 1695551739 },
    { size: 312, name: "lel.png", modified: 1695551000 },
    { size: 456, name: "wew.png", modified: 1695551999 },
    { size: 123, name: "ddd.png", modified: 1695551739 },
    { size: 568, name: "aaa.png", modified: 1695551999 },
    { size: 456, name: "kek.png", modified: 1695551739 },
    { size: 456, name: "kek.png", modified: 1695551738 },
    { size: 312, name: "lel.png", modified: 1695551000 },
]

function detectDupy(files) {
    const sortedFiles = [...files].sort((a, b) => 
        a.modified - b.modified || 
        a.size - b.size || 
        a.name.localeCompare(b.name)
    ); 

    for (let i = 0; i < sortedFiles.length - 1; i++) {
        if (sortedFiles[i].modified === sortedFiles[i + 1].modified && 
            sortedFiles[i].size === sortedFiles[i + 1].size && 
            sortedFiles[i].name === sortedFiles[i + 1].name) {

            return true;
        }
    }
    return false;
}

const duplicates = detectDupy(input);

if (duplicates) {
    console.log("sa dupy");
} else {
    console.log("nie ma");
}

