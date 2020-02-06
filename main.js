function selectHiddenLayers(selection) {
  selection.items = selection.items[0].children.filter(function (childNode) {
    console.log(childNode)
    return !childNode.visible
  })
}
module.exports = {
  commands: {
    selectHiddenLayers
  }
}
