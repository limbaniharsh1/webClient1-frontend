import {
  contentConstsnts,
  productConstants,
} from "../constsnts/productConstants";

export const prductList = [
  {
    path: productConstants.DISPOSABLE.PATH,
    title: productConstants.DISPOSABLE.TITLE,
    slug: productConstants.DISPOSABLE.SLUG,
  },
  {
    path: productConstants.HONEY.PATH,
    title: productConstants.HONEY.TITLE,
    slug: productConstants.HONEY.SLUG,
  },
  {
    path: productConstants.COTTON_BALES.PATH,
    title: productConstants.COTTON_BALES.TITLE,
    slug: productConstants.COTTON_BALES.SLUG,
  },
  {
    path: productConstants.PULSES.PATH,
    title: productConstants.PULSES.TITLE,
    slug: productConstants.PULSES.SLUG,
  },
  {
    path: productConstants.OIL_SEEDS.PATH,
    title: productConstants.OIL_SEEDS.TITLE,
    slug: productConstants.OIL_SEEDS.SLUG,
  },
  {
    path: productConstants.SPICES.PATH,
    title: productConstants.SPICES.TITLE,
    slug: productConstants.SPICES.SLUG,
  },
  {
    path: productConstants.DRY_FRUITS.PATH,
    title: productConstants.DRY_FRUITS.TITLE,
    slug: productConstants.DRY_FRUITS.SLUG,
  },
  {
    path: productConstants.GRAINS.PATH,
    title: productConstants.GRAINS.TITLE,
    slug: productConstants.GRAINS.SLUG,
  },
  {
    path: productConstants.COSMATIC.PATH,
    title: productConstants.COSMATIC.TITLE,
    slug: productConstants.COSMATIC.SLUG,
  },
];

