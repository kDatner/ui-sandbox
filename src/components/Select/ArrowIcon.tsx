import {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  SVGProps,
  memo,
} from "react";

type IconComponent = ForwardRefExoticComponent<
  Omit<
    SVGProps<SVGSVGElement> & {
      title?: string | undefined;
      titleId?: string | undefined;
    },
    "ref"
  > &
    RefAttributes<SVGSVGElement>
>;

export const ArrowDown: IconComponent = memo(
  forwardRef(({ title, titleId, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      aria-hidden="true"
      aria-labelledby={titleId}
      viewBox="0 0 16 16"
      fill="currentColor"
      stroke="none"
      {...props}
    >
      {title === undefined ? (
        <title id={titleId}>Arrow Down</title>
      ) : title ? (
        <title id={titleId}>{title}</title>
      ) : null}
      <path d="M8.0102 9.14218L11.7855 5.36392C11.8515 5.29759 11.93 5.24496 12.0165 5.20905C12.1029 5.17314 12.1956 5.15465 12.2892 5.15465C12.3828 5.15465 12.4755 5.17314 12.5619 5.20905C12.6484 5.24496 12.7269 5.29759 12.7929 5.36392C12.9256 5.4986 13 5.68008 13 5.86915C13 6.05822 12.9256 6.2397 12.7929 6.37438L8.52043 10.6549C8.39069 10.7843 8.21606 10.8586 8.03288 10.8626C7.84969 10.8665 7.67205 10.7996 7.53692 10.6758L3.22847 6.37738C3.15813 6.31215 3.10166 6.23342 3.06243 6.14588C3.0232 6.05834 3.00201 5.9638 3.00014 5.86789C2.99826 5.77198 3.01573 5.67668 3.0515 5.58767C3.08728 5.49866 3.14062 5.41778 3.20835 5.34985C3.27608 5.28192 3.35681 5.22834 3.44571 5.1923C3.53461 5.15626 3.62986 5.13851 3.72577 5.1401C3.82168 5.14169 3.91629 5.1626 4.00394 5.20157C4.0916 5.24054 4.1705 5.29677 4.23594 5.36691L8.0102 9.14218Z" />
    </svg>
  ))
);
ArrowDown.displayName = "ArrowDown";
