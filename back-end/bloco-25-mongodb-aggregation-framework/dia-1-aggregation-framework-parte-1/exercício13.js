use ('erp');

db.vendas.aggregate(
  [
    {
      $match: {
        $and: [
          { "dataVenda": { $gte: ISODate('2019-01-01') } },
          { "dataVenda": { $lte: ISODate('2019-12-31') } },
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
        mediaVendas: { $avg: "$valorTotal" },
        ufTotalVendas: { $sum: 1 },
      },
    },
    {
      $sort: {
        _id: 1
      },
    },
    {
      $project: {
        _id: 0,
        uf: "$_id",
        mediaVendas: "$mediaVendas",
        totalVendas: "$ufTotalVendas",
      },
    },
  ],
);
