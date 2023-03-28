import { useSelect, UseSelectProps } from "downshift";
import { constFalse } from "@effect/data/Function";
import * as styles from "./select.css";
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
    // useSelect accepts the mutable type of A[] instead of ReadonlyArray<A>
  } = useSelect({ items, ...selectProps } as UseSelectProps<A>);

  return (
    <div>
      <button
        data-filled={Boolean(selectedItem)}
        className={styles.button}
        {...getToggleButtonProps({
          disabled,
        })}
      >
        <span className={styles.label}>
          {selectedItem ? getItemTitle(selectedItem) : "Label"}
        </span>
        <span>
          <ArrowDown className={styles.icon} />
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
