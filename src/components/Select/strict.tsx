import { useSelect, UseSelectProps } from "downshift";
import { memo, ReactElement } from "react";
import * as Data from "@effect/data/Data";
import * as Hash from "@effect/data/Hash";
import * as Equal from "@effect/data/Equal";
import { constFalse } from "@effect/data/Function";
import * as styles from "./select.css";
import { ArrowDown } from "./ArrowIcon";

export interface SelectFullProps<A> extends Omit<UseSelectProps<A>, "items"> {
  disabled?: boolean | undefined;
  readonly items: Data.Data<A[]>;
  isItemDisabled?(item: A): boolean;
  getItemTitle(item: A): string;
  getItemSubtitle(item: A): string;
}

function _SelectFull<A extends Data.Case>(props: SelectFullProps<A>) {
  const {
    disabled,
    isItemDisabled = constFalse,
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
  } = useSelect({ items, ...selectProps } as unknown as UseSelectProps<A>);

  return (
    <div>
      <button
        data-filled={Boolean(selectedItem)}
        className={styles.button}
        {...getToggleButtonProps({ disabled })}
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
              key={Hash.structure(item)}
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

// typebug with memo that swallows generics. This is safe
export const SelectFull: {
  <A>(props: SelectFullProps<A>): ReactElement | null;
} = memo(_SelectFull, (prev, after) =>
  Equal.equals(prev.items, after.items)
) as any;
