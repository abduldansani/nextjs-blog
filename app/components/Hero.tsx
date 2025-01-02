import { IoSearch } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="container py-10 md:py-16 text-center space-y-5 lg:space-y-10">
      <h1 className="">Lorem ipsum dolor sit amet.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        assumenda minus numquam? Rerum sunt dolores saepe, qui libero iusto
        velit enim suscipit, harum, temporibus eos alias labore officia
        explicabo iste?
      </p>
      <form className=" rounded-full py-2 px-4 flex items-center border-blue2 w-full max-w-xl has-[input:focus-within]:border-blue1 border-2 justify-between mx-auto">
        <input
          type="text"
          placeholder="Search this blog"
          className="flex-1 w-2/3 max-sm:max-w-[250px] focus:outline-none bg-transparent focus:bg-transparent py-2 px-4 rounded-full"
        />
        <IoSearch className="shrink-0 size-8 cursor-pointer font-extralight text-blue2 hover:text-blue1" />
      </form>
    </div>
  );
};

export default Hero;
