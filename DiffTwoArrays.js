<SCRIPT LANGUAGE="JavaScript">

/*Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays. 
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
*/

  function diff(arr1, arr2) {
    return arr1.concat(arr2).filter(x => arr1.indexOf(x) !=-1 && arr2.indexOf(x) !=-1 ? false : true)
    }

  diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
</SCRIPT>

