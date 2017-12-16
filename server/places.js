var faker                   = require('faker');


var places = [];

for (var i = 1; i <= 20; i++) {
    places.push({
        id: i,
        name: faker.address.city(),
        shorDescription: faker.lorem.paragraph(),
        longDescription: faker.lorem.paragraphs(),
        photos: [faker.image.nightlife(faker.random.number({ min: 300, max: 400 })), faker.image.city(faker.random.number({ min: 300, max: 400 })), faker.image.city(faker.random.number({ min: 300, max: 400 }))],
        country: faker.address.country(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude()
    });
}

module.exports = places;