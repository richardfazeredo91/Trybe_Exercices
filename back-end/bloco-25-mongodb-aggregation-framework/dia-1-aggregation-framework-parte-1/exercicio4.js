use('erp');

db.clientes.aggregate(
  [
    {
      $match: {
        "endereco.uf": "SC",
      },
    },
    {
      $group: {
        _id: "$endereco.uf",
        total: { $sum: 1 },
      }
    },
    {
      $project: {
        _id: 1,
        total: '$total',
      }
    }
  ],
);
