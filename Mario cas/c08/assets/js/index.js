//

// var height = 1.80;
// var limit = 1.63;

// if(height > limit) {
//     console.log('Mozes da se vozis na rollercoasterot')
// } else {
//     console.log('Ne mozes da se vozis na rollecoasterot')
// }

// var num1 = 5;
// var num2 = 7;

// if(num1 > num2) {
//     console.log(num1);
// } else if(num1 < num2) {
//     console.log(num2);
// } else {
//     console.log('Numbers are equal');
// }

// var today = 'Friday';

// switch(today) {
//     case 'Monday':
//         console.log('Today is Monday');
//     break;
//     case 'Tuesday':
//         console.log('Today is Tuesday');
//     break;
//     case 'Wednesday':
//         console.log('Today is Wednesday');
//     break;
//     case 'Thursday':
//         console.log('Today is Thursday');
//     break;
//     case 'Friday':
//         console.log('Today is Friday');
//     break;
//     case 'Saturday':
//         console.log('Today is Saturday');
//     break;
//     case 'Sunday':
//         console.log('Today is Sunday');
// }

function MarioPyramid(size) {
    for(var i = 1; i <= size; i++) {
        var result = ''

        for(j=1; j <= i; j++) {
            result += '#'
        }

        console.log(result);
    }
}

MarioPyramid(15);