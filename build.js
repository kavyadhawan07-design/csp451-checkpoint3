require('fs').mkdirSync('build',{recursive:true}); require('fs').writeFileSync('build/index.html','<h1>Hello CI/CD</h1>'); console.log('Building application...');
