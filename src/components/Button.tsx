import { ClassMerge } from "../utils/ClassMerge";

type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean;
  variant?: "base" | "icon" | "iconSmall";
};

const variants = {
  button: {
    base: "h-12",
    icon: "w-12 h-12",
    iconSmall: "w-10 h-10",
  },
};

export function Button({
  children,
  isLoading,
  className,
  type = "button",
  variant = "base",
  ...rest
}: Props) {
  return (
    <button
      type={type}
      disabled={isLoading}
      className={ClassMerge([
        "flex items-center justify-center bg-green-100 rounded-lg text-white cursor-pointer hover:bg-green-200 transition ease-linear disabled:opacity-50 disabled:cursor-progress ",
        variants.button[variant],
        className,
      ])}
      {...rest}
    >
      {children}
    </button>
  );
}
