use('erp');

db.clientes.aggregate(
  [
    {
      $addFields: {
        idade: {
          $floor: {
            $divide: [
              {
                $subtract: [
                  "$$NOW",
                  "$dataNascimento",
                ],
              },
              365 * 24 * 60 * 60 * 1000,
            ],
          }
        },
      },
    },
    {
      $lookup: {
        from: 'vendas',
        localField: 'clienteId',
        foreignField: 'clienteId',
        as: 'compras',
      },
    },
    {
      $lookup: {
        from: 'vendas',
        localField: 'clienteId',
        foreignField: 'clienteId',
        as: 'compras',
      },
    },
    {
      $match: {
        "compras.dataVenda": {
          $gte: ISODate('2019-06-01'),
          $lte: ISODate('2020-03-31')
        },
      },
    },
  ],
).itcount();
