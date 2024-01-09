function isAnagram(str1, str2) {
  // Remove spaces and convert strings to lowercase for comparison


  // Sort the characters in the strings
  const sortedStr1 = str1.toLowerCase().split('').sort().join('');
  const sortedStr2 = str2.toLowerCase().split('').sort().join('');

  // Check if the sorted strings are equal
  return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;
