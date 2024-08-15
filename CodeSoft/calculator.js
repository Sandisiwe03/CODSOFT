document.addEventListener('DOMContentLoaded', function () {
    const inputBox = document.getElementById('inputBox');
    const buttons = document.querySelectorAll('input[type="button"]');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.value;

            if (value === 'C') {
                inputBox.value = '';
            } else if (value === '=') {
                try {
                    inputBox.value = eval(inputBox.value.replace('x', '*').replace('%', '/100'));
                } catch (e) {
                    inputBox.value = 'Error';
                }
            } else {
                inputBox.value += value;
            }
        });
    });
});