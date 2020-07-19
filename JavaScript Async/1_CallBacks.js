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

    function createBrochure(brochure, callback) {
        setTimeout(() => {
            brochures.push(brochure);
            callback();
        }, 2000);

    }


    createBrochure({title: 'Hostel Facilities ', body: 'This brochure will inform you about our hostel facilities'}, getBrochures);