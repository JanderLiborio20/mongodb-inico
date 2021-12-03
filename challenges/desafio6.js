db.voos.find({ vooId: 756807 },
  { 
    "empresa.sigla": true, 
    _id: false,
    "empresa.nome": true,
    passageiros: true,
  });