let paymentstatus = false;
let obtainmark = 85;

function enrollment() {
  console.log("Your course enrollment is in progress");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (paymentstatus) {
        resolve();
      } else {
        reject("Course Enrollment Failed");
      }
    }, 2000);
  });
  return promise;
}

function progress() {
  console.log("Course on Progress......");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (obtainmark >= 80) {
        resolve("A+ mark");
      } else {
        reject("you couldn't get the certificate");
      }
    }, 3000);
  });
  return promise;
}

function getcertificate() {
  console.log("Prepering Your Certificate");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Congrats ! you got the certificaate");
    }, 1000);
  });

  return promise;
}

async function course() {
  try {
    await enrollment();
    const progress_msg = await progress();
    console.log(progress_msg);
    const getcertificate_msg = await getcertificate();
    console.log(getcertificate_msg);
  } catch (error) {
    console.log(error);
  }
}
course();

// enrollment()
//   .then(progress)
//   .then(function (val) {
//     console.log(val);
//   })
//   .then(getcertificate)
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

//----------------------------------------------------------------------------------
// Phone Search
// URL Format: https://openapi.programming-hero.com/api/phones?search=${searchText}

// Example: https://openapi.programming-hero.com/api/phones?search=iphone

// Phone detail url:
// URL Format: https://openapi.programming-hero.com/api/phone/${id}

// Example: https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089
