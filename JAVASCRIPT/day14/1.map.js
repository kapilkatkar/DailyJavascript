const p = [
  {
    id: 1,
    name: "John Doe",
    city: "New York",
    state: "New York",
    isActive: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    city: "Los Angeles",
    state: "California",
    isActive: false,
  },
  {
    id: 3,
    name: "Michael Johnson",
    city: "Chicago",
    state: "Illinois",
    isActive: true,
  },
  {
    id: 4,
    name: "Emily Brown",
    city: "Houston",
    state: "Texas",
    isActive: true,
  },
];

const p2 = p.map((elem) => ({
  ...elem,
  isActive: elem.isActive === true ? "Available" : "Not Available",
}));
console.log({ p, p2 });
//

//p3
const p3 = p.map((elem) => {
  elem.isActive === true ? "Available" : "Not Available";
  return elem.isActive;
});
console.log({ p, p2, p3 });

//
const result = p.map((item) => ({
  ...item,
  isActive: item.isActive ? "Available" : "Not Available",
}));
console.log({ p, p2, p3, result });
