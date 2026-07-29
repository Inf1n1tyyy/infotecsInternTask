const orders = ["none", "asc", "desc"];

export const getNextOrder = (currentOrder) => {
  const currentIndex = orders.indexOf(currentOrder);
  const nextIndex = (currentIndex + 1) % orders.length;

  return orders[nextIndex];
};
