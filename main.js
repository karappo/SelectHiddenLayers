
function selectHiddenLayers(selection) {
  const select_target_items = []
  selection.items.forEach(function (artboard) {
    getHiddenChildren(artboard, select_target_items)
  })
  selection.items = select_target_items
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
