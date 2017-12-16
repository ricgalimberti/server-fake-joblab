var faker                   = require('faker');


var restaurants = [];

for (var i = 1; i <= 20; i++) {
    restaurants.push({
        id: i,
        name: faker.random.arrayElement(['Restaurant ', 'Food ']) + faker.company.companyName(),
        shorDescription: faker.lorem.paragraph(),
        longDescription: faker.lorem.paragraphs(),
        image: faker.image.food(),
        photos: [faker.image.food(faker.random.number({ min: 300, max: 400 })), faker.image.food(faker.random.number({ min: 300, max: 400 })), faker.image.food(faker.random.number({ min: 300, max: 400 }))],
        streetAddress: faker.address.streetAddress(),
        country: faker.address.country(),
        city: faker.address.city(),
        zipCode: faker.address.zipCode(),
        phone: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        website: 'http://www.' + faker.internet.domainName()
    });
}

module.exports = restaurants;