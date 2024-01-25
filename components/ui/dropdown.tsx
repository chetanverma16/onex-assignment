import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";

export type DropdownProps = {
  buttonTrigger: React.ReactNode;
  openTop?: boolean;
  Items: {
    title: string;
    onClick: () => void;
  }[];
};

export default function Dropdown({
  buttonTrigger,
  Items,
  openTop,
}: DropdownProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center w-full h-10 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50">
          {buttonTrigger}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={cn(
            "absolute right-0 z-10 mt-2 w-fit origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
            openTop ? "top-10" : "bottom-10"
          )}
        >
          <div>
            {Items.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <a
                    onClick={item.onClick}
                    className={cn(
                      active
                        ? "bg-gray-100 text-gray-900 cursor-pointer"
                        : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {item.title}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
