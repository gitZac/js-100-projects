const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`)
        .join('');
});

//We convert the text of the innerHTML into an ARRAY with split(). The empty string in split() converts the contents of the span to
// array('e', 'm','a', 'i', 'l')

//map() manipulates the elements of an array into something else. In this case, it takes every item in the array and converts it into a span. We then use js template syntax to define the letters.

//Join() turns the array back into a single string. So instead of of e, m, it concatenates everything together as a unified string.