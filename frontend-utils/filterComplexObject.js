let a = { a: "", b: { c: 1, d: null }, c: { e: undefined }, d: [{ a: "" }] };
// 过滤 '' null undefined
// 结果生成一个新的对象 {b: {c: 1}, c: {}, d: [{}]}
function filterObject(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(filterObject).filter((item) => item !== undefined);
  }

  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    const filteredValue = filterObject(value);
    if (
      filteredValue !== undefined &&
      filteredValue !== null &&
      filteredValue !== ""
    ) {
      result[key] = filteredValue;
    }
  }
  return result;
}
console.log(filterObject(a));
