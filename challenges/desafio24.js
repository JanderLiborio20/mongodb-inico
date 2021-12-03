// https://github.com/tryber/sd-013-a-mongodb-dataflights/pull/56/files ajuda de exemplo
db.voos.findOne(
  {
    litrosCombustivel: {
      $exists: true,
      $not: { $gt: 600 },
      $nin: ["GOL", "AZUL"],
    },
  },
  { _id: false, vooId: true, "empresa.nome": true, litrosCombustivel: true },
);