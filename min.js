// Create an object with properties name, age, and gender
const person = {
    name: "Adam",
    age: 25,
    gender: "Male"
  };
  
  // Print the values of the object to the console
  console.log("Name:", person.name);
  console.log("Age:", person.age);
  console.log("Gender:", person.gender);


  //2//

  // Create an object
const per = {
  name: "Adam",
  age: 25
};

// Add a new property using dot notation
person.gender = "Male";

// Print the updated object to the console
console.log(person);

//3//
// Create an object
const pers= {
    name: "Adam",
    age: 25
  };
  
  // Add a new property using bracket notation
  person["gender"] = "Male";
  
  // Print the updated object to the console
  console.log(person);

  //4//
  {
    // Create an object
const pers= {
    name: "Adam",
    age: 25
  };
  
  // Add a new property using bracket notation
  person["gender"] = "Male";
  
  // Print the updated object to the console
  console.log(person.name);
  }


  //5//
  {

      // Create an object
const pers= {
    name: "Adam",
    age: 25
  };
  
  // Add a new property using bracket notation
  person["gender"] = "Male";
  
  // Print the updated object to the console
  console.log(person['name']);
  }

  //6//
  {
  const person = {
    name: "Adam",
    age: 25,
    gender: "male",
  };
  
  for (let property in person) {
    console.log(property + ": " + person[property]);
  }  
  }

    //7//
    {
    const person = {
        name: "Adam",
        age: 25,
        gender: "male",
      };
      const properties = Object.keys(person);
      console.log(properties)
    }

    //8//
    {

const person = {
    name: "Adam",
    age: 25,
    gender: "male"
};

// استخدام Object.values للحصول على مصفوفة بالقيم
const values = Object.values(person);

console.log(values); // الإخراج: ["Adam", 25, "male"]
console.log(values.join(" "))
    }

    //9//
{ 
const person = {
    name: "Adam",
    age: 25,
    gender: "male"
};

// استخدام Object.entries للحصول على مصفوفة بالأزواج (المفتاح-القيمة)
const entries = Object.entries(person);

console.log(entries);
// الإخراج: [["name", "Adam"], ["age", 25], ["gender", "male"]]
}


//10//
{
const person = {
    name: "Adam",
    age: 25,
    gender: "male",
  };
  
  const values = Object.values(person);
  console.log(values);
}

//11//
{
const person = {
    name: "Adam",
    age: 25,
  };
  
  const additionalInfo = {
    gender: "male",
  };
  const mergedObject = Object.assign({}, person, additionalInfo);
  console.log(mergedObject)
  }

  //12//
  {

  const person = {
    name: "Adam",
    age: 25,
  };
  Object.seal(person);
  
  person.age = 25;
  person.gender = "male";
  delete person.name;
  console.log(person);
}
