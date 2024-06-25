// Get references to the textarea and input fields
const textArea = document.getElementById('textArea');
const character = document.getElementById('char');
const words = document.getElementById('word');

// Add an event listener to the textarea for input events
textArea.addEventListener('input', function() {

    // Retrieve the text from the textarea
    let text = this.value;

    // Trim the text to remove leading and trailing whitespace
    text = text.trim();

    // Calculate the number of characters in the text
    let char = text.length;

    // Update the character count in the corresponding input field
    character.value = char;

    // Split the text into an array of words
    let newText = text.split(" ");

    // Filter out empty strings (occurs if there are multiple spaces)
    let cleanWord = newText.filter((element) => {
        return element != "";
    });

    // Update the word count in the corresponding input field
    words.value = cleanWord.length;
});
