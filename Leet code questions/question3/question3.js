/*

Given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.



/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

 const canConstruct = function(ransomNote, magazine) {
    
    let ransomConstruct = false;
    [...ransomNote].every(note => {
        const noteIndex = magazine.indexOf(note);
        if(noteIndex < 0){
             ransomConstruct = false;
             return false;            
        }
        else {
            magazine = magazine.slice(0, noteIndex) + magazine.slice((noteIndex + 1), magazine.length);
            ransomConstruct = true;
            return true;
        }
    });
return ransomConstruct;
};




const canConstructRansom = canConstruct("abts", "dgsthba");
console.log(canConstructRansom);