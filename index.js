function getGrade(score) {
    let grade;

    if (score <= 5) {
        return console.log('F');
    } else if (score <= 10) {
        return console.log('E');
    } else if (score <= 15) {
        return console.log('D');
    } else if (score <= 20) {
        return console.log('C');
    } else if (score <= 25) {
        return console.log('B');
    } else if (score > 30) {
       return console.log('greater than 30 not to be graded');
    }
    else {
        return console.log('A');
    }

    return grade;
}
const getInputAndDisplay = () => {
    console.log("Please enter the score");
    process.stdin.on("data", (data) => {
    const score = data;
    
    
    
    getGrade(score);
    process.exit();
    });
    };

getInputAndDisplay();