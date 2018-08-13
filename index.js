// // const original = function () {
// //     return 100;
// // };
//
// // console.log(original());
//
// // const arrow = (num1, num2) => {
// //     return num1 + num2;
// // };
//
//
// const arrow2 = (num1, num2) => num1 + num2;
//
//
// console.log(arrow2(40, 34));


const obj = {
    name: 'WFM',

    logName: function () {
        setTimeout(() => {
            console.log('Name: ' + this.name);
        }, 2000);
    }
};

obj.logName();










