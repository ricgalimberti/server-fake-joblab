var faker                   = require('faker');


var hotels = [];

for (var i = 1; i <= 20; i++) {
    hotels.push({
        id: i,
        name: faker.random.arrayElement(['hotel ', 'Hotel & Spa ', 'Resort ']) + faker.company.companyName(),
        stars: faker.random.number({ min: 1, max: 5}),
        shorDescription: faker.lorem.paragraph(),
        longDescription: faker.lorem.paragraphs(),
        image: faker.image.city(faker.random.number({ min: 300, max: 400 })),
        streetAddress: faker.address.streetAddress(),
        country: faker.address.country(),
        city: faker.address.city(),
        zipCode: faker.address.zipCode(),
        phone: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        website: 'http://www.' + faker.internet.domainName(),
        rooms: faker.random.number({ min: 100, max: 600 })
    });
}

module.exports = hotels;