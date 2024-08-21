const Input = () => {
  return (
    <form>
      <div className="grid grid-cols-2 mb-4">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="email"
          className=" border border-gray-950 text-gray-950 bg-gray-100 p-2 min-w-[200px] placeholder-gray-950 focus:outline-none focus:border-gray-500 focus:ring-0 placeholder-hidden"
        />
        <button className="border border-gray-950 text-gray-950 ">
          SUBSCRIBE
        </button>
      </div>
    </form>
  );
};

export { Input };
