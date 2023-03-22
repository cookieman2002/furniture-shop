import { Menu, Transition } from "@headlessui/react";
import { useState } from "react";

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const image = <img src="https://assets.petco.com/petco/image/upload/f_auto,q_auto/green-tree-frog-care-sheet-hero" alt=""/>
    return ( <>
    <Menu as="nav" open={isOpen}>
        <Menu.Button>
        more
        </Menu.Button>
        <Transition>

        </Transition>
        <Menu.Items>
        <Menu.Item>
        {image}
        </Menu.Item>
        </Menu.Items>
    </Menu>
    
    </> );
}
 
export default BurgerMenu;