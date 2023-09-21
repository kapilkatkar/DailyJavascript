const profile = {
  name: "Sanket",
  city: "Pune",
  state: "MH",
};

let profile1 = { ...profile };
console.log("profile1", profile1);
profile.name = "kapil";
console.log(profile.name);
console.log(profile1.name);
