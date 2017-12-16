var faker                   = require('faker');


var hotels = [];

for (var i = 0; i < 40; i++) {
    hotels.push({
        id: faker.random.uuid(),
        name: 'Hotel' + faker.company.companyName(),
        stars: faker.random.number({ min: 1, max: 5}),
        shorDescription: faker.lorem.paragraph(),
        longDescription: faker.lorem.paragraphs(),
        image: faker.image.business(),
        streetAddress: faker.address.streetAddress(),
        country: faker.address.country(),
        city: faker.address.city(),
        zipCode: faker.address.zipCode(),
        phone: faker.phone.phoneNumber(),
        email: faker.internet.email()
    });
}

module.exports = hotels;