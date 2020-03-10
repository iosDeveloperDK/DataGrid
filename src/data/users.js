import Faker from 'faker'

Faker.seed(777)

const makeData = id => {
  return {
    id: id,
    name: Faker.name.findName(),
    age: Faker.random.number({ min: 7, max: 60 }),
    city: Faker.address.city(),
    email: Faker.internet.email(),
    isOnline: Faker.random.boolean(),
    type: ['Admin', 'Student', 'Worker', 'Mentor'][
      Faker.random.number({ min: 0, max: 3 })
    ],
    avatar: Faker.image.avatar(),
    price: Faker.random.number({ min: -100000, max: 100000 }),
    text: Faker.lorem.paragraph(),
    car: [
      'Seat',
      'Audi',
      'BMW',
      'Opel',
      'Mazda',
      'Lexus',
      'Mercedes-Benz',
      'Kia'
    ][Faker.random.number({ min: 0, max: 7 })],
    date: Faker.date.between('2015-01-01', '2015-01-05')
  }
}

export default [...new Array(2000)].map((_, id) => makeData(id))
