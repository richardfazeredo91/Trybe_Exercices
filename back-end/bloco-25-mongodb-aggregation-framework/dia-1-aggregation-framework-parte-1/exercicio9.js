use('erp');

db.vendas.aggregate(
  [
    {
      $group: {
        _id: "$clienteId",
        qtdCompras: { $sum: 1 },
      },
    },
    {
      $match: {
        qtdCompras: {
          $gt: 5,
        },
      },
    },
    {
      $count: "clientes",
    },
  ],
);

