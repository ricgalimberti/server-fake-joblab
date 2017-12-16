var faker                   = require('faker');


var restaurants = [];

for (var i = 0; i < 40; i++) {
    restaurants.push({
        id: faker.random.uuid(),
        name: faker.random.arrayElement(['Restaurant ', 'Food ']) + faker.company.companyName(),
        shorDescription: faker.lorem.paragraph(),
        longDescription: faker.lorem.paragraphs(),
        image: faker.image.food(),
        photos: [faker.image.food(), faker.image.food(), faker.image.food()],
        streetAddress: faker.address.streetAddress(),
        country: faker.address.country(),
        city: faker.address.city(),
        zipCode: faker.address.zipCode(),
        phone: faker.phone.phoneNumber(),
        email: faker.internet.email()
    });
}

module.exports = restaurants;