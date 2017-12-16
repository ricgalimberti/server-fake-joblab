var faker                   = require('faker');


var flights = [];

for (var i = 1; i <= 20; i++) {
    var date = faker.date.future(1);
    var day = (date.getDay() + 1);
    var month = (date.getMonth() + 1);
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var price = faker.commerce.price(20 , 1000, 2, '€ ');

    flights.push({
        id: i,
        name: faker.random.arrayElement(['Airlines ', 'Flights ']) + faker.company.companyName(),
        shorDescription: faker.lorem.paragraph(),
        longDescription: faker.lorem.paragraphs(),
        image: faker.image.city(faker.random.number({ min: 300, max: 400 })),
        destination: faker.random.arrayElement([faker.address.city(), faker.address.country()]),
        price: price.replace('.', ','),
        departureDate: (day > 9 ? day : '0' + day) + '/' + (month > 9 ? month : '0' + month) + '/' + year,
        departureTime: (hours > 9 ? hours : '0' + hours) + ':' + (minutes > 9 ? minutes : '0' + minutes),
        departureAirport: faker.random.arrayElement(['Malpensa', 'Linate', 'Orio Al Serio']),
        arrivalAirport: 'Airport ' + faker.name.firstName() + ' ' + faker.name.lastName(),
        duration: faker.random.number({ min: 1, max: 8}) + 'h ' + faker.random.number({ min: 10, max: 59 }) + 'min'
    });
}

module.exports = flights;