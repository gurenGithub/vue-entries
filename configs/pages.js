const chunks = ['chunk-vendors', 'chunk-common'];

let pages = {
  'index': {
    entry: 'src/main.js',
    template: 'public/index.html',
    title: '主页',
    //chunks: [].concat(chunks)
  },
  'details': {
    entry: 'src/main.js',
    template: 'public/details.html',
    title: '详情页',
    //chunks: [].concat(chunks)
  },
  'user-details': {
    entry: 'src/main.js',
    //filename: "user/index.html",
    template: 'public/details.html',
    title: '用户详情页'
  }
}
for (let key in pages) {
  if (!pages[key].template) {
    pages[key].template = 'public/index.html';
  }
  if (!pages[key].filename) {
    pages[key].filename=key.replace(/-/gi,'/')+'.html';
  }
  if (!pages[key].entry) {
      pages[key].entry=`src/${key.replace(/-/gi,'/')}.js`;
  }
  pages[key].chunks = chunks.concat(key);
}
//console.log(pages);
module.exports = pages
