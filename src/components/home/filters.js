const combinedFilters = (allServices, filters) => {
  if (filters.name === "" && filters.country === "") {
    return allServices;
  } else if (filters.name === "" && filters.country !== "") {
    const arr1 = allServices.filter((e) => e.country === filters.country);
    return arr1;
  } else if (filters.name !== "" && filters.country === "") {
    const arr1 = allServices.filter((e) => e.name === filters.name);
    return arr1;
  } else {
    const arr1 = allServices.filter(
      (e) => e.name === filters.name && e.country === filters.country
    );
    return arr1;
  }
};

export default combinedFilters