use('erp');

db.clientes.aggregate(
  [
    {
      $group: {
        _id: "$sexo",
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
