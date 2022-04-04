const educationProgram = document.querySelector('.education__program');
const educationTabs = document.querySelectorAll('.education__choice-button');
const aspirantChoice = document.querySelector('.program__template-aspirant').content;
const magistrChoice = document.querySelector('.program__template-magistr').content;

document.addEventListener('DOMContentLoaded', function (event) {
    displayTemplate(educationProgram, magistrChoice)
});

educationTabs.forEach(tab =>
    tab.addEventListener('click', () => {
        if (tab.classList.contains('education__choice-active'))
        return;
        else {
            if (tab.classList.contains('education__choice-aspirant'))
            displayTemplate(educationProgram, aspirantChoice);
            else 
            displayTemplate(educationProgram, magistrChoice);
            educationTabs.forEach(t => {
                t.classList.toggle('education__choice-active');
            });
        }
    }));

    function displayTemplate(block, template) {
        block.innerHTML = '';
        block.append(template.cloneNode(true));
    }
