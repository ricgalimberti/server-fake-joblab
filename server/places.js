var faker                   = require('faker');


var places = [];

for (var i = 0; i < 40; i++) {
    places.push({
        id: faker.random.uuid(),
        name: faker.address.city(),
        shorDescription: faker.lorem.paragraph(),
        longDescription: faker.lorem.paragraphs(),
        photos: [faker.image.nightlife(), faker.image.city(), faker.image.city()],
        country: faker.address.country(),
        longitude: faker.address.longitude(),
        latitude: faker.address.latitude()
    });
}

module.exports = places;