function FONT({ weight, size }) {
  return `
              font-family: Pretendard, sans-serif;
              font-size: ${size}rem;
              font-weight: ${weight};
              `;
}

const font = {
  // 10px = 1rem
  // (예시) thin(1), extralight(2), light(3), regular(4), medium(5), semibold(6), bold(7), extrabold(8), black(9)

  regular_09: FONT({ weight: 400, size: 0.9 }),
  regular_10: FONT({ weight: 400, size: 1.0 }),
  regular_16: FONT({ weight: 400, size: 1.6 }),
  medium_16: FONT({ weight: 500, size: 1.6 }),
  bold_16: FONT({ weight: 700, size: 1.6 }),
  bold_20: FONT({ weight: 700, size: 2.0 }),
  bold_24: FONT({ weight: 700, size: 2.4 }),
};

export default font;
