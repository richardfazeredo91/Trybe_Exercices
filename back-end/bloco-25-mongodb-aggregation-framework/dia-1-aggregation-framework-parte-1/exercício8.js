use('erp');

db.vendas.aggregate(
  [
    {
      $match: {
        status: { $in: ["ENTREGUE", "EM SEPARACAO"] },
      },
    },
    {
      $group: {
        _id: "$clienteId",
        valorEmGastos: { $sum: "$valorTotal" },
      },
    },
    {
      $sort: {
        valorTotal: -1
      },
    },
    {
      $limit: 5,
    },
  ],
);
