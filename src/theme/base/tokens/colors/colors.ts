import { MantineColorsTuple, MantineColor, MantinePrimaryShade } from '@mantine/core';

const colors: Record<string, MantineColorsTuple> = {
  /* 
    Color tokens start with 0 index reference like brand.0, gray.0, blue.0.
    Every color array must include 10 items at least.
  */

  brand: [
    "#E6F3FF", // 0
    "#CCE7FF", // 1 
    "#99CFFF", // 2
    "#66B7FF", // 3
    "#339FFF", // 4
    "#0087FF", // 5
    "#0066CC", // 6
    "#004C99", // 7
    "#003366", // 8
    "#001933", // 9
  ],
  red: [
    "#f00", // 0
    "#f01", // 1 
    "#f02", // 2
    "#f03", // 3
    "#f04", // 4
    "#f05", // 5
    "#f06", // 6
    "#f07", // 7
    "#f08", // 8
    "#f09", // 9
  ],
  gray: [
    "#F9FAFB", // 0
    "#F3F4F6", // 1
    "#E5E7EB", // 2
    "#D1D5DB", // 3
    "#9CA3AF", // 4
    "#6B7280", // 5
    "#4B5563", // 6
    "#374151", // 7
    "#1F2937", // 8
    "#111827", // 9
  ]
};

export const primaryColor: MantineColor = 'brand';
export const primaryShade: MantinePrimaryShade = {
  light: 6,
  dark: 6
};

export default colors;
