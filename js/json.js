const user = {
  name: "al-amin",
  district: "pirojpur",
  job: "business",
  salary: 60000,
  phoneNumber: "0178331221",
  isMarried: true,
  isFather: true,
  isGrandFather: false,
};

console.log(user);
const userString = JSON.stringify(user);
console.log(userString);
const userObject = JSON.parse(userString);
console.log(userObject);

// সর্ভার সাইডে ডাটা পাঠাতে ডাটা স্ট্রিং করে পাঠাতে হয় এজন্য JSON.stringify(user) ব্যবহার করা হয়।

// স্ট্রিং ডাটাকে অবেজেক্ট হিসেবে পেতে JSON.parse(stringData) করতে হয়।
