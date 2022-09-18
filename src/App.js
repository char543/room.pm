import "./App.css";

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
			<div className="flex max-w-[80vw] max-h-[80vh]">
				<img
					className="p-12 max-h-[80vh]"
					src="room.jpg"
					alt="room"
				></img>
			</div>
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
			<span
				className="hidden"
				data-sumome-listbuilder-embed-id="386f0bb7e24496d78314c6cff82c1f55cdc8b168df20e5ab5bb2685b24c3692c"
			></span>
		</div>
	);
}

export default App;
