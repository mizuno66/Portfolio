type SizeType = {
  readonly FONT: { SMALL: number; NORMAL: number; LARGE: number };
  readonly HEADER_TITLE: number;
};

const Size: SizeType = {
  FONT: {
    SMALL: 12,
    NORMAL: 14,
    LARGE: 16,
  },
  HEADER_TITLE: 60,
};

export default Size;
