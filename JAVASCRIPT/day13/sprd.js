const p = {
  name: "Rahul",
  city: "Pune",
  details: {
    isMarried: false,
    isEngaged: false,
  },
};

p2 = { ...p };

p2.details.isEngaged = true;
console.log("p.details.isEngaged", p.details.isEngaged);
console.log("p2.details.isEngaged", p2.details.isEngaged);
