export function getSize(size?: string | number | null): number | undefined {
  if (size === null || size === undefined || size === "") {
    return undefined;
  }
  return Number(String(size).replace(/[^0-9]/g, ""));
}

export function convertToUnit(
  size?: string | number | null,
  unit = "px"
): string | number {
  if (size === null || size === undefined || size === "") {
    return "";
  }
  return `${getSize(size)}${unit}`;
}
