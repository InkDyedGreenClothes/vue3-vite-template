const modulesFiles = import.meta.globEager('./**/*.vue')
const modules = {}
let routes = []
for (const key in modulesFiles) {
  const module = modulesFiles[key]
  modules[key.replace(/(\.\/modules\/|\.js)/g, '')] = module.default
}
Object.keys(modules).forEach((item) => {
  modules[item]['namespaced'] = true
  let name = item.replace(/^\.\/(.*)\.\w+$/, '$1') // 正则匹配出组件名
  let lastInd = item.lastIndexOf('/')
  let lastName = item.substr(lastInd + 1, item.length)
  // 判断是否为模块首页
  if (lastInd != -1 && lastName == 'index') {
    name = name.substr(0, lastInd)
  }
  routes.push({
    path: `/${name == 'index' ? '' : name.toLowerCase()}`, // 这个判断是等于home首页，路径就默认为/ ，toLowerCase是转小写函数
    name: conversionName(name),
    component: modules[item]
  })
})

/**
 * 将 name 转为 大驼峰命名
 * 1.先将字符串中的 - 替换为 /
 * 2.再根据 / 分割成数组
 * 3.将数组循环改变第一个首字母为大写
 * 4.最后拼接返回
 * */
function conversionName(name) {
  return name
    .replace(/-/g, '/')
    .split('/')
    .reduce(
      (previous, current) =>
        previous + current.replace(/^\w/, (s) => s.toUpperCase()),
      ''
    )
}

export default routes
