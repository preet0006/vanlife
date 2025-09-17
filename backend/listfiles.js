import fs from 'fs';

const directoryPath = 'C:/Users/ASUS/Desktop'; 

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.error('Error reading directory:', err);
    }
    console.log('Files and folders in directory:', files);
});


