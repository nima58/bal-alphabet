compare = (a, b) => {
    // Use toUpperCase() to ignore character casing
    console.log("a: " + JSON.stringify(a));
    const latinA = a.CharEntry.latin.toLowerCase();
    const latinB = b.CharEntry.latin.toLowerCase();
  
    let comparison = 0;
    if (latinA > latinB) {
      comparison = 1;
    } else if (latinA < latinB) {
      comparison = -1;
    }
    return comparison;
  }

  export default wordSorter = (words) => {
    return words.sort(compare);
}