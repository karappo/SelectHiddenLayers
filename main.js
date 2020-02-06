function selectHiddenLayers (selection) {
    selection.items = selection.items[0].children.filter(function (childNode) {
        return !childNode.visible
    })
}
module.exports = {
    commands: {
        selectHiddenLayers
    }
}
