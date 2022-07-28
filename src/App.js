import { useState } from 'react';
import './App.css';
import React from 'react';

function App() {

//setup useState for mailer

// const [mailerState, setMailerState] = useState({
//   email: "",
//   name: "",
//   message: "",
// });

//function to handle the state

// function handleStateChange(e) {
//   setMailerState((prevState) => ({
//     ...prevState,
//     [e.target.name]: e.target.value,
//   }));
// }

//function to post to the route

// const submitEmail = async (e) => {
// e.preventDefault();
// console.log({ mailerState });
// const response = await fetch("http://localhost:3001/send", {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify({ mailerState }),
// })
//   .then((res) => res.json())
//   .then(async (res) => {
//     const resData = await res;
//     console.log(resData);
//     if (resData.status === "success") {
//       alert("Message Sent");
//     } else if (resData.status === "fail") {
//       alert("Message failed to send");
//     }
//   })
//   .then(() => {
//     setMailerState({
//       email: "",
//       name: "",
//       message: "",
//     });
//   });
// };

  return (
    <div className="App h-screen bg-white justify-around items-center flex flex-col">
      <img className='p-12' alt='room' src='room.jpg'></img>
      {/* <div className="z-10 flex justify-center items-center flex-col text-black">
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-[280px] md:w-80">
            <label className="label">
              <span className="label-text font-semibold text-black">Enter your email address</span>
            </label>
            <form className="relative" onSubmit={submitEmail}>
              <input
                className="input input-bordered w-full pr-16 text-white bg-navGrey"
                placeholder="username@site.com"
                onChange={handleStateChange}
                name="email"
                value={mailerState.email}
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none border-none">
                Subscribe
              </button>
            </form>
          </div>
        </div> */}
<span data-sumome-listbuilder-embed-id="68c78aa33c2db037ade6454325cf5c658ee41a301485a360b828f79bca5d8e8a"></span>
    </div>
  );
}

export default App;