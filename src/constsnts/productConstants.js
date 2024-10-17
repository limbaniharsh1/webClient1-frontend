import { CLIENT } from "../routes/routeConstants";

const allPath = { HONEY: { PATH: `${CLIENT.PRODUCTS}/honey`, SLUG: "honey" } };

export const productConstants = {
  HONEY: {
    PATH: allPath.HONEY.PATH,
    TITLE: "Honey",
    SLUG: allPath.HONEY.SLUG,
    SUB_PRODUCT: {
      NATURAL_HONEY: {
        PATH: `${allPath.HONEY.PATH}/natural-honey`,
        TITLE: "natural honey",
        SLUG: "natural-honey",
      },
    },
  },
};

export const contentConstsnts = {
  CONTENT: "CONTANT",
  SPECIFICATIONS: "SPECIFICATIONS",
  INGREDIENTS: "INGREDIENTS",
  USES_AND_BENEFITS: {
    USES: "USES",
    BENEFITS: "BENEFITS",
  },
};
