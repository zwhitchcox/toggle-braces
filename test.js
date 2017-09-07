const espree = require('espree')
const estraverse = require('estraverse')

const code =
`
if (true)
  console.log('hello')
`

const ast = espree.parse(code, {
  range: true,
  loc: true,
})

estraverse.replace(ast, {
    enter: function (node, parent) {
      if (node.type !== 'IfStatement')
        return node
      else console.log(node.range)
    },
})
