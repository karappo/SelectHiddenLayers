
function selectHiddenLayers(selection) {
  selection.items = getHiddenChildren(selection.items[0])
}
function getHiddenChildren (node, array = []) {
  if (!node.visible) {
    array.push(node)
  } else if (0 < node.children.length) {
    node.children.forEach(function (child) {
      if (!child.visible) {
        array.push(child)
      } else {
        array.concat(getHiddenChildren(child, array))
      }
    })
  }
  return array
}
module.exports = {
  commands: {
    selectHiddenLayers
  }
}
