var faker                   = require('faker');


var flights = [];

for (var i = 0; i < 40; i++) {
    flights.push({
        id: faker.random.uuid(),
        name: faker.company.companyName(),
        stars: faker.random.number({ min: 1, max: 5}),
        shorDescription: faker.lorem.paragraph(),
        longDescription: faker.lorem.paragraphs(),
        image: faker.image.business(),
        streetAddress: faker.address.streetAddress(),
        country: faker.address.country(),
        city: faker.address.city(),
        zipCode: faker.address.zipCode()
    });
}

module.exports = flights;