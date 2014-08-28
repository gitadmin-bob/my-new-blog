gitadmin.readFile('README.md', function(file) {
  document.body.innerHTML = JSON.stringify(file);
})