export const productData = [
  // ========================================================
  //                         disposable
  // ========================================================
  {
    img: "https://sun9-67.userapi.com/impg/e2EcKnHb9INgp4rywvrngyBR4XwAU09T7vjKkg/yfALvGnFeN8.jpg?size=807x454&quality=95&sign=70dce7944a52e8923d3c894a8a82b64a&c_uniq_tag=SKInsatTg7Xituqi1RwiQopypoizIQekmoKqPfQhfos&type=album",
    title: productConstants.DISPOSABLE.TITLE,
    slug: productConstants.DISPOSABLE.SLUG,
    path: productConstants.DISPOSABLE.PATH,
    subTitle: "Nature's Golden Sweetener",
    description:
      "Honey is a natural, golden liquid produced by honeybees from the nectar of flowers. Known for its rich sweetness, honey has been used for centuries not only as a food but also for medicinal and therapeutic purposes. It’s packed with antioxidants, vitamins, and minerals, making it much more than just a natural sweetener.",

    subProducts: [
      {
        img: "http://cdn.globalso.com/fiber-product/IMG_59641.jpg",
        title: productConstants.DISPOSABLE.SUB_PRODUCT.PLAIN_DISH.TITLE,
        path: productConstants.DISPOSABLE.SUB_PRODUCT.PLAIN_DISH.PATH,
        slug: productConstants.DISPOSABLE.SUB_PRODUCT.PLAIN_DISH.SLUG,
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
      {
        img: "https://www.moldedpulpmachinery.com/photo/pl117093204-smart_disposable_paper_pulp_molding_food_tray_producing_machine_with_two_robot_arms.jpg",
        title: productConstants.DISPOSABLE.SUB_PRODUCT.COMPARTMENT_DISH_3.TITLE,
        path: productConstants.DISPOSABLE.SUB_PRODUCT.COMPARTMENT_DISH_3.PATH,
        slug: productConstants.DISPOSABLE.SUB_PRODUCT.COMPARTMENT_DISH_3.SLUG,
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
      {
        img: "https://i5.walmartimages.com/seo/Comfy-Package-Rectangular-Divided-Plates-Disposable-Heavy-Duty-Paper-Plates-Bulk-125-Pack_08020393-f121-4a12-bec5-2c546680cdf3.26e045f278a09195afd745056161c29a.jpeg",
        title: productConstants.DISPOSABLE.SUB_PRODUCT.COMPARTMENT_DISH_5.TITLE,
        path: productConstants.DISPOSABLE.SUB_PRODUCT.COMPARTMENT_DISH_5.PATH,
        slug: productConstants.DISPOSABLE.SUB_PRODUCT.COMPARTMENT_DISH_5.SLUG,
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
      {
        img: "https://pt.craftecopack.com/uploadfile/202102/04/88cb0f33b50bac43a7ebb68ef75e2cb9_medium.jpg",
        title: productConstants.DISPOSABLE.SUB_PRODUCT.BAGASSE_BOWLS.TITLE,
        path: productConstants.DISPOSABLE.SUB_PRODUCT.BAGASSE_BOWLS.PATH,
        slug: productConstants.DISPOSABLE.SUB_PRODUCT.BAGASSE_BOWLS.SLUG,
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
      {
        img: "https://russian.pulpfoodcontainers.com/photo/pl32370937-degradable_compostable_16oz_sugarcane_bagasse_cups_for_restaurant.jpg",
        title:
          productConstants.DISPOSABLE.SUB_PRODUCT.PRODO_BAGASSE_CUPS_120ML
            .TITLE,
        path: productConstants.DISPOSABLE.SUB_PRODUCT.PRODO_BAGASSE_CUPS_120ML
          .PATH,
        slug: productConstants.DISPOSABLE.SUB_PRODUCT.PRODO_BAGASSE_CUPS_120ML
          .SLUG,
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
  // ========================================================
  //                         honey
  // ========================================================
  {
    img: "https://selcdn.fedsp.com/circinus/28/29380/925f1fd56634bf6.jpg",
    title: productConstants.HONEY.TITLE,
    slug: productConstants.HONEY.SLUG,
    path: productConstants.HONEY.PATH,
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
  // ========================================================
  //                      cotton bales
  // ========================================================
  {
    img: "https://www.tutete.com/tienda/images/5a1fddfe24c38-Cottonove-Love-Guirnalda-Luces-2B-Cute-Tutete-3_l.jpg",
    title: productConstants.COTTON_BALES.TITLE,
    slug: productConstants.COTTON_BALES.SLUG,
    path: productConstants.COTTON_BALES.PATH,
    subTitle: "Nature's Golden Sweetener",
    description:
      "Honey is a natural, golden liquid produced by honeybees from the nectar of flowers. Known for its rich sweetness, honey has been used for centuries not only as a food but also for medicinal and therapeutic purposes. It’s packed with antioxidants, vitamins, and minerals, making it much more than just a natural sweetener.",

    subProducts: [
      {
        img: "https://avatars.mds.yandex.net/i?id=ee4449fc159133b44aa3bb84ccefb8b17d00ba46-10555250-images-thumbs&n=13",
        title: productConstants.COTTON_BALES.SUB_PRODUCT.COTTON_BALES.TITLE,
        path: productConstants.COTTON_BALES.SUB_PRODUCT.COTTON_BALES.PATH,
        slug: productConstants.COTTON_BALES.SUB_PRODUCT.COTTON_BALES.SLUG,
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
  // ========================================================
  //                         pulses
  // ========================================================
  {
    img: "https://avatars.mds.yandex.net/i?id=f980f423294dfa5b03ba267e62b00c85f4e694ea-11551355-images-thumbs&n=13",
    title: productConstants.PULSES.TITLE,
    slug: productConstants.PULSES.SLUG,
    path: productConstants.PULSES.PATH,
    subTitle: "Nature's Golden Sweetener",
    description:
      "Honey is a natural, golden liquid produced by honeybees from the nectar of flowers. Known for its rich sweetness, honey has been used for centuries not only as a food but also for medicinal and therapeutic purposes. It’s packed with antioxidants, vitamins, and minerals, making it much more than just a natural sweetener.",

    subProducts: [
      {
        img: "https://forceagro.com.ua/wp-content/uploads/2018/07/DX530-min-1.jpg",
        title: productConstants.PULSES.SUB_PRODUCT.SOYABEAN.TITLE,
        path: productConstants.PULSES.SUB_PRODUCT.SOYABEAN.PATH,
        slug: productConstants.PULSES.SUB_PRODUCT.SOYABEAN.SLUG,
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
      {
        img: "https://avatars.mds.yandex.net/i?id=8a1f9fa5fe92afe5c3fbda34692dcc566cf44192-5878141-images-thumbs&n=13",
        title: productConstants.PULSES.SUB_PRODUCT.PUFFED_RISE.TITLE,
        path: productConstants.PULSES.SUB_PRODUCT.PUFFED_RISE.PATH,
        slug: productConstants.PULSES.SUB_PRODUCT.PUFFED_RISE.SLUG,
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
      {
        img: "https://avatars.mds.yandex.net/i?id=b3d0edbe6b2ce8543d7fdb15afca2d74-5886904-images-thumbs&n=13",
        title: productConstants.PULSES.SUB_PRODUCT.GREEN_GRAM.TITLE,
        path: productConstants.PULSES.SUB_PRODUCT.GREEN_GRAM.PATH,
        slug: productConstants.PULSES.SUB_PRODUCT.GREEN_GRAM.SLUG,
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
      {
        img: "https://avatars.mds.yandex.net/i?id=c9bf6e07b934555af1ca88d0d39fc553d1a41b44-7047298-images-thumbs&n=13",
        title: productConstants.PULSES.SUB_PRODUCT.BLACK_GRAM.TITLE,
        path: productConstants.PULSES.SUB_PRODUCT.BLACK_GRAM.PATH,
        slug: productConstants.PULSES.SUB_PRODUCT.BLACK_GRAM.SLUG,
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
      {
        img: "https://avatars.mds.yandex.net/i?id=9e4c7f5ca1297f3a5df9d93e3fa6a5d557738f67-8244444-images-thumbs&n=13",
        title: productConstants.PULSES.SUB_PRODUCT.BEATEN_RICE.TITLE,
        path: productConstants.PULSES.SUB_PRODUCT.BEATEN_RICE.PATH,
        slug: productConstants.PULSES.SUB_PRODUCT.BEATEN_RICE.SLUG,
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
  // ========================================================
  //                       oil seeds
  // ========================================================
  {
    img: "https://www.seniorlivingresidences.com/wp-content/uploads/2019/10/Oldways-healthy-eating-for-seniors.jpg",
    title: productConstants.OIL_SEEDS.TITLE,
    slug: productConstants.OIL_SEEDS.SLUG,
    path: productConstants.OIL_SEEDS.PATH,
    subTitle: "Nature's Golden Sweetener",
    description:
      "Honey is a natural, golden liquid produced by honeybees from the nectar of flowers. Known for its rich sweetness, honey has been used for centuries not only as a food but also for medicinal and therapeutic purposes. It’s packed with antioxidants, vitamins, and minerals, making it much more than just a natural sweetener.",

    subProducts: [
      {
        img: "https://forceagro.com.ua/wp-content/uploads/2018/07/DX530-min-1.jpg",
        title: productConstants.OIL_SEEDS.SUB_PRODUCT.SOYABEAN.TITLE,
        path: productConstants.OIL_SEEDS.SUB_PRODUCT.SOYABEAN.PATH,
        slug: productConstants.OIL_SEEDS.SUB_PRODUCT.SOYABEAN.SLUG,
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
      {
        img: "https://avatars.mds.yandex.net/i?id=3d5ad318537bc90d70cdee24cdbc1faa2e4979c8-3981511-images-thumbs&n=13",
        title: productConstants.OIL_SEEDS.SUB_PRODUCT.SEASAME.TITLE,
        path: productConstants.OIL_SEEDS.SUB_PRODUCT.SEASAME.PATH,
        slug: productConstants.OIL_SEEDS.SUB_PRODUCT.SEASAME.SLUG,
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
      {
        img: "https://avatars.mds.yandex.net/i?id=eb866e1fcc734db327be4adae7c9ab11285787d4-10113980-images-thumbs&n=13",
        title: productConstants.OIL_SEEDS.SUB_PRODUCT.PEANUT.TITLE,
        path: productConstants.OIL_SEEDS.SUB_PRODUCT.PEANUT.PATH,
        slug: productConstants.OIL_SEEDS.SUB_PRODUCT.PEANUT.SLUG,
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
      {
        img: "https://avatars.mds.yandex.net/i?id=11cf5d0791c0b782281b7b2f009e21de33c14d32-10702414-images-thumbs&n=13",
        title: productConstants.OIL_SEEDS.SUB_PRODUCT.GROUNDNUT.TITLE,
        path: productConstants.OIL_SEEDS.SUB_PRODUCT.GROUNDNUT.PATH,
        slug: productConstants.OIL_SEEDS.SUB_PRODUCT.GROUNDNUT.SLUG,
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
  // ========================================================
  //                        spices
  // ========================================================
  {
    img: "https://avatars.mds.yandex.net/get-mpic/5319505/img_id3285105993846025319.jpeg/orig",
    title: productConstants.SPICES.TITLE,
    slug: productConstants.SPICES.SLUG,
    path: productConstants.SPICES.PATH,
    subTitle: "Nature's Golden Sweetener",
    description:
      "Honey is a natural, golden liquid produced by honeybees from the nectar of flowers. Known for its rich sweetness, honey has been used for centuries not only as a food but also for medicinal and therapeutic purposes. It’s packed with antioxidants, vitamins, and minerals, making it much more than just a natural sweetener.",

    subProducts: [
      {
        img: "https://avatars.mds.yandex.net/i?id=c15e432158dcd9436bc64f0c2ad85d8fe2ecd0c9-9865886-images-thumbs&n=13",
        title: productConstants.SPICES.SUB_PRODUCT.CHILI_PEPPER.TITLE,
        path: productConstants.SPICES.SUB_PRODUCT.CHILI_PEPPER.PATH,
        slug: productConstants.SPICES.SUB_PRODUCT.CHILI_PEPPER.SLUG,
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
      {
        img: "https://avatars.mds.yandex.net/i?id=d7b9f1863a351fd3a23e99e7f6bb68e555d710d6-8497409-images-thumbs&n=13",
        title: productConstants.SPICES.SUB_PRODUCT.CUMIN.TITLE,
        path: productConstants.SPICES.SUB_PRODUCT.CUMIN.PATH,
        slug: productConstants.SPICES.SUB_PRODUCT.CUMIN.SLUG,
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
      {
        img: "https://avatars.mds.yandex.net/i?id=38bff3e533877cb1f49e7a7d5c633f8d9a7852a9-8487401-images-thumbs&n=13",
        title: productConstants.SPICES.SUB_PRODUCT.GARLIC_POWDER.TITLE,
        path: productConstants.SPICES.SUB_PRODUCT.GARLIC_POWDER.PATH,
        slug: productConstants.SPICES.SUB_PRODUCT.GARLIC_POWDER.SLUG,
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
      {
        img: "https://avatars.mds.yandex.net/i?id=705fa3d5122d3c6eab932b91a5e865b3426b33b1-10577272-images-thumbs&n=13",
        title: productConstants.SPICES.SUB_PRODUCT.FENNEL_SEEDS.TITLE,
        path: productConstants.SPICES.SUB_PRODUCT.FENNEL_SEEDS.PATH,
        slug: productConstants.SPICES.SUB_PRODUCT.FENNEL_SEEDS.SLUG,
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
      {
        img: "https://i.pinimg.com/originals/a9/ea/8b/a9ea8b6ae974708deb3b11d0e3757aa0.jpg",
        title: productConstants.SPICES.SUB_PRODUCT.CAROM_SEEDS.TITLE,
        path: productConstants.SPICES.SUB_PRODUCT.CAROM_SEEDS.PATH,
        slug: productConstants.SPICES.SUB_PRODUCT.CAROM_SEEDS.SLUG,
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
      {
        img: "https://exotikalhub.com/wp-content/uploads/2021/02/cardamom-cover-1.jpg",
        title: productConstants.SPICES.SUB_PRODUCT.GREEN_CARDAMON.TITLE,
        path: productConstants.SPICES.SUB_PRODUCT.GREEN_CARDAMON.PATH,
        slug: productConstants.SPICES.SUB_PRODUCT.GREEN_CARDAMON.SLUG,
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
      {
        img: "https://avatars.mds.yandex.net/get-mpic/4343007/img_id3248580035145299221.png/orig",
        title: productConstants.SPICES.SUB_PRODUCT.PEPPERCORNS.TITLE,
        path: productConstants.SPICES.SUB_PRODUCT.PEPPERCORNS.PATH,
        slug: productConstants.SPICES.SUB_PRODUCT.PEPPERCORNS.SLUG,
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
      {
        img: "https://i.pinimg.com/originals/df/ec/96/dfec963e46689d0b3cb73fc307471b93.jpg",
        title: productConstants.SPICES.SUB_PRODUCT.CLOVE.TITLE,
        path: productConstants.SPICES.SUB_PRODUCT.CLOVE.PATH,
        slug: productConstants.SPICES.SUB_PRODUCT.CLOVE.SLUG,
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
      {
        img: "https://avatars.mds.yandex.net/i?id=f2c768b30c591517bc09f586a7371a0c248706f9-11543356-images-thumbs&n=13",
        title: productConstants.SPICES.SUB_PRODUCT.BAY_LEAF.TITLE,
        path: productConstants.SPICES.SUB_PRODUCT.BAY_LEAF.PATH,
        slug: productConstants.SPICES.SUB_PRODUCT.BAY_LEAF.SLUG,
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
      {
        img: "https://www.fitterfly.com/blog/wp-content/uploads/2023/04/Jaggery-for-Weight-Loss-Is-It-Really-Effective--scaled.jpg",
        title: productConstants.SPICES.SUB_PRODUCT.SUGAR_CANE.TITLE,
        path: productConstants.SPICES.SUB_PRODUCT.SUGAR_CANE.PATH,
        slug: productConstants.SPICES.SUB_PRODUCT.SUGAR_CANE.SLUG,
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
  // ========================================================
  //                      dry fruits
  // ========================================================
  {
    img: "https://avatars.mds.yandex.net/i?id=fc8f3a201921d39e1b0ffa3aff535b85418a8629-12361708-images-thumbs&n=13",
    title: productConstants.DRY_FRUITS.TITLE,
    slug: productConstants.DRY_FRUITS.SLUG,
    path: productConstants.DRY_FRUITS.PATH,
    subTitle: "Nature's Golden Sweetener",
    description:
      "Honey is a natural, golden liquid produced by honeybees from the nectar of flowers. Known for its rich sweetness, honey has been used for centuries not only as a food but also for medicinal and therapeutic purposes. It’s packed with antioxidants, vitamins, and minerals, making it much more than just a natural sweetener.",

    subProducts: [
      {
        img: "https://avatars.mds.yandex.net/i?id=f73f3d2efb170439adb01d9d534e9299-5537533-images-thumbs&n=13",
        title: productConstants.DRY_FRUITS.SUB_PRODUCT.RAISINS.TITLE,
        path: productConstants.DRY_FRUITS.SUB_PRODUCT.RAISINS.PATH,
        slug: productConstants.DRY_FRUITS.SUB_PRODUCT.RAISINS.SLUG,
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
      {
        img: "https://avatars.mds.yandex.net/i?id=cd349d6c81c7b1e7043b9b656d77f5c4f5d84837-6961512-images-thumbs&n=13",
        title: productConstants.DRY_FRUITS.SUB_PRODUCT.BLACK_RAISINS.TITLE,
        path: productConstants.DRY_FRUITS.SUB_PRODUCT.BLACK_RAISINS.PATH,
        slug: productConstants.DRY_FRUITS.SUB_PRODUCT.BLACK_RAISINS.SLUG,
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
      {
        img: "https://avatars.mds.yandex.net/i?id=15a5c6a55f83c01ba17c0a9adb16067ef2ec2e768c88b787-10652477-images-thumbs&n=13",
        title: productConstants.DRY_FRUITS.SUB_PRODUCT.CASHEW.TITLE,
        path: productConstants.DRY_FRUITS.SUB_PRODUCT.CASHEW.PATH,
        slug: productConstants.DRY_FRUITS.SUB_PRODUCT.CASHEW.SLUG,
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
      {
        img: "https://avatars.mds.yandex.net/i?id=121f874cd7a6cf99201fd4e2692fcf3610027ff5-12218216-images-thumbs&n=13",
        title: productConstants.DRY_FRUITS.SUB_PRODUCT.POPPY_SEEDS.TITLE,
        path: productConstants.DRY_FRUITS.SUB_PRODUCT.POPPY_SEEDS.PATH,
        slug: productConstants.DRY_FRUITS.SUB_PRODUCT.POPPY_SEEDS.SLUG,
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
  // ========================================================
  //                        grains
  // ========================================================
  {
    img: "https://avatars.mds.yandex.net/i?id=5d74695a6bf97599a9d602adbc05a998dcdb4a2b-10512135-images-thumbs&n=13",
    title: productConstants.GRAINS.TITLE,
    slug: productConstants.GRAINS.SLUG,
    path: productConstants.GRAINS.PATH,
    subTitle: "Nature's Golden Sweetener",
    description:
      "Honey is a natural, golden liquid produced by honeybees from the nectar of flowers. Known for its rich sweetness, honey has been used for centuries not only as a food but also for medicinal and therapeutic purposes. It’s packed with antioxidants, vitamins, and minerals, making it much more than just a natural sweetener.",
    subProducts: [
      {
        img: "https://avatars.mds.yandex.net/i?id=06a04bb3f16650101916b074b87ae0247191b3c8-4055677-images-thumbs&n=13",
        title: productConstants.GRAINS.SUB_PRODUCT.MILLET.TITLE,
        path: productConstants.GRAINS.SUB_PRODUCT.MILLET.PATH,
        slug: productConstants.GRAINS.SUB_PRODUCT.MILLET.SLUG,
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
      {
        img: "https://walnutfolks.com/wp-content/uploads/2020/09/Rice-brand-amazon-growth-case-study-1.jpg",
        title: productConstants.GRAINS.SUB_PRODUCT.RICE.TITLE,
        path: productConstants.GRAINS.SUB_PRODUCT.RICE.PATH,
        slug: productConstants.GRAINS.SUB_PRODUCT.RICE.SLUG,
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
      {
        img: "https://avatars.mds.yandex.net/get-mpic/7726747/img_id8080178262457030028.jpeg/orig",
        title: productConstants.GRAINS.SUB_PRODUCT.WHEAT.TITLE,
        path: productConstants.GRAINS.SUB_PRODUCT.WHEAT.PATH,
        slug: productConstants.GRAINS.SUB_PRODUCT.WHEAT.SLUG,
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
      {
        img: "https://hefasifabahcesi.com/wp-content/uploads/devedikenitohumu1000x1000.jpg",
        title: productConstants.GRAINS.SUB_PRODUCT.BLACK_WHEAT.TITLE,
        path: productConstants.GRAINS.SUB_PRODUCT.BLACK_WHEAT.PATH,
        slug: productConstants.GRAINS.SUB_PRODUCT.BLACK_WHEAT.SLUG,
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
      {
        img: "https://avatars.mds.yandex.net/i?id=d7d46847eb501ae68900eeaa940c3ee61f6ae521-9866669-images-thumbs&n=13",
        title: productConstants.GRAINS.SUB_PRODUCT.SORGHUM.TITLE,
        path: productConstants.GRAINS.SUB_PRODUCT.SORGHUM.PATH,
        slug: productConstants.GRAINS.SUB_PRODUCT.SORGHUM.SLUG,
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
  // ========================================================
  //                        cosmatic
  // ========================================================
  {
    img: "https://avatars.mds.yandex.net/i?id=31523cc5669270f3e9520d7621fd57a033243710-11032733-images-thumbs&n=13",
    title: productConstants.COSMATIC.TITLE,
    slug: productConstants.COSMATIC.SLUG,
    path: productConstants.COSMATIC.PATH,
    subTitle: "Nature's Golden Sweetener",
    description:
      "Honey is a natural, golden liquid produced by honeybees from the nectar of flowers. Known for its rich sweetness, honey has been used for centuries not only as a food but also for medicinal and therapeutic purposes. It’s packed with antioxidants, vitamins, and minerals, making it much more than just a natural sweetener.",
    subProducts: [
      {
        img: "https://avatars.mds.yandex.net/i?id=78e19f80ccc1f124af44554331fde09fc3916144-8182659-images-thumbs&n=13",
        title: productConstants.COSMATIC.SUB_PRODUCT.BANANA_POWDER.TITLE,
        path: productConstants.COSMATIC.SUB_PRODUCT.BANANA_POWDER.PATH,
        slug: productConstants.COSMATIC.SUB_PRODUCT.BANANA_POWDER.SLUG,
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
