let testList = [
  { id: 1, parentId: null, name: "yixuan1" },
  { id: 2, parentId: 1, name: "yixuan2" },
  { id: 3, parentId: 2, name: "yixuan3" },
];

function createTreeNode(testList) {
  let root = null;
  let nodeMap = new Map();

  for (let item of testList) {
    nodeMap.set(item.id, { ...item, children: [] });
  }
  for (let item of testList) {
    if (item.parentId == null) {
      root = nodeMap.get(item.id);
    } else {
      const parent = nodeMap.get(item.parentId);
      if (parent) {
        parent.children.push(nodeMap.get(item.id));
      }
    }
  }

  console.log(root);
}

createTreeNode(testList);
