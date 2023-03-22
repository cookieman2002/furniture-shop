import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import { HiSearch } from "react-icons/hi";
const Navbar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  function focusHandler(event) {
    if (isFocused && value === "") {
      setIsFocused(false);
    } else {
      setIsFocused(true);
    }
  }
  return (
    <nav className="flex items-center gap-5 justify-between">
      <h1 className="font-bold text-xl">Funiro.</h1>
      <div className="flex flex-col items-center ">
        <button className="peer px-5 py-2 relative ">Products</button>

        <div
          className="hidden peer-hover:flex hover:flex 
        w-[200px]
        flex-col bg-white drop-shadow-lg"
        >
          <span>item</span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <button className="peer px-5 py-2 ">Rooms</button>

        <div
          className="hidden peer-hover:flex hover:flex
        w-[200px]
        flex-col bg-white drop-shadow-lg"
        >
          <span>item</span>
        </div>
      </div>
      <a href="..">Insparations </a>
      <label className="relative">
        <HiSearch
          className={
            isFocused
              ? "absolute ml-3 text-xs transition-all"
              : "absolute mt-3 ml-3 transition-all text-blue-600"
          }
        />
        <input
          onChange={(e) => setValue(e.target.value)}
          onFocus={focusHandler}
          onBlur={focusHandler}
          value={value}
          type="text"
        />
      </label>
      <div className="flex items-center gap-5">
        <AiOutlineShoppingCart className="text-2xl" />
        <AiFillHeart className="text-2xl" />
        <img
          className="w-16 h-16 rounded-full"
          src="https://assets.petco.com/petco/image/upload/f_auto,q_auto/green-tree-frog-care-sheet-hero"
          alt="Profile"
        />
      </div>
    </nav>
  );
};

export default Navbar;
