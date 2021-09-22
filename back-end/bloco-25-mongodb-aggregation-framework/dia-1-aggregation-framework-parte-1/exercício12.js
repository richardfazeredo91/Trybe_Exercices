use ('erp');

db.vendas.aggregate(
  [
    {
      $match: {
        $and: [
          { "dataVenda": { $gte: ISODate('2020-01-01') } },
          { "dataVenda": { $lte: ISODate('2020-12-31') } },
          { status: { $in: ["EM SEPARACAO", "ENTREGUE"] } }
        ],
      },
    },
    {
      $lookup: {
        from: 'clientes',
        localField: 'clienteId',
        foreignField: 'clienteId',
        as: 'cliente',
      },
    },
    {
      $unwind: "$cliente"
    },
    {
      $group: {
        _id: "$cliente.endereco.uf",
        ufCompras: { $sum: 1 },
      },
    },
    {
      $sort: {
        ufCompras: -1
      },
    },
    {
      $limit: 3,
    },
    {
      $project: {
        _id: 0,
        totalVendas: "$ufCompras",
        uf: "$_id",
      },
    },
  ],
);
