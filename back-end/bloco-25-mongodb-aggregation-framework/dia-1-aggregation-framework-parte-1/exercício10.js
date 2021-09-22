use ('erp');

db.vendas.aggregate(
  [
    {
      $match: {
        $and: [
          { dataVenda: { $gte: ISODate('2019-01-01') } }, 
          { dataVenda: { $lte: ISODate('2019-12-31') } },
        ],
      },
    },
    {
      $group: {
        _id: "$clienteId",
        valorTotal: {
          $sum: "$valorTotal",
        },
      },
    },
    {
      $sort: {
        valorTotal: -1,
      },
    },
    {
      $limit: 10,
    },
    {
      $project: {
        _id: 0,
        clienteId: "$_id",
        valorTotal: "$valorTotal",
      },
    },
  ],
);
