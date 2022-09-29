module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Planos', [
      {
        registro: "reg1",
        nome: "Bitix Customer Plano 1",
        codigo_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        registro: "reg2",
        nome: "Bitix Customer Plano 2",
        codigo_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        registro: "reg3",
        nome: "Bitix Customer Plano 3",
        codigo_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        registro: "reg4",
        nome: "Bitix Customer Plano 4",
        codigo_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        registro: "reg5",
        nome: "Bitix Customer Plano 5",
        codigo_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        registro: "reg6",
        nome: "Bitix Customer Plano 6",
        codigo_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },
down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Planos', null, {});
  }
};