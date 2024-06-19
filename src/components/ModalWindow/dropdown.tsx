"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsCart } from "react-icons/bs";
import { IoMdWallet } from "react-icons/io";

export function Dropdown() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="bg-transparent rounded-none border-none text-red-400 text-2xl hover:bg-transparent hover:text-red-400 mt-1"
      >
        <Button variant="outline">
          <span>
            <IoMdWallet />
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 glassmorphism border-2 border-red-400 mt-4 mr-4">
        <DropdownMenuLabel className="text-red-400 text-center text-2xl">
          Existing Pokemons
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="p-4">
          {/* Cart item 1 */}
          <div className="flex flex-col mb-5">
            <div className="flex flex-col items-center justify-center mb-4 border-2  p-3 glassmorphism">
              <div className="flex flex-col items-center justify-center space-x-4">
                <img
                  src="/png-image.png"
                  alt="Item 1"
                  className="w-25 h-25 rounded-md"
                />
                <div>
                  <p className="text-white mt-3 font-semibold text-xl">
                    Charizard
                  </p>
                </div>
              </div>
            </div>
            <button className="border-2 border-red-400 p-1 text-white font-bold px-4 hover:bg-red-300 hover:text-black mx-16 ">
              Buy Booster
            </button>   
              </div>
          {/* Cart item 2 */}

          {/* Total */}
          {/* <div className="flex justify-between border-t pt-4">
            <p className="font-semibold">Total</p>
            <p className="text-red-400 font-semibold">$25</p>
          </div>

          <div className="flex justify-center mt-4 ">
            <button className="border-2 border-red-400 p-1 text-white font-bold px-4 hover:bg-red-300 hover:text-black ">
              Add To Cart
            </button>
          </div> */}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
