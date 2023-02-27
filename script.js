const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    //so that the count will start a 0
    counter.innerText = '0' 

    const updateCounter = () => {
        //this const will target the number that is listed on the data-target. It can be changed. + to increase
        const target = +counter.getAttribute('data-target')
        const c =+counter.innerText
        
        //this code to control how fast it will reach the maximum number
        const increment = target /500

        // The Math.ceil() static method always rounds up and returns 
        //the smaller integer greater than or equal to a given number.
        //console.log(Math.ceil(.95));
        // Expected output: 1

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        }//else{
        //     counter.innerText =target
        // }
    }
    //call the function back
    updateCounter()
})
