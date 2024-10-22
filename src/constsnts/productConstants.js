import { CLIENT } from "../routes/routeConstants";

const allPath = {
  HONEY: { PATH: `${CLIENT.PRODUCTS}/honey`, SLUG: "honey" },
  COTTON_BALES: {
    PATH: `${CLIENT.PRODUCTS}/cotton-bales`,
    SLUG: "cotton-bales",
  },
  PULSES: {
    PATH: `${CLIENT.PRODUCTS}/pulses`,
    SLUG: "pulses",
  },
  OIL_SEEDS: {
    PATH: `${CLIENT.PRODUCTS}/oil-seeds`,
    SLUG: "oil-seeds",
  },
  SPICES: {
    PATH: `${CLIENT.PRODUCTS}/spices`,
    SLUG: "spices",
  },
  DRY_FRUITS: {
    PATH: `${CLIENT.PRODUCTS}/dry-fruits`,
    SLUG: "dry-fruits",
  },
  GRAINS: {
    PATH: `${CLIENT.PRODUCTS}/grains`,
    SLUG: "grains",
  },
  COSMATIC: {
    PATH: `${CLIENT.PRODUCTS}/cosmatic`,
    SLUG: "cosmatic",
  },
};

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
  COTTON_BALES: {
    PATH: allPath.COTTON_BALES.PATH,
    TITLE: "Cotton Bales",
    SLUG: allPath.COTTON_BALES.SLUG,
    SUB_PRODUCT: {
      COTTON_BALES: {
        PATH: `${allPath.COTTON_BALES.PATH}/cotton-bales`,
        TITLE: "cotton bales",
        SLUG: "cotton-bales",
      },
    },
  },
  PULSES: {
    PATH: allPath.PULSES.PATH,
    TITLE: "pulses",
    SLUG: allPath.PULSES.SLUG,
    SUB_PRODUCT: {
      SOYABEAN: {
        PATH: `${allPath.PULSES.PATH}/soyabean`,
        TITLE: "soyabean",
        SLUG: "soyabean",
      },
      PUFFED_RISE: {
        PATH: `${allPath.PULSES.PATH}/puffed-rice`,
        TITLE: "Puffed rice",
        SLUG: "puffed-rice",
      },
      GREEN_GRAM: {
        PATH: `${allPath.PULSES.PATH}/green-gram`,
        TITLE: "green gram",
        SLUG: "green-gram",
      },
      BLACK_GRAM: {
        PATH: `${allPath.PULSES.PATH}/black-gram`,
        TITLE: "black gram",
        SLUG: "black-gram",
      },
      BEATEN_RICE: {
        PATH: `${allPath.PULSES.PATH}/beaten-rice`,
        TITLE: "beaten rice",
        SLUG: "beaten-rice",
      },
    },
  },
  OIL_SEEDS: {
    PATH: allPath.OIL_SEEDS.PATH,
    TITLE: "oil seeds",
    SLUG: allPath.OIL_SEEDS.SLUG,
    SUB_PRODUCT: {
      SOYABEAN: {
        PATH: `${allPath.OIL_SEEDS.PATH}/soyabean`,
        TITLE: "soyabean",
        SLUG: "soyabean",
      },
      SEASAME: {
        PATH: `${allPath.OIL_SEEDS.PATH}/seasame`,
        TITLE: "seasame",
        SLUG: "seasame",
      },
      GROUNDNUT: {
        PATH: `${allPath.OIL_SEEDS.PATH}/groundnut`,
        TITLE: "groundnut",
        SLUG: "groundnut",
      },
      PEANUT: {
        PATH: `${allPath.OIL_SEEDS.PATH}/peanut`,
        TITLE: "peanut",
        SLUG: "peanut",
      },
    },
  },
  SPICES: {
    PATH: allPath.SPICES.PATH,
    TITLE: "spices",
    SLUG: allPath.SPICES.SLUG,
    SUB_PRODUCT: {
      CHILI_PEPPER: {
        PATH: `${allPath.SPICES.PATH}/chili-pepper`,
        TITLE: "chili papper",
        SLUG: "chili-papper",
      },
      CUMIN: {
        PATH: `${allPath.SPICES.PATH}/cumin`,
        TITLE: "cumin",
        SLUG: "cumin",
      },
      GARLIC_POWDER: {
        PATH: `${allPath.SPICES.PATH}/garlic-powder`,
        TITLE: "garlic powder",
        SLUG: "garlic-powder",
      },
      FENNEL_SEEDS: {
        PATH: `${allPath.SPICES.PATH}/fennel-seeds`,
        TITLE: "fennel seeds",
        SLUG: "fennel-seeds",
      },
      CAROM_SEEDS: {
        PATH: `${allPath.SPICES.PATH}/carom-seeds`,
        TITLE: "carom seeds",
        SLUG: "carom-seeds",
      },
      GREEN_CARDAMON: {
        PATH: `${allPath.SPICES.PATH}/green-cardamom`,
        TITLE: "green cardamom",
        SLUG: "green-cardamom",
      },
      PEPPERCORNS: {
        PATH: `${allPath.SPICES.PATH}/peppercorns`,
        TITLE: "peppercorns",
        SLUG: "peppercorns",
      },
      CLOVE: {
        PATH: `${allPath.SPICES.PATH}/clove`,
        TITLE: "clove",
        SLUG: "clove",
      },
      BAY_LEAF: {
        PATH: `${allPath.SPICES.PATH}/bay-leaf`,
        TITLE: "bay leaf",
        SLUG: "bay-leaf",
      },
      SUGAR_CANE: {
        PATH: `${allPath.SPICES.PATH}/sugar-cane`,
        TITLE: "Sugar cane / jaggery",
        SLUG: "sugar-cane",
      },
    },
  },
  DRY_FRUITS: {
    PATH: allPath.DRY_FRUITS.PATH,
    TITLE: "dry fruits",
    SLUG: allPath.DRY_FRUITS.SLUG,
    SUB_PRODUCT: {
      RAISINS: {
        PATH: `${allPath.DRY_FRUITS.PATH}/raisins`,
        TITLE: "raisins",
        SLUG: "raisins",
      },
      BLACK_RAISINS: {
        PATH: `${allPath.DRY_FRUITS.PATH}/black-raisins`,
        TITLE: "black raisins",
        SLUG: "black-raisins",
      },
      CASHEW: {
        PATH: `${allPath.DRY_FRUITS.PATH}/cashew`,
        TITLE: "cashew",
        SLUG: "cashew",
      },
      POPPY_SEEDS: {
        PATH: `${allPath.DRY_FRUITS.PATH}/poppy-seeds`,
        TITLE: "poppy seeds",
        SLUG: "poppy-seeds",
      },
    },
  },
  GRAINS: {
    PATH: allPath.GRAINS.PATH,
    TITLE: "grains",
    SLUG: allPath.GRAINS.SLUG,
    SUB_PRODUCT: {
      MILLET: {
        PATH: `${allPath.GRAINS.PATH}/millet`,
        TITLE: "millet",
        SLUG: "millet",
      },
      RICE: {
        PATH: `${allPath.GRAINS.PATH}/rice`,
        TITLE: "rice",
        SLUG: "rice",
      },
      WHEAT: {
        PATH: `${allPath.GRAINS.PATH}/wheat`,
        TITLE: "wheat",
        SLUG: "wheat",
      },
      BLACK_WHEAT: {
        PATH: `${allPath.GRAINS.PATH}/black-wheat`,
        TITLE: "black wheat",
        SLUG: "black-wheat",
      },
      SORGHUM: {
        PATH: `${allPath.GRAINS.PATH}/sorghum`,
        TITLE: "sorghum",
        SLUG: "sorghum",
      },
    },
  },
  COSMATIC: {
    PATH: allPath.COSMATIC.PATH,
    TITLE: "cosmatic",
    SLUG: allPath.COSMATIC.SLUG,
    SUB_PRODUCT: {
      BANANA_POWDER: {
        PATH: `${allPath.COSMATIC.PATH}/banana-powder`,
        TITLE: "banana powder",
        SLUG: "banana-powder",
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
