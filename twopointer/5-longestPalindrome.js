/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    let l = i;
    let r = i;

    let oddPalindrome = findPalindrome(s, l, r);
    let evenPalindrome = findPalindrome(s, l, r + 1);
    res = res.length >= oddPalindrome.length ? res : oddPalindrome;
    res = res.length >= evenPalindrome.length ? res : evenPalindrome;
  }

  return res;
};

function findPalindrome(s, l, r) {
  while (l >= 0 && r < s.length && s[l] == s[r]) {
    l--;
    r++;
  }
  return s.substring(l + 1, r);
}

const s = "cbbd";
console.log(longestPalindrome(s));
