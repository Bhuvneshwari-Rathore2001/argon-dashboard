import { useState } from 'react';

// import { useEffect, useState } from 'react';
const AboutUs = () => {
  // useState
  // const [count, setCount] = useState(0);
  // function Inc() {
  //   setCount(count + 1);
  // }
  // function Dec() {
  //   setCount(count - 1);
  // }

  // useEffect
  // useEffect(() => {
  //   alert('hello side effect!');
  //   return () => alert('goodbye component');
  // });

  const initialValues = { username: '', email: '', password: '' };
  const [formValues, setFormValues] = useState(initialValues);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // code of book and author

  const initialValue = { book: '', author: '' };
  const [data, setData] = useState(initialValue);

  const addData = () => {
    setData([...data, { book, author }]);
    data('');
  };

  return (
    <div className="bg-black text-white font-poppins p-14 ">
      {/* useState hook */}
      {/* <div className="flex gap-2 max-w-5xl m-auto items-center justify-center">
        <button onClick={Inc} className="bg-blue-300 p-3 text-sm ">
          Inc
        </button>
        <div className="text-black bg-white p-3 text-sm"> {count}</div>
        <button onClick={Dec} className="bg-blue-300 p-3 text-sm ">
          Dec
        </button>
      </div> */}

      <form onSubmit={handleSubmit}>
        <div className="bg-inputGradient w-2/5 p-12 h-full rounded-3xl">
          <div className="flex flex-col gap-5">
            <div className="font-bold text-2xl">Login Form</div>
            <div className="font-normal text-base">Username</div>
            <input
              name="username"
              onChange={handleChange}
              value={formValues.username}
              type="text"
              placeholder="Username"
              className="w-full bg-transparent h-12 border-white border placeholder:text-blue-500 px-2 text-blue-500"
            />
            <div className="font-normal text-base">Email</div>
            <input
              value={formValues.email}
              type="email"
              placeholder="Email"
              className="w-full bg-transparent h-12 border-white border placeholder:text-blue-500 px-2 text-blue-500"
            />
            <div className="font-normal text-base">Password</div>
            <input
              value={formValues.password}
              type="password"
              placeholder="Password"
              className="w-full bg-transparent h-12 border-white border placeholder:text-blue-500 px-2 text-blue-500"
            />
          </div>
          <div className="flex items-center mt-5 justify-center">
            <button className="px-5 py-2 bg-[#6D95FC] text-[#111728] font-medium text-base w-fit">
              Submit
            </button>
          </div>
        </div>
      </form>

      <div className="flex gap-5">
        <input
          value={data.book}
          type="text"
          name="book"
          className="w-full bg-transparent h-12 border-white border placeholder:text-blue-500 px-2 text-blue-500"
          placeholder=" Book"
          onChange={(event) => setData(event.target.value)}
        />
        <input
          value={data.author}
          type="text"
          className="w-full bg-transparent h-12 border-white border placeholder:text-blue-500 px-2 text-blue-500"
          placeholder=" Author Name"
          name="author"
          onChange={(event) => setData(event.target.value)}
        />
        <button
          className="px-5 py-2 bg-[#6D95FC] text-[#111728] font-medium text-base w-fit"
          onClick={addData}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
