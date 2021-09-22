use ('erp');

db.vendas.aggregate(
  [
    {
      $match: {
        $and: [
          { dataVenda: { $gte: ISODate('2020-01-01') } }, 
          { dataVenda: { $lte: ISODate('2020-03-31') } },
          { status: { $in: ["EM SEPARACAO", "ENTREGUE"] } },
        ],
      },
    },
    {
      $group: {
        _id: "$clienteId",
        qtdCompras: {
          $sum: 1,
        },
      },
    },
    {
      $match: {
        qtdCompras: { $lt: 3 },
      },
    },
    {
      $count: "qtdClientes",
    },
  ],
);
