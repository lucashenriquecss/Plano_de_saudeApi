module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Precos', [
        {
            codigo: 1,
            minimo_vidas: 1,
            faixa1: 10.00,
            faixa2: 12,
            faixa3: 15.00,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            codigo: 1,
            minimo_vidas: 4,
            faixa1: 9,
            faixa2: 11.00,
            faixa3: 14.00,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            codigo: 2,
            minimo_vidas: 1,
            faixa1: 20.00,
            faixa2: 30,
            faixa3: 40.00,
            createdAt: new Date(),
            updatedAt: new Date()
            
          },
          {
            codigo: 3,
            minimo_vidas: 1,
            faixa1: 30,
            faixa2: 40.00,
            faixa3: 50,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            codigo: 4,
            minimo_vidas: 1,
            faixa1: 40.00,
            faixa2: 50.00,
            faixa3: 60,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            codigo: 5,
            minimo_vidas: 1,
            faixa1: 50,
            faixa2: 60.00,
            faixa3: 70.00,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            codigo: 6,
            minimo_vidas: 1,
            faixa1: 60,
            faixa2: 70,
            faixa3: 80,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            codigo: 6,
            minimo_vidas: 2,
            faixa1: 55.00,
            faixa2: 65.00,
            faixa3: 75.00,
            createdAt: new Date(),
            updatedAt: new Date()
          }    
    ], {});
    },
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Precos', null, {});
    }
  };