//Get the elements

const dice = document.querySelector('.dice');
const advice = document.querySelector('.advice');
const adviceNum = document.querySelector('.advice-number');

const getAdvice = () => {
    const req = new XMLHttpRequest();
    // This is so that we get different requests from the api
    const url = `https://api.adviceslip.com/advice?timestamp=${Date.now()}`;

    req.addEventListener('readystatechange', () => {
        // 4 means that its done (because its the fourth part) and 200 means its okay
        if(req.readyState === 4 && req.status === 200){
            
            //Get the API response and parse it
            const newAdvice = JSON.parse(req.responseText);
            console.log(newAdvice);
            
            //Change the text of the advice  # and advice
            adviceNum.textContent =`Advice #${newAdvice.slip.id}`;
            advice.textContent = `"${newAdvice.slip.advice}"`;
        }  else if (req.readyState === 4){
            console.log('Data not found.');
        }
        });

req.open('GET', url);
req.send();
}
//Event Listener on the dice
dice.addEventListener('click', () => {
    getAdvice();
});
