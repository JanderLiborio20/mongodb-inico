// https://github.com/tryber/sd-013-a-mongodb-dataflights/pull/60/files ajuda do repositorio
const nomeEmpresa = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne(
  {
    empresa: nomeEmpresa,
    totalVoosDomesticos: db.voos.count(
      {
        "empresa.nome": nomeEmpresa,
        natureza: "Doméstica",
      },
    ),
  },
);

db.resumoVoos.find({
  empresa: nomeEmpresa,
}, { _id: false });