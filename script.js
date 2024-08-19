function countVowels() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;

    for (let char of inputText) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    document.getElementById('result').innerText = `Result: The text contains ${vowelCount} vowel(s).`;
}
