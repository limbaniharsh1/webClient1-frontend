import {
  contentConstsnts,
  productConstants,
} from "../constsnts/productConstants";

export const prductList = [
  {
    path: productConstants.HONEY.PATH,
    title: productConstants.HONEY.TITLE,
    slug: productConstants.HONEY.SLUG,
  },
];

export const productData = [
  {
    img: "https://selcdn.fedsp.com/circinus/28/29380/925f1fd56634bf6.jpg",
    title: productConstants.HONEY.TITLE,
    slug: productConstants.HONEY.SLUG,
    subTitle: "Nature's Golden Sweetener",
    description:
      "Honey is a natural, golden liquid produced by honeybees from the nectar of flowers. Known for its rich sweetness, honey has been used for centuries not only as a food but also for medicinal and therapeutic purposes. It’s packed with antioxidants, vitamins, and minerals, making it much more than just a natural sweetener.",

    subProducts: [
      {
        img: "https://images.getbento.com/accounts/6b9c03fde43e6e24cc89b73ab08aef02/media/images/Honey_photos.jpg?w=1800&fit=max&auto=compress,format&h=1800",
        title: productConstants.HONEY.SUB_PRODUCT.NATURAL_HONEY.TITLE,
        path: productConstants.HONEY.SUB_PRODUCT.NATURAL_HONEY.PATH,
        slug: productConstants.HONEY.SUB_PRODUCT.NATURAL_HONEY.SLUG,
        subTitle: "Savor the Sweetness",
        description:
          "Honey is a natural, golden liquid produced by honeybees from the nectar of flowers. Known for its rich sweetness, honey has been used for centuries not only as a food but also for medicinal and therapeutic purposes. It’s packed with antioxidants, vitamins, and minerals, making it much more than just a natural sweetener.",

        productContent: [
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                title: "Global Market Demand",
                description:
                  "Rye import from India has been increasing over the years due to various health and medicinal benefits from Rye. Rye is extensively used in India and Indonesian cuisines which may be one important reason for the increasing popularity of export of Rye. The rising global demand for Rye is a good opportunity for Rye exporter in India to expand its business and enter the international market.",
              },
            ],
          },
          {
            type: contentConstsnts.SPECIFICATIONS,
            data: [
              {
                title: "Product Name",
                value: "Rye",
              },
              {
                title: "Origin",
                value: "Southwestern Asia",
              },
              {
                title: "Family",
                value: "Poaceae",
              },
              {
                title: "Binomial name",
                value: "Secale Cereale",
              },
            ],
          },
          {
            type: contentConstsnts.INGREDIENTS,
            data: [
              {
                title: "Nutrients",
                values: [
                  "259 Calories",
                  "Total Carbohydrate - 48 g",
                  "Dietary fibre - 6 g",
                ],
              },
              {
                title: "Minerals",
                values: [
                  "Copper",
                  "Magnesium",
                  "Phosphorous",
                  "Thiamin",
                  "Riboflavin",
                  "Niacin",
                  "Folate",
                  "Pantothenic Acid",
                ],
              },
              {
                title: "Vitamin",
                values: ["Vitamin B6"],
              },
              {
                title: "Protein",
                values: ["9 g"],
              },
              {
                title: "Fats",
                values: ["3.3g"],
              },
            ],
          },
        ],
      },
    ],
  },
];
