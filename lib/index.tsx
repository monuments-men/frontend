export const addressShortFormat = (address: string, amount?: number) => {
  if (!amount) amount = 4;
  return (
    address.slice(0, amount) +
    "..." +
    address.slice(address.length - amount, address.length)
  );
};
