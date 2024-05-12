export const truncateAddress = (address, addEnd=true) => {
    if (address) {
      const start = address.slice(0, 5);
      const end = address.slice(address.length - 5, address.length);
  
      return `${start}...${addEnd ? end : ""}`;
    }
  
    return "";
}