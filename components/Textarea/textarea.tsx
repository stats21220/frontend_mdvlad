import { TextareaProps } from "./textarea.props";
import styles from "./textarea.module.css";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

export const Textarea = forwardRef(
  (
    { className, ...props }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ): JSX.Element => {
    return (
      <div className={cn(styles.textareaWrapper, className)}>
        <textarea className={cn(styles.textarea, {})} ref={ref} {...props} />
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
