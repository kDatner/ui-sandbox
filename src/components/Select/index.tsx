import { useSelect, UseSelectProps } from "downshift";
import { constFalse } from "@effect/data/Function";
import { ArrowDown } from "./ArrowIcon";

export interface SelectFullProps<A> extends UseSelectProps<A> {
  disabled?: boolean | undefined;
  isItemDisabled?(item: A): boolean;
  getItemKey(item: A): string;
  getItemTitle(item: A): string;
  getItemSubtitle(item: A): string;
}

export function SelectFull<A>(props: SelectFullProps<A>) {
  const {
    disabled,
    isItemDisabled = constFalse,
    getItemKey,
    getItemTitle,
    getItemSubtitle,
    items,
    ...selectProps
  } = props;
  const {
    getToggleButtonProps,
    getItemProps,
    selectedItem,
    isOpen,
    getMenuProps,
    highlightedIndex,
  } = useSelect({ items, ...selectProps });

  return (
    <div>
      <button
        data-filled={Boolean(selectedItem)}
        className="h-8 p-2 w-full pl-3 text-start bg-black text-text-secondary ui-filled:enabled:text-white disabled:text-shade-500 flex place-items-center border box-border border-shade-500 hover:border-text-primary disabled:border-shade-400 active:border-text-primary cursor-pointer rounded disabled:cursor-not-allowed"
        {...getToggleButtonProps({
          disabled,
        })}
      >
        <span className="grow text-sm">
          {selectedItem ? getItemTitle(selectedItem) : "Label"}
        </span>
        <span>
          <ArrowDown className="h-4 w-4" />
        </span>
      </button>
      <ul
        className="absolute w-72 bg-white mt-1 shadow-md max-h-80 overflow-auto p-0 aria-hidden:hidden"
        {...getMenuProps()}
      >
        {isOpen &&
          items.map((item, index) => (
            <li
              data-highlighted={highlightedIndex === index}
              className="ui-highlighted:bg-blue-300 ui-selected:font-bold py-2 px-3 shadow-sm flex flex-col"
              key={getItemKey(item)}
              {...getItemProps({
                item,
                index,
                disabled: isItemDisabled(item as A),
              })}
            >
              <span>{getItemTitle(item)}</span>
              <span className="text-sm text-gray-700">
                {getItemSubtitle(item)}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
}
