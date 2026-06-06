const pagination = async (
  model,
  page,
  limit,
  filter = {},
  sort = {}
) => {
  const skip = (page - 1) * limit;
const [totalItems, results] = await Promise.all([
    model.countDocuments(filter),
    model.find(filter).sort(sort).skip(skip).limit(limit)
]);
return {
    totalItems,
    totalPages: Math.ceil(totalItems / limit),
    currentPage: page,
    data: results
};
};
export default pagination;