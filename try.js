function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let search = function (node, max) {
  if (!node) return 0;
  let count = 0;
  if (node.val >= max) count += 1;
  max = node.val;
  count += search(node.left, max);
  count += search(node.right, max);
  return count;
};

var goodNodes = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  let goodnodes = 1;
  goodnodes += search(root.left, root.val);
  goodnodes += search(root.right, root.val);
  return goodnodes;
};

let c = goodNodes([3, 1, 4, 3, null, 1, 5]);
console.log(c);
