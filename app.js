let count = 0;

const value = document.querySelector('#value');

const buttons = document.querySelectorAll('.btn')

console.log(buttons)

buttons.forEach((btn) => btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')){
        count--;
        value.textContent = count;
    }
    else if (styles.contains('reset')){
        count = 0;
        value.textContent = count;
    }
    else {
        count++;
        value.textContent = count;
    }
    if (count > 0) value.style.color = 'green';
    else if (count < 0) value.style.color = 'red';
    else value.style.color = '#222';


}) )


