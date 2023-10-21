function callBackHell() {
    setTimeout(() => {
        const data = { user: "Jonny" }
        console.log(data);
        setTimeout(() => {
            console.log("Data has been Updated") 
        }, 1000)
    }, 500);
}


callBackHell()