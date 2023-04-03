const path = require('path');

// path.basename();
const a =path.win32.basename('C:\\foo.html', '.html');
console.log(a);
const a1 =path.dirname('C:\\foo.html', '.html');
console.log(a1);
const a2 =path.extname(__filename);
console.log(a2);