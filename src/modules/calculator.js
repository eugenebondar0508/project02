const calculator = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcDay = document.querySelector('.calc-day'),
        totalValue = document.getElementById('total'),
        calcCount = document.querySelector('.calc-count');

        const countSum = () =>{

        let total = 0;
        let countValue = 1;
        let dayValue = 1;

        let typeValue = calcType.options[calcType.selectedIndex].value;
        let squadeValue = +calcSquare.value;
        

        if(calcCount.value > 1){
            countValue += (calcCount.value -1) / 10;
        }

        if(calcDay.value && calcDay.value < 5){
            dayValue *= 2;
        } else if (calcDay.value && calcDay.value > 5 && calcDay.value < 10){
            dayValue *= 1.5;
        }

        if(typeValue && squadeValue){
                total = price * typeValue * squadeValue * countValue * dayValue;
        }

            totalValue.textContent = total;
        }

        calcBlock.addEventListener('change', (event) =>{
            const target = event.target;

            if(target.matches('.calc-type') || target.matches('.calc-square') || target.matches('.calc-day') || target.matches('.calc-count')){
                countSum();
            }
        })


};

export default calculator;