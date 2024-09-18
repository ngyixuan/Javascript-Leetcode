/**
 * Note: 类名、方法名、参数名已经指定，请勿修改
 *
 *
 *
 * @param html string字符串
 * @return bool布尔型
 */
function isValidHTML(html) {
  // write code here
  let tagPattern = /<\/?([a-zA-z][a-zA-Z0-9]*)>/g;
  let stack = [];
  let match;

  while ((match = tagPattern.exec(html)) !== null) {
    const [fullTag, tagName] = match;

    if (!fullTag.startsWith("</")) {
      stack.push(tagName);
    } else {
      if (stack.length == 0 || stack.pop() !== tagName) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
let html = "<div>Hello<p></p></div>";
isValidHTML(html);
