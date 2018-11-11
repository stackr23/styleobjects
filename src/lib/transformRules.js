export default function transformRules (self, rules, result) {
  rules.forEach(function(rule) {
    var obj = {}
    if (rule.type === 'media') {
      var name = self.mediaNameGenerator(rule.media)
      var media = result[name] = result[name] || {
        "__expression__": rule.media
      }
      transformRules(self, rule.rules, media)
    } else if (rule.type === 'rule') {
      rule.declarations.forEach(function(declaration) {
        if (declaration.type === 'declaration') {
          // camelize
          var cssProperty = declaration.property
            .replace(/-([a-z])/g, function (g) {
              return g[1].toUpperCase()
            })
          obj[cssProperty] = declaration.value
        }
      })
      rule.selectors.forEach(function(selector) {
        var name = self.nameGenerator(selector.trim())
        result[name] = obj
      })
    }
  })
}
