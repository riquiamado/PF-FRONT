const filter = (allServices, filters) => {
  var arr = allServices.sort(function (a, b) {
    if (a.average > b.average) return -1;
    if (b.average > a.average) return 1;
    return 0;
  });
  switch (true) {
    case filters.name === "" && filters.country === "":
      return arr;
    case filters.name === "" && filters.country !== "": {
      const arr1 = arr.filter((e) => e.country === filters.country);
      return arr1;
    }
    case filters.name !== "" && filters.country === "": {
      const arr1 = arr.filter((e) => e.name === filters.name);
      return arr1;
    }
    default: {
      const arr1 = arr.filter(
        (e) => e.name === filters.name && e.country === filters.country
      );
      return arr1;
    }
  }
};

const orderPrice = (arr, price) => {
  if (price === "highest") {
    return arr.sort(function (a, b) {
      if (a.price > b.price) {
        return -1;
      }
      if (b.price > a.price) {
        return 1;
      }
      return 0;
    });
  }

  if (price === "lowest") {
    return arr.sort(function (a, b) {
      if (a.price > b.price) {
        return 1;
      }
      if (b.price > a.price) {
        return -1;
      }
      return 0;
    });
  }
};

const combinedFilters = (allServices, filters) => {
  const arr1 = filter(allServices, filters);
  if (filters.price === "") {
    return arr1;
  } else {
    const arr2 = orderPrice(arr1, filters.price);
    return arr2;
  }
};

export default combinedFilters;
