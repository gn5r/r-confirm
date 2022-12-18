import { CSSProperties } from "react";
import { isCssColor } from "@/utils/colorUtil";

type ColorValue = string | false | null | undefined;
export interface UseColor {
  colorClasses: string[];
  colorStyles: CSSProperties;
}
export interface TextColor {
  textColorClasses: string[];
  textColorStyles: CSSProperties;
}

export interface BackgroundColor {
  backgroundColorClasses: string[];
  backgroundColorStyles: CSSProperties;
}

export function useColor(colors: {
  background?: ColorValue;
  text?: ColorValue;
}): UseColor {
  const classes: string[] = [];
  const styles: CSSProperties = {};

  if (colors.background) {
    if (isCssColor(colors.background)) {
      styles.backgroundColor = colors.background;
    } else {
      classes.push(colors.background);
    }
  }

  if (colors.text) {
    if (isCssColor(colors.text)) {
      styles.color = colors.text;
      styles.caretColor = colors.text;
    } else {
      classes.push(colors.text);
    }
  }

  return { colorClasses: classes, colorStyles: styles };
}

export function useTextColor(
  props: Record<string, ColorValue>,
  name?: string
): TextColor {
  const colors = { text: name ? props[name] : null };
  const { colorClasses, colorStyles } = useColor(colors);
  return { textColorClasses: colorClasses, textColorStyles: colorStyles };
}

export function useBackgroundColor(
  props: Record<string, ColorValue>,
  name?: string
): BackgroundColor {
  const colors = { background: name ? props[name] : null };
  const { colorClasses, colorStyles } = useColor(colors);
  return {
    backgroundColorClasses: colorClasses,
    backgroundColorStyles: colorStyles,
  };
}
