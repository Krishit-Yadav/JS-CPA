const brochures = [
    {title: 'Fee Structure', body: 'This brochure will inform you about our fee structure'},
    {title: 'Course Structure ', body: 'This brochure will inform you about our different courses'}
];

function getBrochures () {
    setTimeout(() => {

        let output = '';
        brochures.forEach((brochure, index) => {
            output += `<li>${brochure.title}</li>`;
        });
        document.body.innerHTML = output;

    }, 1000);
}

function createBrochure(brochure) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            brochures.push(brochure);

            const error = false;


            if (!error) {
                resolve();
            }else{
                reject('ERROR: Something Went Wrong');
            }
        }, 2000);
    });
}

/*
    createBrochure({ title: 'Fooding and Canteen Facilities ', body: 'This brochure will inform you about our fooding and canteen facilities' })
    .then(getBrochures)
    .catch(error => console.log(error));
*/

// ASYNC/AWAIT //

/*
async function init() {
    await createBrochure({ title: 'Fooding and Canteen Facilities ', body: 'This brochure will inform you about our fooding and canteen facilities' });

    getBrochures();
}

init();
*/

// ASYNC AWAIT WITH FETCH //
async function fetchUsers () {
    const res = await fetch
    ('https://jsonplaceholder.typicode.com/users')

    const display = await res.json();

    console.log(display);
    
}
fetchUsers();


/*
// PROMISE.ALL //
const promise1 = Promise.resolve('Hey there, World');
const promise2 = 756;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'GoodBye World')
);
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));
*/

