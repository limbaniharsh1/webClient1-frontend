import {
  contentConstsnts,
  productConstants,
} from "../constants/productConstants";
import { webName } from "../enum";

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
    subTitle: "Leading Exporter of Eco-Friendly Disposable Goods",
    description:
      "At Shreevarni Export, we specialize in exporting a range of high-quality disposable products tailored for the demands of diverse industries. Designed for convenience, hygiene, and environmental responsibility, our products include eco-friendly options to meet global standards.",

    subProducts: [
      {
        img: "http://cdn.globalso.com/fiber-product/IMG_59641.jpg",
        title: productConstants.DISPOSABLE.SUB_PRODUCT.PLAIN_DISH.TITLE,
        path: productConstants.DISPOSABLE.SUB_PRODUCT.PLAIN_DISH.PATH,
        slug: productConstants.DISPOSABLE.SUB_PRODUCT.PLAIN_DISH.SLUG,
        subTitle: "Eco-Friendly Bagasse Plain Dishes",
        description:
          "Plain Dish is made from sustainable and biodegradable bagasse material. Perfect for serving any kind of dishes, it's a great choice for environmentally-conscious individuals or businesses. Plus, it's durable and versatile, making it a practical addition to any kitchen or dining setting.",
      },
      {
        img: "https://www.moldedpulpmachinery.com/photo/pl117093204-smart_disposable_paper_pulp_molding_food_tray_producing_machine_with_two_robot_arms.jpg",
        title: productConstants.DISPOSABLE.SUB_PRODUCT.COMPARTMENT_DISH_3.TITLE,
        path: productConstants.DISPOSABLE.SUB_PRODUCT.COMPARTMENT_DISH_3.PATH,
        slug: productConstants.DISPOSABLE.SUB_PRODUCT.COMPARTMENT_DISH_3.SLUG,
        subTitle: "Eco-Friendly 3-Compartment Bagasse Dish",
        description:
          "This 3 compartment dish is made from environmentally friendly Bagasse material. It is perfect for serving a variety of foods in a convenient and sustainable manner. With its three compartments, it allows for easy organization and portion control. Upgrade your dining experience with this eco-friendly option.",
      },
      {
        img: "https://i5.walmartimages.com/seo/Comfy-Package-Rectangular-Divided-Plates-Disposable-Heavy-Duty-Paper-Plates-Bulk-125-Pack_08020393-f121-4a12-bec5-2c546680cdf3.26e045f278a09195afd745056161c29a.jpeg",
        title: productConstants.DISPOSABLE.SUB_PRODUCT.COMPARTMENT_DISH_5.TITLE,
        path: productConstants.DISPOSABLE.SUB_PRODUCT.COMPARTMENT_DISH_5.PATH,
        slug: productConstants.DISPOSABLE.SUB_PRODUCT.COMPARTMENT_DISH_5.SLUG,
        subTitle: "Eco-Friendly 5-Compartment Bagasse Dish",
        description:
          "and eco-friendly option for serving food. Made from 100% bagasse, a natural plant-based material, it is biodegradable and compostable. With 5 separate compartments, it allows for easy portion control and a convenient serving option. Perfect for catering events, picnics, or everyday use.",
      },
      {
        img: "https://pt.craftecopack.com/uploadfile/202102/04/88cb0f33b50bac43a7ebb68ef75e2cb9_medium.jpg",
        title:
          productConstants.DISPOSABLE.SUB_PRODUCT.BAGASSE_BOWLS_250ML.TITLE,
        path: productConstants.DISPOSABLE.SUB_PRODUCT.BAGASSE_BOWLS_250ML.PATH,
        slug: productConstants.DISPOSABLE.SUB_PRODUCT.BAGASSE_BOWLS_250ML.SLUG,
        subTitle: "Eco-Friendly Bagasse Bowls",
        description:
          "Ecoplanet bowls add a touch of elegance to your dining experience. Embrace eco-conscious choices with our compostable bowls that not only enhance your table presentation but also contribute to a greener tomorrow.",
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
        subTitle: "Eco-Friendly Bagasse Cups",
        descriptions: [
          "Introducing Prodo's Premium Bagasse Disposable Cups, the quintessential choice for anyone seeking to reduce their environmental footprint without compromising on quality. These cups offer a perfect blend of sustainability and style, presenting an eco-friendly alternative to conventional plastic or paper cups.",
          "Made entirely from bagasse, a by-product of sugarcane processing, these cups are not just biodegradable but also compostable. Sugarcane is a fast-growing crop, and using its by-products helps reduce waste and increase sustainability. As such, once you've finished using a Prodo's bagasse cup, you can place it into your compost bin, where it will decompose naturally and swiftly, turning into nutritious compost for your plants.",
          "Although these cups are designed with sustainability in mind, there's no compromise on quality. They are sturdy and robust, capable of handling both hot and cold beverages without warping, leaking, or losing their shape. The insulated design ensures your hands remain cool even when sipping hot coffee or tea.",
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
      },
    ],
  },
  // ========================================================
  //                      cotton bales
  // ========================================================
  {
    img: "https://images.pond5.com/cotton-bale-middle-cotton-field-023782605_prevstill.jpeg",
    title: productConstants.COTTON_BALES.TITLE,
    slug: productConstants.COTTON_BALES.SLUG,
    path: productConstants.COTTON_BALES.PATH,
    subTitle: "Reliable Cotton Bales",
    description:
      "Our Cotton Bales offer premium quality, sourced from the finest cotton fields to ensure consistency and purity. Carefully processed and compressed, these cotton bales are ready for various industrial applications, including textile manufacturing, garment production, and other cotton-based products.",

    subProducts: [
      {
        img: "https://avatars.mds.yandex.net/i?id=bc98935dc1c69498a7c559fe380b91cec7da9861-10124751-images-thumbs&ref=rim&n=33&w=444&h=250",
        title: productConstants.COTTON_BALES.SUB_PRODUCT.COTTON_BALES.TITLE,
        path: productConstants.COTTON_BALES.SUB_PRODUCT.COTTON_BALES.PATH,
        slug: productConstants.COTTON_BALES.SUB_PRODUCT.COTTON_BALES.SLUG,
        subTitle: "Savor the Sweetness",
        description:
          "Our Cotton Bales offer premium quality, sourced from the finest cotton fields to ensure consistency and purity. Carefully processed and compressed, these cotton bales are ready for various industrial applications, including textile manufacturing, garment production, and other cotton-based products.",
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
    subTitle: "Pulses for Every Kitchen",
    description:
      "Our Pulses are sourced from the finest farms to deliver freshness, taste, and nutritional value. Rich in protein, fiber, and essential nutrients, our range of pulses—including lentils, chickpeas, beans, and peas—supports a balanced diet and offers a versatile ingredient for a variety of culinary uses.",

    subProducts: [
      {
        img: "https://forceagro.com.ua/wp-content/uploads/2018/07/DX530-min-1.jpg",
        title: productConstants.PULSES.SUB_PRODUCT.SOYABEAN.TITLE,
        path: productConstants.PULSES.SUB_PRODUCT.SOYABEAN.PATH,
        slug: productConstants.PULSES.SUB_PRODUCT.SOYABEAN.SLUG,
        subTitle: "Soya Bean Exporters",
        description:
          "Our Soybeans are a powerhouse of nutrition, offering an array of health benefits and culinary uses. Known for their high protein content and rich source of essential amino acids, soybeans are an excellent choice for both vegetarians and meat-eaters alike.",

        productContent: [
          {
            type: contentConstsnts.INGREDIENTS,
            data: [
              {
                title: "Nutrients",
                values: [
                  "Calories - 446g/100 grams",
                  "Carbohydrates - 30g",
                  "Fiber - 9g",
                ],
              },
              {
                title: "Protein",
                values: ["36 g"],
              },
              {
                title: "Fat",
                values: ["20g"],
              },
              {
                title: "Vitamin",
                values: ["Vitamin K1"],
              },
              {
                title: "Minerals",
                values: [
                  "Folate",
                  "Copper",
                  "Manganese",
                  "Phosphorus",
                  "Thiamine",
                ],
              },
            ],
          },
          {
            type: contentConstsnts.VARIETIES,
            title: "Soybean Varieties We Export",
            description:
              "Soya bean import from India includes various varieties of Soybean including Ahilya-1, Alankar, Ahilya-3, and such others. Soybean exporter in India exports many of these soybean varieties to numerous countries in the world. Export of Soybean from India includes the following varieties.",
            data: [
              {
                title: "Ahilya-1 (NRC 2)",
                description:
                  "Ahilya-1 also known as NRC 2 is a variety of Soybean which is resistant to Rhizoctonia, pod blight, green mosaic virus, bacterial blight, and tolerant to Cercospora leaf spot and Anthracnose. This variety of soybean takes around 103-106 to mature after transplanting. The average yield for this variety of soybean is 25-30q/ha.",
              },
              {
                title: "Ahilya-3 (NRC 7)",
                description:
                  "Ahilya-3 is a variety of soybean which is resistant to bacterial blight, green mosaic virus, bacterial pustules, phyllody, soybean mosaic, Myrothecium and Cercospora leaf spots. It is tolerant to stem fly, girdle beetle, green and grey semi looper, and so on. This variety of Ahilya-3 takes around 90-99 to mature after transplantation.",
              },
              {
                title: "Alankar",
                description:
                  "This is a variety of Soybean which matures around 115-120 days after transplanting. The average yield for this variety of soybean is around 20-25q/ha. This Alankar variety of Soybean is resistant to bacterial pustules and tolerant to yellow mosaic.",
              },
              {
                title: "ADT-1",
                description:
                  "This variety of Soybean matures around 85-90 days after transplanting. The ADT-1 variety of Soybean is also known for tolerance to leaf miner and leaf Webber.",
              },
              {
                title: "Durga (JS 72-280)",
                description:
                  "The Durga variety of Soybean matures around 102-105 days after transplanting. The average yield of this variety of soybean which is exported from India by many exporters is 20-22q/ha. This variety is also tolerant to bacterial pustules.",
              },
              {
                title: "Gujarat soybean 1 (J-231)",
                description:
                  "The Gujarat soybean 1 also known as J-231 matures around 90-95 days after transplanting. The average yield of this variety of soybean is 15-20q/ha. This variety is fairly tolerant of disease and pests in Gujarat.",
              },
              {
                title: "Hara Soy (Himso 1563)",
                description:
                  "The Hara Soy variety of Soybean is immune to a bacterial pustule and highly resistant to brown spot, bacterial blight, and to frog eye leaf spot and pod blight. This variety is said to be the first-ever culinary purpose variety in soybean. The average yield for this variety is around 15-20q/ha.",
              },
              {
                title: "Indira Soy 9",
                description:
                  "Indira Soy 9 is a variety of Soybean resistant to rust. It is also moderately resistant to stem tunneling, girdle beetle and leaf folder. This variety is said to perform well under low to moderate plant densities.",
              },
              {
                title: "JS 2",
                description:
                  "The time taken for JS 2 to mature is around 90-95 days after transplanting. The average yield for this variety of Soybean is around 18-20q/ha. This variety is also said to be resistant to a bacterial pustule and is tolerant to Macrophomina.",
              },
            ],
          },

          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                description: ` ${webName} Foods is one of the leading soybean importers from India. Due to the rising demand of Soybean, Indian exporters have also increased the amount of soybean produced and exported from India. The export of Soya bean has also been a revenue earning industry for many exporters. If you are interested in the export of Soybean, ${webName} is the best option!`,
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
        subTitle: "Puffed Rice Exporter",
        description:
          "Puffed rice is made by introducing air into the rice which makes the grains larger and lighter, and also reduces moisture to achieve a crisp texture. The Puffed Rice exporter in India exports tonnes of puffed rice abroad from India. This Puffed Rice export from India has been increasing over the years. This may be because of the several benefits of this type of rice. The Indian Puffed Rice exporter, therefore, is earning good revenues from this export. The Puffed Rice export includes the export of various varieties of this rice.",

        productContent: [
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                title: "Global Market Demand",
                description:
                  "The global market demand for Puffed Rice has been growing over the years. Therefore, the puffed rice exporter in India exports an increasing amount of puffed rice and its products to many countries in the world. New York, Hongkong, Singapore, and such other ports are some of the top importing ports for Puffed Rice import from India. Puffed Rice also enjoys growing popularity due to its nutritional values.",
              },
            ],
          },
          {
            type: contentConstsnts.SPECIFICATIONS,
            data: [
              {
                title: "Product Name",
                value: "Puffed Rice",
              },
              {
                title: "Origin",
                value: "India",
              },
            ],
          },
          {
            type: contentConstsnts.INGREDIENTS,
            data: [
              {
                title: "Nutrients",
                values: [
                  "Calories 33 kcal",
                  "Carbohydrates - 10.3g",
                  "Fiber - 0.04g",
                ],
              },
              {
                title: "Minerals",
                values: ["Thiamine", "Riboflavin", "Niacin", "Folate"],
              },
              {
                title: "Protein",
                values: ["1 g"],
              },
              {
                title: "Fats",
                values: ["0.01g"],
              },
            ],
          },
          {
            type: contentConstsnts.USES_AND_BENEFITS,
            data: [
              {
                type: contentConstsnts.USES_AND_BENEFITS.USES,
                data: [
                  "Puffed Rice has many culinary benefits. For example, puffed rice is the main ingredient of the famous Indian snack called ‘Bhelpuri’.",
                  "Puffed Rice is said to be good to prevent constipation. The consistency and the beneficial bacteria in puffed rice help in reducing constipation problems.",
                  " Puffed Rice is also said to be helpful for maintaining blood pressure.",
                  "Puffed rice is good for weight loss. It is extremely light and has low calories. It helps you to get rid of those deposited fats too.",
                ],
              },
            ],
          },
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                description: `If you are looking for a Puffed Rice importer from India, ${webName} Foods is your best choice! We at ${webName} Foods have extensive experience and knowledge in the food export industry. Our executives will help you at every step of the process of the export of Puffed Rice. From documentation until the final delivery of the products, it will all be taken care of by ${webName}. Interested in Puffed Rice export from India? Contact us now!`,
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
        subTitle: "Green Gram Exporters",
        description:
          "At Shreevarni Export, we pride ourselves on supplying premium quality Green Gram to clients around the world. Our commitment to quality and sustainability has positioned us as a trusted name in the international market, meeting the demands of health-conscious consumers and businesses alike.",

        productContent: [
          {
            type: contentConstsnts.INGREDIENTS,
            data: [
              {
                title: "Nutrients",
                values: [
                  "Calories - 347 calories",
                  "Total Carbohydrate 63 g",
                  "Dietary fibre - 16 g",
                ],
              },
              {
                title: "Minerals",
                values: ["Cobalamin", "Magnesium"],
              },
              {
                title: "Vitamin",
                values: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin B6"],
              },
              {
                title: "Protein",
                values: ["24 g"],
              },
            ],
          },
          {
            type: contentConstsnts.VARIETIES,
            title: "Green Gram Varieties We Export",
            description:
              "The Green Gram import from India includes various varieties of green grams including CO 1, ADT 1, JGG 1 so on, and so forth. The mung bean exporter in India exports premium quality products keeping health and safety regulations in mind. Here are the major varieties of Green Gram included in the export of green gram.",
            data: [
              {
                title: "CO 1",
                description:
                  "Released in 1952, CO 1 is a variety of Green Gram exported from India. It is a pure-line selection from Coimbatore local. The duration required to mature is 135 days. The grain yield is around 750 kg/ha. This variety is suitable for rainfed.",
              },
              {
                title: "ADT 1",
                description:
                  "The ADT is a variety of green gram released in 1966. It is a pure line selection from Aduthurai local. The time taken for this variety of green gram to mature is around 80 days. The rainfed grain yield of this variety is around 500 kg/ha. This variety is suitable for rice fallow.",
              },
              {
                title: "JGG 1 (Rajendran)",
                description:
                  "Released in 1972, this variety of green gram is a selection from Jayankondam local. The JGG 1 variety of green gram. The time required for this variety to mature is about 65 days. The grain yield of JGG 1 is around 625 kg/ha. This variety is said to be tolerant to drought.",
              },
              {
                title: "KM 1",
                description:
                  "The KM 1 is a variety of green gram exported from India to many countries in the world. It was released in 1978. It is said to be produced from the cross of S.8 and PS 16. The time required for this variety to mature is about 65-70 days. The grain yield of this variety is around 708kg/ha.",
              },
              {
                title: "KM 2",
                description:
                  "The KM 2 is a variety of green gram released in the year 1978. The rainfed grain yield of this variety of green gram is about 767kg/ha. This variety of green gram is said to be tolerant to YMV and is a pod borer.",
              },
              {
                title: "Paiyur 1",
                description:
                  "Released in 1988, the Paiyur1 variety of green gram is a pure line selection form DPT 703. The time taken for this variety of green gram to mature is about 85-90 days. The grain yield of this variety is around 700kg/ha. There is a low incidence of YMV for this variety and it is well suited for rainfed tracts of Dharmapuri, Madurai, Ramnad, Tirunelveli and Periyar Districts.",
              },
              {
                title: "Vamban 1",
                description:
                  "The Vamban 1 variety of green gram is a Hybrid derivative of (S.8 x PIMS 3). This variety was released in 1989. The time required for this variety to mature in around 65-70 days. The grain yield of Vamban 1 is around 800 kg/ha. It is said to be tolerant of YMV.",
              },
              {
                title: "VBN (Gg) 2",
                description:
                  "This variety is a cross between VGG 4 and MH 309. It was released in 2001. This variety of green gram matures after around 65-70 days. The rainfed grain yield for this variety is 750kg/ha. The grains are shiny while the leaves are lobed and resistant to YMV.",
              },
            ],
          },
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                description: `${webName} foods is one of the leading Green Gram importers from India. We understand that export of green gram can be a complicated process. But no worries! ${webName} is here to help you! Our highly trained executives will help you with every process involved in the export of green gram until your products are delivered to the destination. We have extensive experience in the food export industry and will support you in case of any issues. If you are looking for food export, contact ${webName} now!`,
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
        subTitle: "Black Gram Exporters",
        description:
          "Shreevarni Export is proud to supply high-quality Black Gram to international markets, delivering nutrient-rich legumes that enhance both health and flavor. Also known as Urad Dal, Black Gram is a staple ingredient in global cuisine, valued for its rich taste, high protein content, and versatile uses.",

        productContent: [
          {
            type: contentConstsnts.INGREDIENTS,
            data: [
              {
                title: "Nutrients",
                values: [
                  "Calories - 341 kcal",
                  "Total Carbohydrate - 58.99 g",
                  "Dietary fibre - 18.3 g",
                ],
              },
              {
                title: "Minerals",
                values: ["Calcium", "Magnesium", "Iron"],
              },
              {
                title: "Vitamin",
                values: ["Vitamin A", "Vitamin C", "Vitamin B6"],
              },
              {
                title: "Protein",
                values: ["25.21 g"],
              },
            ],
          },
          {
            type: contentConstsnts.VARIETIES,
            title: "Black Gram Varieties We Export",
            description:
              "Black Gram import from India includes various varieties like ADT 1, CO 1, KM 1, TMV 1 so on and so forth. The Black Gram exporter in India has to export products that are of good quality and adhere to all the health and safety measures of the country. Here are the major varieties of Black Gram involved in the export of Black Gram.",
            data: [
              {
                title: "ADT 1",
                description:
                  "The ADT 1 variety of Black gram is a Selection from Aduthurai local released in the year 1965. This variety takes around 80 days to mature from transplantation. The grain yield rainfed is around 450 kg/ha. This variety of black gram has a high protein content of 19.9%.",
              },
              {
                title: "CO 1",
                description:
                  "The CO 1 variety of Black Gram is a pure line selection from Srivaikundam local released in 1968. This variety of black gram takes around 110 days to mature. The grain yield is around 600 kg/ha when rainfed and 750 kg/ha when irrigated. This variety was released for rainfed condition.",
              },
              {
                title: "KM 1",
                description:
                  "The KM 1 variety of Black Gram was released in 1977. This variety takes around 65-70 to mature from transplantation. The KM 1 has a grain yield of about 25 kg/ha when Rainfed. This variety is of dwarf type and is also known to be drought tolerant.",
              },
              {
                title: "TMV 1",
                description:
                  "The TMV 1 variety of Black Gram was developed from the cross of Midhi Ulundu and KM 1. This variety was released in 1979. It takes around 65-70 days for this variety to mature. The grain yield of TMV 1 is around 800 kg/ha when irrigated. This variety is said to be resistant to YMV and tolerant to root rot.",
              },
              {
                title: "Vamban 1",
                description:
                  "The Vamban 1 variety of Black Gram was released in the year 1987. It takes around 60-65 days for this variety to mature from transplantation. The grain yield of this variety is around 780 kg/ha when rainfed and 900 kg/ha when irrigated. The Vamban 1 is a high yielding variety and is also tolerant of YMV.",
              },
              {
                title: "APK 1",
                description:
                  "The APK 1 variety of Black Gram was released in 1993. This variety takes around 75 days to mature after transplantation. The grain yield for this variety when irrigated is around 940 kg/ha. The APK 1 is well suited for rainfed conditions for intercropping with cotton.",
              },
              {
                title: "VBN (Bg) 4",
                description:
                  "The VBN (Bg) 4 variety of Black Gram was released in 2003. This variety takes about 75-80 days to mature after transplanting. The grain yield for this variety is around 780 kg/ha when rainfed and 900 kg/ha when Irrigated. This variety is resistant to Yellow Mosaic Virus.",
              },
              {
                title: "MDU 1",
                description:
                  "The MDU 1 variety of Black Gram was released in 2014. This variety matures around 70 - 75 days after transplanting. The grain yield for this variety is about 790 kg/ha when irrigated. The MDU 1 is a High yielding variety and is resistant to leaf crinkle virus.",
              },
              {
                title: "KKM 1",
                description:
                  "The KKM 1 variety of Black Gram was released in 2017. This variety matures around 65 - 70 days after transplanting. The grain yield of this variety is around 607 kg/ha (rice fallow). The KKM 1 variety is a High yielding one and is moderately resistant to YMV and Powdery mildew. It is also suitable for rice fallow.",
              },
            ],
          },
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                description: `${webName} Foods is the leading Black Gram importer from India. We at ${webName} Foods understand that the export of food products from India may be a complicated process for some of you. Don’t worry, we are here to help you! With extensive experience in the food export industry, our executives at ${webName} make sure that the export of Black Gram is carried out smoothly with any issues. We help our clients right from documentation until the final delivery of the products. If you are looking for food export from India, Contact ${webName} now!`,
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
        subTitle: "Beaten Rice Exporter",
        description:
          "At Shreevarni Export, we offer high-quality Beaten Rice to meet the needs of our international customers. Beaten Rice, also known as Poha or Flattened Rice, is a versatile and nutritious ingredient, loved for its light texture, quick preparation, and health benefits.",

        productContent: [
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                title: "Global Market Demand",
                description:
                  "Beaten rice also called Chira is made from paddy. It is popular in various parts of India. People of all age groups and from different regions love Beaten Rice recipes and therefore it is a mass consumption item. This is, therefore, a great opportunity for the Beaten Rice exporter in India to expand his business and enter the international market. Due to the great quality of the product, Beaten Rice import from India has been rising over the years.",
              },
            ],
          },
          {
            type: contentConstsnts.SPECIFICATIONS,
            data: [
              {
                title: "Product Name",
                value: "Beaten Rice",
              },
              {
                title: "Origin",
                value: "India",
              },
            ],
          },
          {
            type: contentConstsnts.INGREDIENTS,
            data: [
              {
                title: "Nutrients",
                values: [
                  "Calories - 100 kcal",
                  "Total Carbohydrate - 20 g",
                  "Dietary fibre - 2 g",
                ],
              },
              {
                title: "Vitamin",
                values: ["Vitamin C", "Vitamin B1"],
              },
              {
                title: "Protein",
                values: ["3 g"],
              },
              {
                title: "Fats",
                values: ["1g"],
              },
            ],
          },
          {
            type: contentConstsnts.USES_AND_BENEFITS,
            data: [
              {
                type: contentConstsnts.USES_AND_BENEFITS.USES,
                data: [
                  "Beaten Rice can be consumed in different ways like soaking raw in water, fried, with curd or milk or after cooking the soaked one. Beaten Rice can be cooked on short notice and is thus a convenient food item.",
                  "Beaten Rice is also used in making snacks and mixtures. It is a famous food item especially in roadside eateries, in dhabas, Hostels and such other places.",
                  "Beaten Rice is good for diabetics. As it is rich in fiber, it promotes a slow and steady release of sugar into the bloodstream.",
                  "Beaten Rice consists of 76.9% of carbohydrates and about 23% of fats. The healthy carbs are good for the body and provide the energy to the body to carry out its functions.",
                ],
              },
            ],
          },
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                description: `${webName} Foods is one of the leading Beaten Rice importers from India. We at ${webName} Foods provide hassle-free food export services for our clients. The export of Beaten Rice can sometimes be a complicated process. But no worries! The executives at ${webName} will help you with each and every step until your products reach the destination safe and fresh. If you are looking for Beaten Rice export from India, Contact ${webName} now!`,
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
    subTitle: "Enhance Your Health and Cooking with Premium Oil Seeds",
    description:
      "With Shreevarni Export, you’re choosing a trusted supplier of premium oil seeds, committed to delivering quality products that cater to the health and culinary needs of global consumers. Our dedication to excellence and sustainability ensures that each seed contributes to a healthier, more flavorful experience for customers around the world.",

    subProducts: [
      {
        img: "https://forceagro.com.ua/wp-content/uploads/2018/07/DX530-min-1.jpg",
        title: productConstants.OIL_SEEDS.SUB_PRODUCT.SOYABEAN.TITLE,
        path: productConstants.OIL_SEEDS.SUB_PRODUCT.SOYABEAN.PATH,
        slug: productConstants.OIL_SEEDS.SUB_PRODUCT.SOYABEAN.SLUG,
        subTitle: "Soybean Oilseeds Exporters",
        description:
          "Soybean is a legume which is said to be native to Eastern Asia. It qualified as an oilseed due to the high oil content in its seeds. Soybean exporter in India exports tonnes of Soybean each year. Due to the several benefits and nutrients in Soybean, the global demand for soybean has been growing. This, in turn, leads to the growth of Soybean export from India. Indian Soybean exporter majorly exports Soybean to Vietnam, Japan, Thailand, Indonesia, UAE and Greece. The Soybean export from India includes many varieties.",

        productContent: [
          {
            type: contentConstsnts.INGREDIENTS,
            data: [
              {
                title: "Nutrients",
                values: [
                  "Calories - 173 calories",
                  "Fiber - 6 g",
                  "Fiber - 6 g",
                ],
              },
              {
                title: "Minerals",
                values: ["Molybdenum", "Folate", "Copper", "Manganese"],
              },
              {
                title: "Vitamin",
                values: ["Vitamin K1"],
              },
              {
                title: "Protein",
                values: ["16.6 g"],
              },
            ],
          },
          {
            type: contentConstsnts.VARIETIES,
            title: "Soybean Varieties We Export",
            description:
              "Soybean import from India includes various varieties od Soybean like JS 95-60, Pratap Soya 1, TAMS 98-21 so on and so forth. Soybean exporter in India export high-quality soybean oilseeds to many countries in the world. The export of Soybean from India includes the following varieties.",
            data: [
              {
                title: "JS 95-60",
                description:
                  "The JS 95-60 variety of Soybean oilseed has an average yield potential of 1800-2000 kg/ha. The oil content in these seeds is around 16.6%. The recommended areas for this variety is Madhya Pradesh. The characteristics of this variety are determinate, extra earliness, high seed germinability and longevity so on and so forth.",
              },
              {
                title: "Pratap Soya 1 (RAUS 5)",
                description:
                  "This variety of Soybean Oilseed called Pratap Soya 1 has an average yield potential of 3000-3500kg/ha. The oil content in this variety is 17.98%. The time required to maturity for this variety is 96-104 days. RAUS 5 is said to be resistant to girdle beetle and to stem fly and defoliators.",
              },
              {
                title: "TAMS 98-21",
                description:
                  "TAMS 98-21 is a variety having average yield potential of 2200-2600kg/ha. The oil content is around 18.08%. This variety has been recommended to be grown in Maharashtra. TAMS 98-21 takes around 95-100 days to mature from when it’s transplanted.",
              },
              {
                title: "PS 1347",
                description:
                  "PS 1347 is a variety which has a yield potential of 3100kg/ha. This variety has oil content of around 15.54%. This variety of Soybean Oilseed is Determinate and a compact plant type. The maturity period for this variety is around 123 days. PS 1347 is said to be resistant to YMV, Rhizoctonia aerial blight, and so on.",
              },
              {
                title: "JS 97-52",
                description:
                  "JS 97-52 is a variety of Soybean Oilseed with a yield potential of 2500-3000kg/ha. The oil content of this variety is around 17.48%. The recommended areas for this variety are Central Zone and North Eastern Zone. The time take for maturity for this variety is 100 days.",
              },
              {
                title: "Pusa 97-12",
                description:
                  "Pusa 97-12 is a variety of Soybean Oilseed released in the year 2009. This variety which is exported from India was released by the IARI. Pusa 97-12 has been recommended to be cultivated in the Northern Zone. This variety is said to be resistant to YMV and Charcoal rot.",
              },
              {
                title: "Birsa Safed Soybean-2",
                description:
                  "Released in 2009 at Ranchi, Birsa Safed Soyabean is another variety of Soybean Oilseed whose yield potential is around 2500kg/ha. Recommended to be grown in Jharkhand, this variety is resistant to bacterial pastules, Cercospora leaf spot, blue beetle and Bihar hairy caterpillar, so on and so forth.",
              },
              {
                title: "MACS-1188",
                description:
                  "The MACS-1188 variety of Soybean Oilseed was released in 2013. This variety has been recommended to be grown in the Southern zone (Karnataka, Tamil Nadu, A.P., South Maharashtra). This variety has High Oil content, early maturity and is known to be resistant to pod shattering and Rhizoctonia aerial blight and so on.",
              },
            ],
          },
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                description: `${webName} Foods is one of the leading Soybean importer from India. We export Soybean and such other food products to different countries in the world. Due to its popularity, the export of Soybean has been on the rise globally. ${webName} Foods exports premium quality Soybean and makes sure that your products reach the destination fresh and safe. If you are looking for Soybean export from India, ${webName} Foods is a great option!`,
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
        subTitle: "Sesame Exporters",
        description:
          "Sesame is an annual herb which grows well in hot climates. Sesame exporter in India exports tonnes of sesame to many countries in the world. Sesame is known to have many health and beauty benefits. Due to the increasing popularity of sesame worldwide, the sesame export from India has been increasing year after year. This is a good opportunity for the Indian sesame exporter to enter the international market. Sesame export from India include export of many varities of sesame.",

        productContent: [
          {
            type: contentConstsnts.INGREDIENTS,
            data: [
              {
                title: "Nutrients",
                values: [
                  "Calories - 573 calories",
                  "Total Carbohydrate - 23 g",
                  "Dietary fibre - 12 g",
                ],
              },
              {
                title: "Minerals",
                values: ["Zinc", "Selenium", "Copper", "Iron"],
              },
              {
                title: "Vitamin",
                values: ["Vitamin B6", "Vitamin E"],
              },
              {
                title: "Protein",
                values: ["18 g"],
              },
            ],
          },
          {
            type: contentConstsnts.VARIETIES,
            title: "Sesame Varieties We Export",
            description:
              "Sesame import from India includes several varieties of sesame including TKG-306, SWB-32-10-1 so on and so forth. Sesame exporter in India exports premium quality sesame to many parts of the world. The export of sesame from India includes the following varieties.",
            data: [
              {
                title: "TKG-306",
                description:
                  "Released in 2007, TKG-306 takes around 86-90 days to mature. The seed is white in colour and weighs around 2.8 g. This variety of sesame is resistant to Phytophthora blight and moderately resistant to Macrophomina, Cercospora, powdery mildew, and Alternaria leaf spot.",
              },
              {
                title: "SWB-32-10-1 (Savitri)",
                description:
                  "In the SWB-32-10-1 variety of sesame, the oil content present is around 48-52%. The average yield of this variety is around 1200-1500 kg/ha in the summer. This variety has been recommended in West Bengal. The time is taken for this variety to mature in around 84-88 days.",
              },
              {
                title: "Jawahar Til –12 (PKDS-12)",
                description:
                  "The oil content present in this variety of sesame is around 48-52%. The average yield of the Jawahar Til-12 variety is around 700-750 kg/ha. This variety has been recommended to be grown in Summer in the state of Madhya Pradesh. This variety is said to be moderately resistant to Macrophomina stem/root rot.",
              },
              {
                title: "Gujarat Til-3",
                description:
                  "The average oil content in the Gujarat Til-3 is around 48-52%. The average yield of this variety of sesame is about 750-800 kg/ha. This crop has been recommended to be grown in the Kharif season in the Saurashtra region of Gujarat. The time taken for these seeds to mature in around 84-88 days.",
              },
              {
                title: "RT-346",
                description:
                  "The oil content present in the RT-346 is around 49-51%. The average yield of this variety of sesame is 750-850 kg/ha. This variety is recommended to be grown in the Kharif season in the states of Rajasthan, Haryana, Panjab, Himachal Pradesh, Gujarat, Utter Pradesh, Maharashtra so on and so forth. The variety requires 82-86 days to reach maturation.",
              },
              {
                title: "JLT-408",
                description:
                  "The oil content in JLT-408 is around 51-53%. The average yield of this variety of sesame is 700-800 kg/ha. This variety of sesame is recommended to be grown in an assured rainfall zone of Khandesh and adjoining areas of Vidharba, Marathwada region rainfall zone of Khandesh and adjoining areas. This variety of sesame requires 80-85 days to mature.",
              },
              {
                title: "TKG-308",
                description:
                  "The oil content present in TKG-308 is about 48-50%. The average yield of 700-750 kg/ha. This variety is moderately resistant to Macrophomia, Cercospora, Bacteria leaf spot, Leaf curl, Tolerant to capsule borer.",
              },
              {
                title: "Shubra",
                description:
                  "Shubhra variety of sesame has an oil content of around 48-52%. The average yield of this variety is around 800-900 kg/ha. The seeds are Golden yellow in colour. It has been recommended to grown in Orisha in the Kharif and summer season.",
              },
              {
                title: "RT-351",
                description:
                  "RT-351 has oil content around 48-50%. The average yield of this variety is 700-800 kg/ha. This variety is resistant to Macrophomia, Leaf curl, Phillody, Moderately resistant to Cercospora & capsule bore. RT-351 has been recommended to be grown in Rajasthan, Gujarat, UP, Maharashtra, Haryana, Punjab, J&K and such other states.",
              },
            ],
          },
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                description: `${webName} Foods is one of the best Sesame importer from India and export premium quality sesame. We at ${webName} foods help our clients find the right buyers for their products, conduct a detailed market analysis of the international market and assist them in every other way so that their products reach the country fresh and safe. Export of sesame has been growing exponentially and the vendors and farmers have a great opportunity to export their products abroad. Looking for sesame export from India? ${webName} Foods is the best place for you!`,
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
        subTitle: "Peanut Varieties We Export",
        description:
          "At Shreevarni Export, we supply high-quality Peanuts to international markets, catering to both culinary and health-focused industries. Known for their rich flavor, nutritional value, and versatility, our peanuts are an excellent choice for a variety of food products, snacks, and culinary applications.",

        productContent: [
          {
            type: contentConstsnts.INGREDIENTS,
            data: [
              {
                title: "Nutrients",
                values: [
                  "Calories - 567 calories",
                  "Carbs - 16.1 grams",
                  "Fiber - 8.5 grams",
                ],
              },
              {
                title: "Minerals",
                values: ["Calcium", "Magnesium", "Iron"],
              },
              {
                title: "Vitamin",
                values: ["Vitamin B6"],
              },
              {
                title: "Protein",
                values: ["25.8 g"],
              },
            ],
          },
          {
            type: contentConstsnts.VARIETIES,
            title: "Peanut Varieties We Export",
            description:
              "The Peanut import from India includes many varieties of Peanuts including TLG 45, Narayani, Vasundhara so on, and so forth. The Peanut exporter in India exports the best quality Peanut to different countries in the world. The export of Peanut includes the following major varieties.",
            data: [
              {
                title: "TLG 45",
                description:
                  "The TLG 45 variety was released in the year 2007 at the releasing centre at MAU, Latur. The yield potential of this variety is around 1506kg/ha. The oil content in this seed is around 51%. The recommended state for this variety is Maharashtra. It is a large-seeded variety.",
              },
              {
                title: "Narayani (TCGS 29)",
                description:
                  "Released in 2007, the Narayani variety was released in the releasing centre at ANGRAU, Tirupati. The yield potential of this variety is around 3764kg/ha. The oil content of this variety is around 48%. It is tolerant of mid-season moisture stress conditions.",
              },
              {
                title: "Vasundhara (Dh 101)",
                description:
                  "The Vasundhara variety of Peanuts was released in 2007. The yield potential of this variety is about 2877kg/ha. The oil content in the variety is around 50%. It has been recommended to be grown in West Bengal, Orissa, Jharkhand and Assam. This variety is tolerant to stem rot and PBND.",
              },
              {
                title: "VL- Moongphali-1",
                description:
                  "The VL- Moongphali-1 variety of Peanuts was released in the year 2008 at the releasing centre is VPKAS, Almora. The yield potential of this variety is around 1943kg/ha. This variety has been recommended to be grown in Uttarakhand and is resistant to late leaf spot and root rot.",
              },
              {
                title: "Utkarsh (CSMG 9510)",
                description:
                  "Released in 2009 at CSAUAT, Mainpuri, the oil content of this variety is around 49%. This variety has been recommended to be grown in Uttar Pradesh, Punjab, Northern Rajasthan. It is resistant to rust and possesses a fresh seed dormancy of up to 40-45 days. It has been recommended for the Kharif season.",
              },
              {
                title: "Jawahar Peanut 23 (JGN 23)",
                description:
                  "The Jawahar Peanut 23 was released in the year 2009 in JNKVV, Khargone. The yield potential of this variety is around 1631kg/ha. The oil content in this variety is around 49%. This variety is tolerant to ELS and LLS. It is also drought tolerant and has been recommended for the Kharif season.",
              },
              {
                title: "Greeshma",
                description:
                  "Released in the year 2009 at ANGRAU, Tirupati, this variety of Greeshma has a yield potential of about 2000-2500kg/ha. The oil content in this variety is around 49%. This variety has been recommended to be grown in Andhra Pradesh. It is tolerant to LLS, drought, high temperature and aflatoxin.",
              },
              {
                title: "Kadiri 8",
                description:
                  "The Kadiri 8 variety of Peanut was released in 2009 at ANGRAU, Kadiri. The yield potential is around 1523kg/ha. The oil content in this seed is about 47%. Recommended to be grown in the state of Andhra Pradesh, this variety is tolerant of sucking pests and leaf spots.",
              },
              {
                title: "Mallika",
                description:
                  "Released in 2009 at RAU, Hanumangarh, the Mallika variety of Peanuts has a yield potential of 2579kg/ha. The oil content in this variety is about 48%. This variety is resistant to collar rot and PBND and is bold seeded. It has been recommended for the Kharif season.",
              },
            ],
          },
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                description: `${webName} Foods is one of the leading Peanut importers from India. We at ${webName} Foods provide hassle-free food export services for our clients. The export of Peanut can sometimes be a complicated process. But no worries! Our executives at ${webName} will help you with each and every step until your products reach the destination safe and fresh. If you are looking for Peanut export, Contact ${webName} now!`,
              },
            ],
          },
        ],
      },
      // {
      //   img: "https://avatars.mds.yandex.net/i?id=11cf5d0791c0b782281b7b2f009e21de33c14d32-10702414-images-thumbs&n=13",
      //   title: productConstants.OIL_SEEDS.SUB_PRODUCT.GROUNDNUT.TITLE,
      //   path: productConstants.OIL_SEEDS.SUB_PRODUCT.GROUNDNUT.PATH,
      //   slug: productConstants.OIL_SEEDS.SUB_PRODUCT.GROUNDNUT.SLUG,
      //   subTitle: "Savor the Sweetness",
      //   description:
      //     "Honey is a natural, golden liquid produced by honeybees from the nectar of flowers. Known for its rich sweetness, honey has been used for centuries not only as a food but also for medicinal and therapeutic purposes. It’s packed with antioxidants, vitamins, and minerals, making it much more than just a natural sweetener.",

      //   productContent: [
      //     {
      //       type: contentConstsnts.CONTENT,
      //       data: [
      //         {
      //           title: "Global Market Demand",
      //           description:
      //             "Rye import from India has been increasing over the years due to various health and medicinal benefits from Rye. Rye is extensively used in India and Indonesian cuisines which may be one important reason for the increasing popularity of export of Rye. The rising global demand for Rye is a good opportunity for Rye exporter in India to expand its business and enter the international market.",
      //         },
      //       ],
      //     },
      //     {
      //       type: contentConstsnts.SPECIFICATIONS,
      //       data: [
      //         {
      //           title: "Product Name",
      //           value: "Rye",
      //         },
      //         {
      //           title: "Origin",
      //           value: "Southwestern Asia",
      //         },
      //         {
      //           title: "Family",
      //           value: "Poaceae",
      //         },
      //         {
      //           title: "Binomial name",
      //           value: "Secale Cereale",
      //         },
      //       ],
      //     },
      //     {
      //       type: contentConstsnts.INGREDIENTS,
      //       data: [
      //         {
      //           title: "Nutrients",
      //           values: [
      //             "259 Calories",
      //             "Total Carbohydrate - 48 g",
      //             "Dietary fibre - 6 g",
      //           ],
      //         },
      //         {
      //           title: "Minerals",
      //           values: [
      //             "Copper",
      //             "Magnesium",
      //             "Phosphorous",
      //             "Thiamin",
      //             "Riboflavin",
      //             "Niacin",
      //             "Folate",
      //             "Pantothenic Acid",
      //           ],
      //         },
      //         {
      //           title: "Vitamin",
      //           values: ["Vitamin B6"],
      //         },
      //         {
      //           title: "Protein",
      //           values: ["9 g"],
      //         },
      //         {
      //           title: "Fats",
      //           values: ["3.3g"],
      //         },
      //       ],
      //     },
      //   ],
      // },
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
    subTitle: "Unlock the World of Flavor with Premium Spices",
    description:
      "Spices are more than just ingredients; they’re the essence of flavor, tradition, and wellness in cuisines around the world. Our premium spices are carefully sourced, bringing intense flavor, rich color, and powerful health benefits to every dish. From the warm hues of turmeric to the aromatic allure of cardamom, our spices are a staple in every kitchen, elevating both taste and nutrition.",

    subProducts: [
      {
        img: "https://avatars.mds.yandex.net/i?id=c15e432158dcd9436bc64f0c2ad85d8fe2ecd0c9-9865886-images-thumbs&n=13",
        title: productConstants.SPICES.SUB_PRODUCT.CHILI_PEPPER.TITLE,
        path: productConstants.SPICES.SUB_PRODUCT.CHILI_PEPPER.PATH,
        slug: productConstants.SPICES.SUB_PRODUCT.CHILI_PEPPER.SLUG,
        subTitle: "Chilli Pepper Exporters",
        description:
          "Chilli Pepper is one of the most important spices in India and all over the world. Indian Chillies are popular across the world. The Chilli Pepper exporter in India exports tonnes of chillies abroad each year. Due to various culinary uses of Chilli pepper, the popularity of this spice is growing. The Chilli Pepper export from India has thus also been on a rise over the years. The Indian Chilli Pepper exporter has a good opportunity to expand his business and enter the international market. The Chilli Pepper export includes the export of various varieties of the product.",

        productContent: [
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                title: "Global Market Demand",
                description:
                  "Chilli Pepper is grown extensively in India. Red chillies are grown over 792,000 hectares of land in the states of Andhra Pradesh, Karnataka, Madhya Pradesh and Maharashtra. Around 1,376,000 million tons of red chillies are produced in India every year. Of these chillies 70% are consumed domestically, while Chilli Pepper exporter in India exports the left 30%. The Chilli Pepper import from India has been increasing due to the premium quality of chillies exported from India.",
              },
            ],
          },
          {
            type: contentConstsnts.SPECIFICATIONS,
            data: [
              {
                title: "Product Name",
                value: "Chilli Pepper",
              },
              {
                title: "Origin",
                value: "Mexico",
              },
              {
                title: "Family",
                value: "Solanaceae",
              },
              {
                title: "Binomial name",
                value: "Capsicum annuum",
              },
            ],
          },
          {
            type: contentConstsnts.INGREDIENTS,
            data: [
              {
                title: "Nutrients",
                values: [
                  "Calories 40 kcal",
                  "Total Carbohydrates - 9 g",
                  "Dietary Fiber - 1.5 g",
                ],
              },
              {
                title: "Minerals",
                values: ["Calcium", "Iron", "Magnesium"],
              },
              {
                title: "Vitamin",
                values: ["Vitamin A", "Vitamin C", "Vitamin B6"],
              },
              {
                title: "Protein",
                values: ["2 g"],
              },
              {
                title: "Fats",
                values: ["0.2 g"],
              },
            ],
          },
          {
            type: contentConstsnts.USES_AND_BENEFITS,
            data: [
              {
                type: contentConstsnts.USES_AND_BENEFITS.USES,
                data: [
                  " Chilli Peppers are sometimes prepared and eaten like a vegetable. The pods can also be dried and then crushed or ground into chilli powder that is used as a spice or seasoning for recipes.",
                  "Capsaicin is a chemical in chilli peppers that gives them the flavour and makes them hot. This chemical is used as an analgesic in topical ointments, nasal sprays, and dermal patches to relieve pain.",
                  "Chillies are used in several cuisines across the world be it the Indian cuisine, the Chinese cuisine or the Italian cuisine",
                ],
              },
            ],
          },
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                description: `${webName} Foods is the best Chilli Pepper importer from India. Having extensive experience in the food export industry, we make sure that the process of export of Chilli Pepper is hassle-free for our clients. We support our clients in every way possible, right from finding buyers for their products until the final delivery of the order. If you are looking for Chilli Pepper export from India, contact ${webName} Foods now!`,
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
        subTitle: "Cumin Seeds Exporters",
        description: `Being the third most consumed spices in the world, the aromatic and spicy-sweet flavour of Cumin has amazed the entire planet. The seeds have been used since ancient times and are still a signature ingredient in many lovely dishes across the world. At ${webName}, we are leading exporters of the best quality Cumin seeds.`,

        productContent: [
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                title: "Global Market Demand",
                description:
                  "Cumin is the seeds of the fruit of the Cuminum cyminum plants. Native to South Western Asia as well as the Middle East, these seeds are dried and used in food as well as for other purposes. Currently, India holds the position of being the leading producers as well as consumers of Cumin. Apart from the seed form, it is also used in the powdered form or as essential oils. The plant requires optimum temperatures between 25-30 degree Celsius and good Mediterranean climate.",
              },
            ],
          },
          {
            type: contentConstsnts.SPECIFICATIONS,
            data: [
              {
                title: "Product Name",
                value: "Cumin seeds",
              },
              {
                title: "Origin",
                value: "Levant (Eastern Meditteranean)",
              },
              {
                title: "Family",
                value: "Apiaceae",
              },
              {
                title: "Binomial name",
                value: "Cuminum cyminum",
              },
            ],
          },
          {
            type: contentConstsnts.TABLE,
            title: "Features & Characteristics",
            data: [
              {
                title: "Color",
                values: ["Brownish-yellow (other variants are also available)"],
              },
              {
                title: "Taste and Smell  ",
                values: [
                  "Earthy, nutty, spicy taste with a strong, warm aroma",
                ],
              },
            ],
          },
          {
            type: contentConstsnts.INGREDIENTS,
            data: [
              {
                title: "Nutrients",
                values: [
                  "375 Kcl Calories",
                  "10.5 gm fibre",
                  "44.24 gm carbohydrates",
                ],
              },
              {
                title: "Minerals",
                values: [
                  "Calcium",
                  "Magnesium",
                  "Iron",
                  "Manganese",
                  "Phosphorus",
                  "Potassium",
                  "Sodium",
                  "Zinc",
                ],
              },
              {
                title: "Vitamin",
                values: ["Vitamin E", "Vitamin C", "Vitamin B"],
              },
              {
                title: "Protein",
                values: ["17.81 g"],
              },
              {
                title: "Fats",
                values: ["22.27 g"],
              },
            ],
          },
          {
            type: contentConstsnts.USES_AND_BENEFITS,
            data: [
              {
                type: contentConstsnts.USES_AND_BENEFITS.USES,
                data: [
                  "Cumin seeds or in the powdered form is used as a spice in a number of dishes across the planet.",
                  "Due to its aroma and pungent smell, cumin is also used as essential oils and perfumes.",
                  " It is mixed with other products such as honey in skincare including exfoliation.",
                  "Cumin is used in traditional medicine to make kashaya, arishta, etc. It is also used in several Indian households as jira water.",
                ],
              },
              {
                type: contentConstsnts.USES_AND_BENEFITS.BENEFITS,
                data: [
                  "Skincare",
                  "Detoxification",
                  "Weight loss",
                  "Digestion",
                ],
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
        subTitle: "Garlic Powder Exporters",
        description:
          "Garlic is a species in the onion genus and is primarily grown all around the world. The garlic exporter in India exports tonnes of garlic to various countries each year. Due to the unique taste and aroma of garlic, the garlic export from India has been on a rise. This is a good opportunity for the Indian Garlic exporter to expand his business and enter the international marketplace. The garlic export from India includes the export of various varieties of Garlic.",

        productContent: [
          {
            type: contentConstsnts.INGREDIENTS,
            data: [
              {
                title: "Nutrients",
                values: [
                  "Calories - 4 calories",
                  "Dietary Fiber - 1.2 g",
                  "Carbohydrate 0.93 g",
                ],
              },
              {
                title: "Minerals",
                values: ["Calcium", "Magnesium", "Iron", "Potassium"],
              },
              {
                title: "Vitamin",
                values: ["Vitamin C"],
              },
              {
                title: "Protein",
                values: ["0.18 g"],
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
        subTitle: "Fennel seeds exporters",
        description:
          "Fennel Seeds are a cherished spice known for their mildly sweet, aromatic flavor and numerous health benefits. Valued in cuisines around the world, fennel seeds bring a unique taste and fragrance to a variety of dishes, from savory recipes to baked goods and teas. Beyond their culinary appeal, fennel seeds are also packed with nutrients that promote wellness.",

        productContent: [
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                title: "Global Market Demand",
                description:
                  "The global demand for fennel seeds continues to rise as consumers increasingly seek natural ingredients that offer both culinary versatility and health benefits. Known for their unique flavor and digestive properties, fennel seeds are popular in various international markets, including the food, beverage, pharmaceutical, and personal care industries. Driven by the growing interest in herbal remedies and plant-based wellness products, fennel seeds are widely sought after in regions across Asia, Europe, the Middle East, and North America. This global demand underscores fennel seeds’ value as a staple ingredient in both traditional and modern applications.",
              },
            ],
          },
          {
            type: contentConstsnts.SPECIFICATIONS,
            data: [
              {
                title: "Product Name",
                value: "Fennel Seeds",
              },
              {
                title: "Origin",
                value: "India, Egypt, China, and parts of Europe",
              },
              {
                title: "Family",
                value: "Apiaceae",
              },
              {
                title: "Binomial name",
                value: "Foeniculum vulgare",
              },
            ],
          },
          {
            type: contentConstsnts.USES_AND_BENEFITS,
            data: [
              {
                type: contentConstsnts.USES_AND_BENEFITS.BENEFITS,
                data: [
                  " Known to soothe the digestive tract, fennel seeds are often used to alleviate bloating, gas, and indigestion.",
                  "Packed with antioxidants, fennel seeds protect the body from oxidative stress and support cellular health.",
                  "The fiber content in fennel seeds supports healthy cholesterol levels, which benefits cardiovascular health.",
                  "Fennel seeds have properties that may help relieve respiratory issues, soothing sore throats and clearing congestion.",
                ],
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
        subTitle: "Carom Seeds Exporters",
        description:
          "Thyme is primarily a Mediterranean herb with dietary, medicinal, and ornamental uses. The flowers, leaves, and oil of thyme have been used to treat a range of symptoms since ancient times. The Carom Seeds exporter in India exports a large quantity of the products each year. The Thyme export from India has been growing over the years due to the various health and medicinal benefits of the product. This is, therefore, a good opportunity for the Indian Thyme exporter to expand his business and earn good revenues. The Carom seeds export from India consists of various varieties.",

        productContent: [
          {
            type: contentConstsnts.INGREDIENTS,
            data: [
              {
                title: "Nutrients",
                values: ["Calories - 305 kcal", "Carbohydrate 43 g"],
              },
              {
                title: "Minerals",
                values: ["Calcium", "Iron"],
              },
              {
                title: "Vitamin",
                values: ["Vitamin A", "Vitamin C"],
              },
              {
                title: "Protein",
                values: ["16 g"],
              },
            ],
          },
          {
            type: contentConstsnts.VARIETIES,
            title: "Carom Seeds Varieties We Export",
            description:
              "Carom Seeds import from India includes various varieties including Annie Hall Thyme, Lavender Thyme Pink Chintz Thyme, so on and so forth. The Thyme exporter in India exports premium quality thyme to different parts of the world. The export of Thyme from India includes the following key varieties.",
            data: [
              {
                title: "Annie Hall Thyme",
                description:
                  "Annie Hall Thyme is a variety of Carom Seeds that are dark green in colour with small-leaved ground cover thyme. This variety is suitable for paving stones or small lawn areas. The flowers of this variety of plants are light pink in colour and the height is around 1/4 inch.",
              },
              {
                title: "Lavender Thyme",
                description:
                  "Lavender Thyme is a variety of low growing thyme. It is said to have sturdy little leaves and stems. The scent is nice strong thyme with a hint of lavender thrown in. This variety is often available in plug trays. The trays hold 128 of all the same plant.",
              },
              {
                title: "Pink Chintz Thyme",
                description:
                  "Pink Chintz Thyme is a delicate looking creeper that has small fuzzy grey-green leaves appearing close together on the stem. This characteristic makes it suitable for smaller spaces like those between stepping stones or flagstones. The Pink Chintz variety generally blooms very early in spring.",
              },
              {
                title: "Lime Thyme",
                description:
                  "Lime Thyme is said to make a great ground cover. The leaves of this plant are bright green lime-coloured and scented. These plants help brighten up darker corners of the garden. This variety generally blooms in the summer which is later than most other thymes.",
              },
              {
                title: "Woolly Thyme",
                description:
                  "Woolly Thyme is soft and silvery and tightly knit. This variety makes a great filler for in between pavers or along borders. This variety rarely flowers which makes it a good choice for those allergic to bees. The Woolly Thyme is the greyest of all the thymes and should not be confused with the prolific bloomer and greener Hall's Woolly Thyme.",
              },
              {
                title: "Mint Thyme",
                description:
                  "Mint Thyme is one of the thymes widely recommended for planting between flagstones. Thymes usually have fairly shallow root systems so watering well during summer months is essential to maintain a nice green cover. The mint Thymen does not have a fragrance and there is no evidence why it was given this name.",
              },
              {
                title: "Heretus Thyme",
                description:
                  "The Heretus Thyme is one of the most unusual ground cover thymes. It has long, narrow, grey-green leaves that give it a somewhat lacy appearance. This variety is one of the tough ones and is a good choice for any garden.",
              },
              {
                title: "Coconut Thyme",
                description:
                  "Coconut Thyme does not have a specific smell or taste like coconuts, but it blooms well and grows fast. It can be nicely planted in swaths in front of the Caraway Thyme because both are heavy bloomers blooming at different times.",
              },
              {
                title: "Lemon Frost Thyme",
                description:
                  "Lemon Frost Thyme really is known to be a rapid grower with a wonderful lemon scent. It is perfect for covering large segments of the ground. This variety is a great cost-effective way to fill a lot of space. Each cell of this variety is 3/4 of inch by an inch.",
              },
              {
                title: "Silver Needle Thyme",
                description:
                  "The Silver Needle Thyme is one of the most unusual ground cover thymes. This variety looks like a stiff little juniper twig but it is soft to walk on. Silver Needle Thyme also has a soft silvery green hue. This variety blooms in early spring and is covered in dark lilac flowers.",
              },
              {
                title: "Pink Lemonade Thyme",
                description:
                  "The Pink Lemonade Thyme is a non-variegated lemon-scented ground cover thyme with profuse pink flowers. Generally, lemon-scented varieties either have white flowers like Lemon Frost Thyme or bloom very little. Pink Lemonade Thyme has dark green, closely spaced leaves which make it a dense and fast-growing ground cover.",
              },
            ],
          },
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                description: `${webName} is one of the leading Thyme importer from India. We at ${webName} Foods aim to spread the Indian culture, food, flowers, and such other products to the global market. Our executives will help you with every step of the export process until the final delivery of the products. This is a good opportunity for the local vendors and farmers to earn some extra revenue too. If you are looking for an exporter of Thyme, Contact ${webName} now!`,
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
        subTitle: "Green Cardamom Exporters",
        description:
          "Green Cardamom is a spice with an intense, slightly sweet flavour that can be compared to mint. Even though Green Cardamom originated in India, it is used all over the world today. The Green Cardamom exporter in India exports tonnes of Cardamom abroad. Green Cardamom is used in various sweet and savoury dishes. The Green Cardamom export from India has thus been on a rise for a few years. For an Indian Green Cardamom exporter, this is a good business opportunity. The Green Cardamom export from India includes different varieties being exported.",

        productContent: [
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                title: "Global Market Demand",
                description:
                  "Green Cardamom exporter in India exports 500 – 700 Metric Tons of Green Cardamom every year to various countries in the world. Green Cardamom is consumed widely in Bangladesh, Pakistan, Syria, Egypt, Jordan, Turkey, Iran, Sudan, North Africa, Europe so on and so forth. The Green Cardamom import from India has been on a rise due to the premium quality of Cardamom and the various varieties exported.",
              },
            ],
          },
          {
            type: contentConstsnts.SPECIFICATIONS,
            data: [
              {
                title: "Product Name",
                value: "Green Cardamom",
              },
              {
                title: "Origin",
                value: "India",
              },
              {
                title: "Family",
                value: "Zingiberaceae",
              },
              {
                title: "Binomial name",
                value: "Elettaria cardamomum",
              },
            ],
          },
          {
            type: contentConstsnts.INGREDIENTS,
            data: [
              {
                title: "Nutrients",
                values: [
                  "Calories 311 kcal",
                  "Total Carbohydrates 68g",
                  "Dietary Fiber 28g",
                ],
              },
              {
                title: "Minerals",
                values: ["Calcium", "Magnesium", "Iron"],
              },
              {
                title: "Vitamin",
                values: ["Vitamin B6", "Vitamin C"],
              },
              {
                title: "Protein",
                values: ["11 g"],
              },
              {
                title: "Fats",
                values: ["5 g"],
              },
            ],
          },
          {
            type: contentConstsnts.USES_AND_BENEFITS,
            data: [
              {
                type: contentConstsnts.USES_AND_BENEFITS.USES,
                data: [
                  "Cardamom is said to help lower blood pressure levels. This is most probably due to its antioxidant and diuretic properties.",
                  "Cardamom also has some antioxidant compounds that may help protect cells from damage and slow down and prevent inflammation in your body.",
                  "Cardamom is also used to treat bad breath and is a common component of some chewing gums. This may be because Cardamom kills common mouth bacteria and prevents cavities.",
                  "The essential oils and extracts of cardamom are said to be effective against a variety of bacterial strains that contribute to fungal infections, food poisoning and stomach issues. But more research in this field is required.",
                ],
              },
            ],
          },
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                description: `${webName} Foods is the leading Green Cardamom importer from India. We at ${webName} Foods understand that the process of export of Green Cardamom from India can be complicated at times. We are here to make it easy for you! Our trained executives will help you at every step of the process until the final delivery of the products. Being one of the most reliable exporters from India, we make sure that all the health and safety regulations are maintained. Looking for Green Cardamom export from India? Contact ${webName} Foods now!`,
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
        subTitle: "Peppercorns Exporters",
        description:
          "Peppercorns are basically dried berries from the vine Piper nigrum. These berries are ground into Black pepper. Black pepper is one of the most commonly used spices globally. The Peppercorns exporter in India exports tonnes of Peppercorns each year to many countries. Therefore, Peppercorn’s export from India has been increasing over time. This is a good opportunity for the Indian Peppercorns exporter to expand his business and enter the international market. The Peppercorns export from India includes the export of many varieties of this product.",

        productContent: [
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                title: "Global Market Demand",
                description:
                  "The Global market demand for Peppercorns has been increasing worldwide. This may be because of the several health benefits and diverse uses of this spice. Peppercorns add flavour and aroma to your food and are also healthy for your body. The Peppercorns exporter in India exports more and more quantities of this spice to various parts of the world. The Peppercorns import from India has been increasing due to its good reputation and the great quality of the products exported from India.",
              },
            ],
          },
          {
            type: contentConstsnts.SPECIFICATIONS,
            data: [
              {
                title: "Product Name",
                value: "Peppercorns",
              },
              {
                title: "Origin",
                value: "Indian subcontinent and in Southeast Asia",
              },
              {
                title: "Family",
                value: "Piperaceae",
              },
              {
                title: "Binomial name",
                value: "Piper nigrum",
              },
            ],
          },
          {
            type: contentConstsnts.INGREDIENTS,
            data: [
              {
                title: "Nutrients",
                values: [
                  "Calories 251 kcal",
                  "Total Carbohydrates 64g",
                  "Dietary Fiber 25g",
                ],
              },
              {
                title: "Minerals",
                values: ["Calcium", "Magnesium", "Iron"],
              },
              {
                title: "Vitamin",
                values: ["Vitamin B6", "Vitamin C"],
              },
              {
                title: "Protein",
                values: ["11 g"],
              },
              {
                title: "Fats",
                values: ["3.3g"],
              },
            ],
          },
          {
            type: contentConstsnts.USES_AND_BENEFITS,
            data: [
              {
                type: contentConstsnts.USES_AND_BENEFITS.USES,
                data: [
                  "Peppercorn is rich in a potent antioxidant called piperine. This antioxidant may help prevent free radical damage to your cells.",
                  "Peppercorns contain an active compound that decreases inflammation in animals. But we still don’t have if it has the same effect on humans.",
                  "Peppercorn has also demonstrated cholesterol-lowering effects in rodent studies. It is believed to boost the absorption of potential cholesterol-lowering supplements.",
                  " Peppercorns extract has improved symptoms of degenerative brain diseases in animal studies, but more research on humans in this field has to be conducted.",
                ],
              },
            ],
          },
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                description: `${webName} Foods is one of the leading Peppercorn importers from India. We help our clients export various food products including fruits, vegetables, grains, pulses, oilseeds, so on and so forth. We assist our clients with every step on the way right from documentation until the final delivery of the products in the export of Peppercorns. If you are looking for Peppercorns export from India, Contact ${webName} Foods now!`,
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
        subTitle: "Clove Exporter",
        description:
          "Cloves are primarily the aromatic flower buds of a tree in the family Myrtaceae. The Clove exporter in India exports cloves to around 149 countries in the world. The Clove export from India has been growing over the years due to the popularity of spice all over the world. This is a good business opportunity for the Indian Clove exporter to expand his business and export cloves worldwide. The clove export from India involves exporting various varieties of the spice.",

        productContent: [
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                title: "Global Market Demand",
                description:
                  "In the year 2019-2020, the Clove exporter in India exported Cloves worth around 91.62 USD million. The total volume of the cloves exported in 2019-2020 was around 5498639 MT. Clove import from India includes Kuwait, Singapore, Saudi Arabia, Panama Republic and the United Arab Emirates. The total export value of Clove in these top 5 countries was about 45.76 USD million.",
              },
            ],
          },
          {
            type: contentConstsnts.SPECIFICATIONS,
            data: [
              {
                title: "Product Name",
                value: "Cloves",
              },
              {
                title: "Origin",
                value: "Maluku Islands (or Moluccas) in Indonesia",
              },
              {
                title: "Family",
                value: "Myrtaceae",
              },
              {
                title: "Binomial name",
                value: "Syzygium aromaticum",
              },
            ],
          },
          {
            type: contentConstsnts.INGREDIENTS,
            data: [
              {
                title: "Nutrients",
                values: [
                  "Calories 6 kcal",
                  "Carbohydrates - 1.38 g",
                  "Fiber 0.7 grams",
                ],
              },
              {
                title: "Minerals",
                values: [
                  "Potassium",
                  "Magnesium",
                  "Iron",
                  "Selenium",
                  "Mangnesium",
                ],
              },
              {
                title: "Vitamin",
                values: ["Vitamin K"],
              },
              {
                title: "Protein",
                values: ["0.13 g"],
              },
              {
                title: "Fats",
                values: ["0.27g"],
              },
            ],
          },
          {
            type: contentConstsnts.USES_AND_BENEFITS,
            data: [
              {
                type: contentConstsnts.USES_AND_BENEFITS.USES,
                data: [
                  "Cloves are said to help fight tooth plague. Some research shows that using toothpaste or mouth wash which contains clove is beneficial for your teeth.",
                  "Cloves may also help reduce excessive sweating. Research states that applying clove oil to the palms for around 2 weeks may help reduce excessive sweating of the palms.",
                  "Clove oil is also said to be a Mosquito repellent. Applying clove oil or clove oil gel directly to the skin is said to repel mosquitos for up to 5 hours.",
                  "Applying a solution containing clove oil gel on the skin may also help with severe itching.",
                ],
              },
            ],
          },
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                description: `${webName} Foods is one of the leading Clove importers from India. We at ${webName} Foods hold extensive experience in the field of food export and know the ins and outs of the industry. Our global connections and in-depth knowledge of the industry have proved to be useful to many of our past clients. We will help you in the export of clove process right from finding buyers to quality checks and until your products have been successfully delivered to the destination. If you are looking for Clove export from India, Contact ${webName} now!`,
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
        subTitle: "Bay Leaf Exporters",
        description:
          "The Bay leaf is aromatic and has several culinary uses. The Bay Leaf exporter in India exports tonnes of Bay leaves abroad each year. Due to its various uses and benefits, the Bay Leaf export from India has been on a rise over the last few years. This is a good opportunity for the Indian Bay Leaf exporter to expand his business and enter the international marketplace. The Bay Leaf export from India includes the export of various varieties of the product.",

        productContent: [
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                title: "Global Market Demand",
                description:
                  "The Global Market Demand for Bay Leaf has been increasing for many years now. This growing popularity of Bay leaves may be due to the various nutritional characteristics of the leaves and its diverse uses. The Bay Leaf exporter in India exports the leaves to various parts of the world. The Bay Leaf import from India has been rising because of the premium quality and varieties of the leaf exported from India.",
              },
            ],
          },
          {
            type: contentConstsnts.SPECIFICATIONS,
            data: [
              {
                title: "Product Name",
                value: "Bay Leaf",
              },
              {
                title: "Origin",
                value: "Mediterranean",
              },
              {
                title: "Family",
                value: "Lauraceae",
              },
              {
                title: "Binomial name",
                value: "Laurus nobilis",
              },
            ],
          },
          {
            type: contentConstsnts.INGREDIENTS,
            data: [
              {
                title: "Nutrients",
                values: [
                  "Calories 314 kcal",
                  "Dietary Fiber - 26 g",
                  "Total Carbohydrates - 75 g",
                ],
              },
              {
                title: "Minerals",
                values: ["Calcium", "Magnesium", "Iron", "Cobalamin"],
              },
              {
                title: "Vitamin",
                values: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin B6"],
              },
              {
                title: "Protein",
                values: ["8 g"],
              },
              {
                title: "Fats",
                values: ["8 g"],
              },
            ],
          },
          {
            type: contentConstsnts.USES_AND_BENEFITS,
            data: [
              {
                type: contentConstsnts.USES_AND_BENEFITS.USES,
                data: [
                  "The bay leaf is said to be useful for diabetes. Research shows that taking ground bay leaf twice a day along with medicine for diabetes may lower pre-meal blood sugar levels.",
                  "The bay leaf is also said to be useful for reducing joint and muscle pain. The bay leaves may be ground and applied to the skin.",
                  "The bay leaves are said to be a cure for dandruff when applied to the skin.",
                  "Bay Leaf tea is also said to be useful for migraines and is a rich source of Vitamin C, Vitamin A, and such other minerals.",
                ],
              },
            ],
          },
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                description: `${webName} Foods is one of the leading Bay Leaf importers from India. We understand that the export of Bay Leaf may be a complex procedure at times. But don’t worry now! We at ${webName} Foods are here to help you! Our executives are trained to assist you with every step of the process right from finding buyers for your products until the final delivery. If you are looking for Bay Leaf export from India, Contact ${webName} now!`,
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
        subTitle: "Sugar cane/jaggery exporters",
        description:
          "Sugar Cane is a natural source of sweetness, widely cultivated for its ability to produce a variety of products, including jaggery—an unrefined, nutrient-rich sweetener. Unlike refined sugar, jaggery retains essential minerals and vitamins, making it a popular choice for those seeking a healthier alternative.",

        productContent: [
          {
            type: contentConstsnts.SPECIFICATIONS,
            data: [
              {
                title: "Product Name",
                value: " Sugar Cane / Jaggery",
              },
              {
                title: "Origin",
                value: "India",
              },
              {
                title: "Family",
                value: "Poaceae",
              },
              {
                title: "Binomial name",
                value: "Saccharum officinarum",
              },
            ],
          },
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                description:
                  "Shreevarni Export, we pride ourselves on sourcing the finest sugar cane and producing high-quality jaggery that meets the demands of consumers around the world. Our sugar cane is carefully cultivated to ensure optimal sweetness and nutritional value, while our jaggery retains the natural goodness and minerals of the cane, making it a healthy alternative to refined sugars.",
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
    subTitle: "Nourish Your Body with Nature’s Delight",
    description:
      "Dry fruits are nature’s ultimate snack, offering a burst of flavor, nutrients, and health benefits in every bite. These dehydrated fruits are not only delicious but also packed with essential vitamins, minerals, and antioxidants, making them a perfect addition to any diet.",

    subProducts: [
      {
        img: "https://avatars.mds.yandex.net/i?id=f73f3d2efb170439adb01d9d534e9299-5537533-images-thumbs&n=13",
        title: productConstants.DRY_FRUITS.SUB_PRODUCT.RAISINS.TITLE,
        path: productConstants.DRY_FRUITS.SUB_PRODUCT.RAISINS.PATH,
        slug: productConstants.DRY_FRUITS.SUB_PRODUCT.RAISINS.SLUG,
        subTitle: "Raisins Exporters",
        description:
          "Raisins are basically dried grapes. They are shrivelled, bite-sized morsels of sweetness. They are a great and healthy snack option. The Raisins exporter in India exports tonnes of the product each year to many countries. The Raisins export from India has been increasing over time due to the growing popularity and the uses of the product. This is a good opportunity for the Indian Raisins exporter to expand his business and enter the international market. The Raisins export from India includes the export of many varieties of this product.",

        productContent: [
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                title: "Global Market Demand",
                description:
                  "Raisins are rich in minerals and nutrients and therefore have many health and medicinal benefits. The Global Market Demand for Raisins has been on a rise in the world. The Raisins exporter in India exports to many countries including Morocco, Saudi Arabia, Russia, Sri Lanka and so on. The Raisin import from India has been increasing due to the great reputation and quality of the raisins exported from India.",
              },
            ],
          },
          {
            type: contentConstsnts.SPECIFICATIONS,
            data: [
              {
                title: "Product Name",
                value: "Raisins",
              },
              {
                title: "Origin",
                value: "Corinth, Greece",
              },
              {
                title: "Family",
                value: "Rhamnaceae",
              },
              {
                title: "Binomial name",
                value: "Vitis vinifera L.",
              },
            ],
          },
          {
            type: contentConstsnts.INGREDIENTS,
            data: [
              {
                title: "Nutrients",
                values: [
                  "Calories 299 kcal",
                  "Dietary Fiber 3.7g",
                  "Total Carbohydrates 79g",
                ],
              },
              {
                title: "Minerals",
                values: ["Calcium", "Magnesium", "Iron"],
              },
              {
                title: "Vitamin",
                values: ["Vitamin C", "Vitamin B6"],
              },
              {
                title: "Protein",
                values: ["3.1 g"],
              },
              {
                title: "Fats",
                values: ["0.5 g"],
              },
            ],
          },
          {
            type: contentConstsnts.USES_AND_BENEFITS,
            data: [
              {
                type: contentConstsnts.USES_AND_BENEFITS.USES,
                data: [
                  "Raisins are said to be good for digestion. They contain fibres that swell in the presence of water. This gives a laxative effect to the stomach and helps in relieving constipation.",
                  "Raisins are rich in potassium and magnesium. This helps to reduce acidity levels and remove the toxins from the system, preventing diseases like arthritis, gout, kidney stones and so on.",
                  "Raisins contain iron and other B-Complex vitamins which help treat anaemia. The copper in the raisins helps in the production of red blood cells.",
                  "Raisins contain polyphenolic phytonutrients also known as anti-inflammatory antioxidants. They exhibit antibacterial properties that help lower the risk of fever and kill the bacteria.",
                ],
              },
            ],
          },
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                description: `${webName} Foods is one of the leading Raisins importer from India. We help our clients export various food products including fruits, vegetables, grains, pulses, oilseeds, so on and so forth. The exporter of Raisins has a great business opportunity to enter the international market and earn good revenues. If you are looking for Raisin export from India, Contact ${webName} Foods now!`,
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
        subTitle: "Black Raisins Exporters",
        description:
          "Black raisins are dried grapes that offer a delightful combination of sweetness, flavor, and health benefits. These naturally sweet treats are not only delicious but also packed with essential nutrients, making them a popular choice among health-conscious individuals and food enthusiasts alike.",

        productContent: [
          {
            type: contentConstsnts.SPECIFICATIONS,
            data: [
              {
                title: "Product Name",
                value: "Black Raisins",
              },
              {
                title: "Origin",
                value: "Corinth, Greece",
              },
              {
                title: "Family",
                value: "Rhamnaceae",
              },
              {
                title: "Binomial name",
                value: "Vitis vinifera L.",
              },
            ],
          },
          {
            type: contentConstsnts.USES_AND_BENEFITS,
            data: [
              {
                type: contentConstsnts.USES_AND_BENEFITS.USES,
                data: [
                  "Black raisins can be enjoyed on their own as a healthy snack, added to trail mixes, or incorporated into a variety of dishes, including salads, oatmeal, and baked goods.",
                  "Their natural sweetness enhances both sweet and savory recipes, making them a great addition to curries, rice dishes, and desserts.",
                  "Use black raisins as a natural sweetener in smoothies, energy bars, or yogurt for a nutritious twist.",
                ],
              },
              {
                type: contentConstsnts.USES_AND_BENEFITS.BENEFITS,
                data: [
                  "Black raisins contain essential minerals like calcium and boron, which contribute to bone density and strength.",
                  " The antioxidants in black raisins help reduce inflammation and support overall health.",
                  "Despite their sweetness, black raisins have a low glycemic index, making them a smart choice for maintaining stable blood sugar levels.",
                ],
              },
            ],
          },
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                description: `${webName} Foods is one of the leading Black Raisins importer from India. We help our clients export various food products including fruits, vegetables, grains, pulses, oilseeds, so on and so forth. The exporter of Black Raisins has a great business opportunity to enter the international market and earn good revenues. If you are looking for Raisin export from India, Contact ${webName} Foods now!`,
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
        subTitle: "Cashew Nuts Exporters",
        description:
          "Cashew is an average-sized tropical evergreen tree from the Anacardiaceae family. This tree is generally cultivated for its curved edible seeds. The Cashew Nuts exporter in India exports cashews to around 61 countries in the world. The combined value of the total Cashew Nuts export from India is around 41.64 USD million. The top five trading partners for the Indian Cashew Nuts exporter include Vietnam, USA, Malaysia, UAE and Norway. The Cashew Nuts export from India includes the export of many varieties of the product.",

        productContent: [
          {
            type: contentConstsnts.INGREDIENTS,
            data: [
              {
                title: "Nutrients",
                values: [
                  "Calories - 48 calories",
                  "Dietary Fiber - 3.3 g",
                  "Carbohydrate 11 g",
                ],
              },
              {
                title: "Minerals",
                values: ["Calcium", "Magnesium", "Iron"],
              },
              {
                title: "Vitamin",
                values: ["Vitamin B6"],
              },
              {
                title: "Protein",
                values: ["18 g"],
              },
            ],
          },
          {
            type: contentConstsnts.VARIETIES,
            title: "Cashew Nuts Varieties We Export",
            description:
              "The Cashew Nuts import from India includes several varieties of the nuts including BPP-1, BPP-8, VRI-1 so on and so forth. The Cashew Nuts exporter in India exports premium quality of the nuts to various corners of the world. The export of Cashew includes the following major varieties.",
            data: [
              {
                title: "BPP-1",
                description:
                  "This variety is a hybrid developed from the cross between Tree No.1 as the female parent and Tree No.273 as the male parent. The BPP-1 variety was released in 1980. The average yield of this variety is around 10 kg/tree. The Nuts are medium in size with a nut weight of about 5g and the shelling percentage of about 27.5.",
              },
              {
                title: "BPP-8",
                description:
                  "The BPP-8 variety It is a hybrid variety from the cross of Tree No.1 x Tree No.39. This variety was released in 1993 for general cultivation in Andhra Pradesh. The BPP-8 variety has been performing well in Orissa and West Bengal. This variety is said to be superior to the other six varieties developed from Bapatla.",
              },
              {
                title: "VRI-1",
                description:
                  "The VRI-1 variety is a selection from germplasm collected from Vazhi Sothanai Palayam in the South Arcot District of Tamil Nadu. This variety has a medium-sized tree which has a setting of 5 to 7 fruits per panicle. Released in 1981, the mean yield of VRI-1 is around 7.2 kg/tree under Vridhachalam conditions. The nut size of this variety is small with 5g nut weight and shelling percentage of about 28%.",
              },
              {
                title: "VRI-3",
                description:
                  "Released in 1991, the VRI-3 is a selection from the seedling progeny of a high yielding tree collected from a village Edayanchavadi in the South Arcot District of Tamil Nadu. The average yield of VRI-3 is around 10 kg/tree. The nut size of this variety is medium with 7.2g nut weight and shelling percentage of about 29.1%.",
              },
              {
                title: "Bhuvaneshwar",
                description:
                  "The Bhuvaneshwar is a selection from the seedling progeny of WBDC V (Vengurla 36/3), a collection from Regional Fruit Research Station, Vengurla. Released in 1989, the flowering season for this variety is from January to March with a medium duration of 70 days. This variety has a cluster bearing habit with about 12 fruits per bunch",
              },
              {
                title: "Balabhadra",
                description:
                  "The Balabhadra is an Early flowering (Dec-Feb) variety that has bold nuts with around 7.4 g nut weight. This variety gives an average nut yield of about 2.0 t/ha (10.0 kg/tree). This variety also possesses a high shelling percentage of about 30.0 %.",
              },
              {
                title: "Jhargram-1",
                description:
                  "The Jhargram-1 is a selection from T.No.16 originally collected from Bapatla. Released in the year 1989, it has a medium compact canopy and intensive branching habit. It has on an average, 6 fruits per bunch and yields around 8.5 kg/tree with small nut size. The shelling percentage of this variety is around 30%.",
              },
              {
                title: "Jhargram-2",
                description:
                  "The Jhargram-2 is a selection made from the seedling plantation of H-2/15 of Regional Research Station in West Bengal. This variety has a midseason flowering habit with 3-4 fruits per panicle. The average nut weight of this variety is about 9.2g with a kernel weight of 2.85g and shelling percentage of about 32%.",
              },
              {
                title: "Vengurla-1",
                description:
                  "The Vengurla-1 is a selection from the germplasm collected from Ansur village in the Vengurla Tehsil of Maharashtra. Released in 1974, the average percentage of perfect flowers of this variety is about 8%. The average yield of Vengurla-1 is around 19 kg/tree. The nut weight of this variety is around 6.2g with a shelling percentage of 31.",
              },
              {
                title: "Vengurla-8",
                description:
                  "The Vengurla-8 is a hybrid variety of Cashew Nuts released in 2001. This variety yields about 15-20 kg /tree. The Vengurla-8 has bold nuts with around 86 nuts/kg. The variety is a red apple variety and the juice recovery is 85%.",
              },
              {
                title: "Balli-2",
                description:
                  "The Balli-2 is a variety developed and released in 1999 from the ICAR Research Complex in Goa. This is the first cashew variety released from Goa. The average yield of Balli-2 is 7.0 kg/tree with a nut weight of about 7.6 g and the shelling percentage of 30.0%.",
              },
              {
                title: "Tiswadi-3",
                description:
                  "The Tiswadi-3 variety was developed and released from the ICAR Research Complex, Goa in 2007. This variety is a selection from Ela village of Tiswadi taluk of North Goa District. The average yield of this variety is 5.5 kg/tree with a nut weight of around 9.4 g and the shelling percentage of around 29.25.",
              },
            ],
          },
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                description: `${webName} Foods is the leading Cashew Nuts importer from India. We at ${webName} Foods understand that the export process may be a complicated process at times. Our executives will help you with each and every step involved in the process of export, right from documentation to the final delivery of the products. If you are looking for an exporter of Cashew Nuts, Contact ${webName} now!`,
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
        subTitle: "Poppy Seeds Exporters",
        description:
          "Poppy seeds are small, oil-rich seeds derived from the poppy plant (Papaver somniferum). Renowned for their unique flavor and crunchy texture, these tiny seeds are not only a popular ingredient in various cuisines but also packed with numerous health benefits.",

        productContent: [
          {
            type: contentConstsnts.USES_AND_BENEFITS,
            data: [
              {
                type: contentConstsnts.USES_AND_BENEFITS.USES,
                data: [
                  "Poppy seeds are used in a variety of dishes across different cuisines. They can be sprinkled on breads, muffins, and pastries, or used to add crunch to salads and grain dishes.",
                  "Their nutty flavor enhances both sweet and savory recipes, making them a popular choice for Indian curries, Middle Eastern dishes, and baked goods.",
                  "In many cultures, poppy seeds are used in traditional dishes, such as poppy seed rolls, desserts, and sauces, showcasing their versatility and rich culinary heritage.",
                ],
              },
              {
                type: contentConstsnts.USES_AND_BENEFITS.BENEFITS,
                data: [
                  "Poppy seeds contain trace amounts of opium alkaloids, which can have a calming effect on the body and mind when consumed in moderation.",
                  "The calcium content in poppy seeds helps strengthen bones and teeth, reducing the risk of osteoporosis.",
                  "Rich in antioxidants, poppy seeds can contribute to healthy skin by protecting against oxidative stress and inflammation.",
                ],
              },
            ],
          },
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                description:
                  "Shreevarni Export, we are dedicated to sourcing the finest poppy seeds that add a unique flavor and nutritional boost to your culinary creations. Our high-quality poppy seeds are carefully harvested and processed to ensure they retain their natural oils and rich taste, making them a valuable addition to both sweet and savory dishes.",
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
    subTitle: "The Foundation of Healthy Eating",
    description:
      "Grains are an essential component of a balanced diet, providing a rich source of carbohydrates, fiber, vitamins, and minerals. As staple foods across cultures, grains serve as the foundation for countless meals, contributing not only to flavor and texture but also to overall health and wellness.",
    subProducts: [
      {
        img: "https://avatars.mds.yandex.net/i?id=06a04bb3f16650101916b074b87ae0247191b3c8-4055677-images-thumbs&n=13",
        title: productConstants.GRAINS.SUB_PRODUCT.MILLET.TITLE,
        path: productConstants.GRAINS.SUB_PRODUCT.MILLET.PATH,
        slug: productConstants.GRAINS.SUB_PRODUCT.MILLET.SLUG,
        subTitle: "Pearl Millet Exporters",
        description:
          "Pearl millet is a millet, an annual grass, erect and reaching up to around 3 m high with a profuse root system. The global demand for pearl millet has been increasing and thus the Pearl Millet exporter in India exports tonnes of millet each year. Pearl millet is also known to have several other uses and benefits including some health and medicinal benefits. Therefore, the Pearl millet export from India is predicted to grow rapidly in the coming years. The Indian pearl millet exporter earns goof revenues from the export of their products to several countries in the world. It can be said that the pearl millet export is now a good business opportunity for food exporters.",

        productContent: [
          {
            type: contentConstsnts.INGREDIENTS,
            data: [
              {
                title: "Nutrients",
                values: [
                  "Calories - 378 calories",
                  "Carbohydrates - 73g",
                  "Dietary Fiber - 17g/200 grams",
                ],
              },
              {
                title: "Minerals",
                values: [
                  "Calcium",
                  "Magnesium",
                  "Iron",
                  "Phosphorus",
                  "Potassium",
                  "Sodium",
                ],
              },
              {
                title: "Vitamin",
                values: [
                  "Vitamin E",
                  "Vitamin K",
                  "Folate",
                  "Vitamin B6",
                  "Niacin",
                  "Riboflavin",
                  "Thiamin",
                ],
              },
              {
                title: "Protein",
                values: ["11 g"],
              },
              {
                title: "Fats",
                values: ["8.4 g"],
              },
            ],
          },
          {
            type: contentConstsnts.VARIETIES,
            title: "Pearl Millet Varieties We Export",
            description:
              "Pearl Millet import from India includes the import of different varieties of Pearl Millet including Giant Bajra, Raj Bajra Chari-2, APFB-2 so on, and so forth. The Pearl Millet exporter in Indi exports premium quality millets to many countries in the world. The export of Pearl Millet from India includes these key varieties.",
            data: [
              {
                title: "Giant Bajra",
                description:
                  "This variety of Pearl Millet has been recommended for cultivation in the entire Bajra growing area. The plants of this variety are leafy with profuse tillering and have 9-10% protein at boot stage. This variety is known to be moderately resistant to downy mildew and ergot diseases.",
              },
              {
                title: "Raj Bajra Chari-2",
                description:
                  "This variety of Peral Millet has been notified for cultivation for the entire Bajra growing area. The green fodder yield is around 30–45 t/ha. Raj Bajra Chari-2 is resistant to foliar diseases and insect-pests. At the ear emergence stage, internodes are completely enclosed in the leaf sheath and the leaves are shiny and broad.",
              },
              {
                title: "APFB-2",
                description:
                  "The APFB-2 variety of Pear Millets is recommended for cultivation in Andhra Pradesh. This variety belongs to the early maturity group, non-lodging, fertilizer responsive, best suited to summer and early Kharif sowings. The plant height is 160–180 cm providing green fodder yield around 25 t/ha.",
              },
              {
                title: "PCB-164",
                description:
                  "The PCB-164 variety of Pearl Millets has been developed by PAU, Ludhiana from five late maturing lines. This variety of Pearl Millet was released and notified for cultivation in the north-west part of India.",
              },
              {
                title: "Avika Bajra Chari (AVKB-19)",
                description:
                  "The Avika Bajra Chari variety has been recommended for cultivation in the state of western Uttar Pradesh, Rajasthan, Haryana, Punjab and Tarai region of Uttarakhand. This variety also known as AVKB-19, is said to have a dual purpose with a green fodder yield potential of 36.7 t/ha, dry fodder 8.8 t/ha and 10.2 q/ha seed yield.",
              },
              {
                title: "Narendra Chara Bajra-2 (NDFB- 2)",
                description:
                  "The Narendra Chara Bajra variety has been developed by NDUA&T, Faizabad. This variety of Pearl Millets has been recommended for cultivation in pearl millet growing areas in the north-east zone under salt-affected soils.",
              },
              {
                title: "FBC-16",
                description:
                  "The FBC-16 variety of Pearl millets has been notified for cultivation in entire north-west India. This variety is said to be a multi-cut variety and is resistant to major diseases. The variety also has a low concentration of oxalates and high voluntary dry matter intake by the animals. The green fodder yield potential of this variety is 70–80 t/ha.",
              },
              {
                title: "TNSC-1",
                description:
                  "This variety of Pearl millets was bred by TNAU, Coimbatore and was recommended for cultivation in the entire Bajra growing area of the country in the year 1995. TNSC-1 variety provides around 27–40 t/ha green fodder and is said to be resistant to foliar diseases and insect-pests.",
              },
              {
                title: "OL-125",
                description:
                  "The OL-125 variety of oats was developed by intervarietal hybridization using Appler and IPC-163 followed by pedigree breeding and selection. The variety was released in 1995 for cultivation in the north-west and central zone of the country. This variety is suitable for single cut/multi-cut and yields 58 t/ha green fodder.",
              },
            ],
          },
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                description: `If you are looking for a Pearl Millet importer from India, ${webName} Foods is the best choice for you! ${webName} Foods is one of the most trustworthy exporters of food products including pulses, grains, veggies, fruits, and such other products from India. Export of Pearl millet is a good opportunity for Indian vendors and exporters to enter the international market and export Indian food products.`,
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
        subTitle: "Rice Exporters",
        description:
          "Rice is one of the most popular and widely consumed staple foods. It is consumed extensively in Asia and Africa and is the agricultural commodity with third-highest production in the world. It is generally grown as an annual plant but in areas like the tropics, it can survive as a perennial crop.",

        productContent: [
          {
            type: contentConstsnts.VARIETIES,
            title: "Basmati Rice",
            description:
              "Basmati rice is one of the varieties of rice generally found in India. It is known for its long, slender looking grain and has a great aroma. Basmati rice is popular across the globe for its unique flavour. It is best used in dishes like biryani, fried rice, pilaf and such other popular dishes.India is one of the major basmati rice exporter.",
            data: [
              {
                title: "1121 Basmati Rice -white",
                description:
                  "Pusa Basmati 1121 is a variety having Basmati rice quality traits from the traditional Basmati varieties such as Basmati 370 and Type 3. This type is basically derived from the process of hybridization. Commercial cultivation for 1121 Basmati Rice started in 2003. It’s characteristics include extra-long slender milled grains, a pleasant aroma, volume expansion more than four times, appealing taste, good mouthfeel, and easy digestibility.",
              },
              {
                title: "Traditional Basmati Rice",
                description:
                  "There are various types of basmati rice. Traditional types include basmati 370, basmati 385, and basmati Ranbirsinghpura. Traditional Basmati Rice is available in Parboiled and Raw form. It is used in Continental Cuisine, Indian Cuisine, Mughlai Cuisine & Chinese Cuisine.",
              },
              {
                title: "Golden Sella basmati rice",
                description:
                  "Parboiling rice retains more of the vitamins and minerals from the original grain. The procedure guarantees a firm grain upon cooking. Parboiled rice is both cholesterol and gluten free. It is also low in sodium and saturated fat. Rice provides complex carbohydrates used by the body for energy.",
              },
              {
                title: "Sugandha Basmati Rice",
                description:
                  "Sugandha Basmati Rice is one of the low-cost long grain basmati rice in India. It is generally cultivated in Punjab, Haryana, and Uttar Pradesh and such other states of India. Sugandha Basmati Rice has a great fragrance and is non-sticky rice. It is usually slightly shorter than 1509 Basmati and 1121 Basmati rice. It may extend up to twice its length if cooked well.",
              },
              {
                title: "Sharbati Basmati Rice",
                description:
                  "Sharbati Basmati Rice is made from the hybrid of Traditional Basmati Rice and has no specific aroma. The cooking of Sharbati Basmati Rice is similar to Basmati Rice. It is about 14-15MM long. Its rice grain is around 7.1-7.2MM in length.",
              },
            ],
          },
          {
            type: contentConstsnts.VARIETIES,
            title: "Non-Basmati Rice",
            description:
              "All other varieties of rice, except basmati is calle non- basmati rice. Non-basmati rice includes rice of different varieties, sizes, and shapes. Some types of rice are long and slender, while some are short and thick. Non- Basmati Rice is used in homes for daily use and also is used and exported for commercial use.",
            data: [
              {
                title: "Parboiled Rice",
                description:
                  "Parboiled rice is rice that has been partially boiled in the husk. It is basically like easy to cook rice. The process of parboiling includes soaking, steaming and drying.These processes make the rice easier to process by hand. Parboiling also boosts its nutritional profile, changing its texture, and making it more resistant to weevils.",
              },
              {
                title: "Broken Rice",
                description:
                  "First of all, even though this type is called broken rice, nothing is actually wrong with it. It is as nutritious as any other rice. It is basically just fragments of rice grains, broken in the field, during drying, transport, or by milling. Mechanical separators are used to separate the broken grains from the whole grains and sort them by size.",
              },
              {
                title: "Swarna Rice",
                description:
                  "Swarna is one of the most healthy rice choices. It has a very low risk of diabetes as it has a low glycemic index. Swara rice is grown extensively in India.",
              },
              {
                title: "Sona Masoori Rice",
                description:
                  "Sona masuri variety of rice is a medium-grain rice grown largely in the states of Andhra Pradesh, Telangana, and Karnataka in India. Sona Masuri literally translates to Golden Ivy. It is lightweight and aromatic. This premium variety of rice is mainly exported to the USA, Canada, Europe, Malaysia, and Middle East countries such as Saudi Arabia and Qatar.",
              },
            ],
          },
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                description:
                  "Shreevarni Export, we specialize in sourcing and providing the highest quality rice to meet the diverse needs of our customers worldwide. Our rice is carefully cultivated and harvested, ensuring that each grain reflects our commitment to quality, sustainability, and authenticity.",
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
        subTitle: "Wheat Exporters",
        description:
          "Wheat is a cereal grain mostly eaten in the form of bread in different parts of the world. Wheat exporter in India exports tonnes of wheat abroad each year. Wheat is also known to have a higher protein content than other major cereals such as maize or rice. Thus the global demand for wheat export is on the rise. The Indian wheat exporter, therefore, exports increasing amount of wheat and wheat products each year. This is a good opportunity for wheat export from India to rise and earn good revenues for the vendors and farmers.",

        productContent: [
          {
            type: contentConstsnts.INGREDIENTS,
            data: [
              {
                title: "Nutrients",
                values: [
                  "Calories - 364 calories",
                  "Dietary Fiber - 2.7 g",
                  "Total Carbohydrate 76 g",
                ],
              },
              {
                title: "Minerals",
                values: [
                  "Iron",
                  "Thiamin",
                  "Niacin",
                  "Calcium",
                  "Selenium",
                  "Manganese",
                  "Phosphorous",
                  "Copper",
                  "Folate",
                ],
              },
              {
                title: "Vitamin",
                values: ["Vitamin B6"],
              },
              {
                title: "Protein",
                values: ["10 g"],
              },
            ],
          },
          {
            type: contentConstsnts.VARIETIES,
            title: "Wheat Varieties We Export",
            description:
              "Wheat import from India includes import of various varieties of wheat like VL- 832, VL-804, HS-365 so on and so forth. The wheat exporter in India export premium quality products to various continents in the world. The export of wheat from India includes the following key varieties.",
            data: [
              {
                title: "VL-832",
                description:
                  "The VL-832 variety of wheat is exported from India to many countries in the world. The days required for the maturity of this variety is around 155-160 days. The average yield of this variety of wheat is 25-30q/ha. This variety of wheat is said to be resistant to brown and yellow rusts and lose smut.",
              },
              {
                title: "VL-804",
                description:
                  "For the variety VL-804, the time required for the plant to mature after transplanting is around 164-178 days. This variety of wheat is known to be tolerant of snowfall. It is also resistant to brown and yellow rusts.",
              },
              {
                title: "HS-365",
                description:
                  "The HS-365 variety of Wheat is majorly grown in the state of Tamil Nadu. In Tamil Nadu, this variety is said to be grown in the Nilgiri and Palni hills regions. This variety of wheat grows well at a high altitude in all situations.",
              },
              {
                title: "HS-240",
                description:
                  "This variety of wheat grows well in the hills of Uttarakhand, Himachal Pradesh, J&K, Sikkim and other far eastern states. HS-249 grows well on a medium-altitude and is irrigated timely sown or rainfed timely sown.",
              },
              {
                title: "HD 2687",
                description:
                  "The HD 2687 variety of wheat is generally grown in the regions of Punjab, Haryana, Delhi, Western Uttar Pradesh, Rajasthan, foothills of Himachal Pradesh, Jammu& Kashmir and Uttarakhand. The cultural conditions required for this variety are Irrigated Timely sown.",
              },
              {
                title: "PBW-343",
                description:
                  "The PBW-343 is a variety of wheat which is grown in states like Punjab, Haryana, Delhi, Western Uttar Pradesh, Rajasthan, foothills of Himachal Pradesh, Jammu& Kashmir, Uttarakhand and such other states. The cultural conditions required for this variety include irrigated Timely sown.",
              },
              {
                title: "Shresth (HD 2687)",
                description:
                  "Shreshth, also known as HD 2687, is a variety of wheat exported from India. The states where this variety is grown are Punjab, Haryana, Delhi, Western Uttar Pradesh, Rajasthan, foothills of Himachal Pradesh, Jammu& Kashmir, Uttarakhand and such other states.",
              },
            ],
          },
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                description: `${webName} Foods is one of the most recommended wheat importer from India. Wheat is eaten in various forms across the world thus export of wheat from India has a good opportunity to expand. ${webName} food has a strong experience in wheat export from India. We make sure that all the health and safety standards are maintained and high-quality wheat is exported from India. Want to export wheat? ${webName} Foods is the best choice for you!`,
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
        subTitle: "Black Wheat Exporters",
        description:
          "Black wheat is an ancient grain that has gained popularity for its unique color, flavor, and exceptional nutritional profile. This lesser-known variety of wheat is characterized by its dark outer bran layer, which is packed with antioxidants, making it a powerful addition to a healthy diet.",

        productContent: [
          {
            type: contentConstsnts.USES_AND_BENEFITS,
            data: [
              {
                type: contentConstsnts.USES_AND_BENEFITS.USES,
                data: [
                  "Black wheat can be used in a variety of culinary applications, from making bread and pasta to incorporating it into salads, soups, and side dishes. Its unique flavor adds depth and character to any meal.",
                  "Black wheat is typically consumed as a whole grain, retaining its bran and germ, which enhances its nutritional value and provides a nutty flavor and chewy texture.",
                  "Use black wheat flour as a substitute for regular wheat flour in baking recipes for a more nutritious twist on traditional baked goods, such as muffins, pancakes, and bread.",
                ],
              },
              {
                type: contentConstsnts.USES_AND_BENEFITS.BENEFITS,
                data: [
                  "The antioxidants and fiber in black wheat contribute to cardiovascular health by lowering cholesterol levels and improving circulation.",
                  "High fiber content helps promote satiety, making black wheat a great choice for those looking to manage their weight.",
                  "While black wheat does contain gluten, some individuals with mild gluten sensitivities may find it easier to digest than other wheat varieties. Always consult with a healthcare provider if you have concerns about gluten.",
                ],
              },
            ],
          },
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                description:
                  "Shreevarni Export, we take pride in sourcing the finest black wheat for our customers seeking nutritious and flavorful grains. This ancient grain, known for its unique dark color and rich nutrient profile, is a remarkable addition to any healthy diet.",
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
        subTitle: "Sorghum Exporter",
        description:
          "Sorghum is primarily a strong grass and has edible starchy seeds. Sorghum is a diverse crop and has many uses in different industries. In India sorghum is popularly known as Jowar, Cholam, or Jonna. The Sorghum exporter in India exports a huge quantity of the crop each year. Due to the growing popularity of Sorghum, Sorghum export from India has also been on a rise. This is, therefore, a great opportunity for the Indian Sorghum exporter to expand his business and enter the international marketplace. The jawari export includes various varieties and qualities of the product.",

        productContent: [
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                title: "Global Market Demand",
                description:
                  "Sorghum is a major food crop in Africa and has many other uses as well. It is used as a food product, as hay and also as fodder. Sorghum is valued in hot and arid regions largely for its resistance to drought and heat. The Sorghum exporter in India exports good quality Sorghum to various parts of the world. The Sorghum import from India has thus seen a steady increase over the past few years.",
              },
            ],
          },
          {
            type: contentConstsnts.SPECIFICATIONS,
            data: [
              {
                title: "Product Name",
                value: "Sorghum",
              },
              {
                title: "Origin",
                value: "Northeastern Africa",
              },
              {
                title: "Family",
                value: "Poaceae",
              },
              {
                title: "Binomial name",
                value: "Sorghum bicolor",
              },
            ],
          },
          {
            type: contentConstsnts.INGREDIENTS,
            data: [
              {
                title: "Nutrients",
                values: [
                  "Calories 316",
                  "Carbohydrate - 69g",
                  "Dietary fibre - 6 g",
                ],
              },
              {
                title: "Minerals",
                values: [
                  "Iron",
                  "Magnesium",
                  "Copper",
                  "Phosphorous",
                  "Zinc",
                  "Potassium",
                ],
              },
              {
                title: "Vitamin",
                values: [
                  "Vitamin B1",
                  "Vitamin B2",
                  "Vitamin B5",
                  "Vitamin B6",
                ],
              },
              {
                title: "Protein",
                values: ["10 g"],
              },
              {
                title: "Fats",
                values: ["3 g"],
              },
            ],
          },
          {
            type: contentConstsnts.USES_AND_BENEFITS,
            data: [
              {
                type: contentConstsnts.USES_AND_BENEFITS.USES,
                data: [
                  "Sorghum is used as a food product. It is also used to make edible oil, starch, dextrose, and certain alcoholic beverages.",
                  "Sorghum is also used as hay and fodder. The stalks of the crop are used as fodder and building materials.",
                  "Sorghum is used to make brooms and brushes.",
                  " Sweet Sorghum is also used for syrup manufacture and in the production of ethyl alcohol for biofuel.",
                ],
              },
            ],
          },
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                description: `${webName} Foods is a leading Sorghum importer from India. We at ${webName} Foods help our clients with each and every step while exporting products from India. Our team has extensive experience in the field of export of Sorghum. We will make sure that the process is carried out smoothly with the least confusion and hassle. We strictly adhere to all the health and safety restrictions of the government and make sure that your products are delivered safely. If you are looking for Sorghum export from India, Contact ${webName} now!`,
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
    subTitle: "Enhance Your Natural Beauty",
    description:
      "Cosmetics are products designed to enhance or alter the appearance of the face, body, and hair. From makeup to skincare, cosmetics play a significant role in personal grooming and self-expression, allowing individuals to showcase their unique beauty.",
    subProducts: [
      {
        img: "https://avatars.mds.yandex.net/i?id=78e19f80ccc1f124af44554331fde09fc3916144-8182659-images-thumbs&n=13",
        title: productConstants.COSMATIC.SUB_PRODUCT.BANANA_POWDER.TITLE,
        path: productConstants.COSMATIC.SUB_PRODUCT.BANANA_POWDER.PATH,
        slug: productConstants.COSMATIC.SUB_PRODUCT.BANANA_POWDER.SLUG,
        subTitle: "Banana Powder Exporter",
        description:
          "Banana powder is a natural cosmetic ingredient derived from dried bananas, celebrated for its numerous skin and beauty benefits. Packed with vitamins, minerals, and antioxidants, banana powder has become a favorite in the world of cosmetics for its ability to enhance beauty routines.",

        productContent: [
          {
            type: contentConstsnts.USES_AND_BENEFITS,
            data: [
              {
                type: contentConstsnts.USES_AND_BENEFITS.USES,
                data: [
                  "Dust banana powder over foundation to set makeup and control shine for a flawless finish. It works particularly well for oily skin types.",
                  "Combine banana powder with other natural ingredients, such as honey or yogurt, to create a nourishing face mask that brightens and revitalizes the skin.",
                  "Mix banana powder with exfoliating agents like sugar or salt to create a natural body scrub that exfoliates and nourishes the skin.",
                ],
              },
              {
                type: contentConstsnts.USES_AND_BENEFITS.BENEFITS,
                data: [
                  "Banana powder contains vitamin C and other nutrients that help brighten the skin, giving it a radiant and youthful glow. It can even out skin tone and reduce the appearance of dark spots and blemishes.",
                  "Ideal for oily and combination skin types, banana powder effectively absorbs excess oil, helping to control shine throughout the day. It provides a matte finish, making it a perfect setting powder for makeup.",
                  "The fine texture of banana powder gently exfoliates the skin, removing dead skin cells and promoting a smoother, softer complexion. This can lead to improved skin texture and appearance over time.",
                  "Rich in potassium and other minerals, banana powder has soothing properties that can calm irritated skin. It is often used in masks and treatments designed for sensitive or inflamed skin.",
                  "Banana powder can be used in various cosmetic applications, including as a setting powder, in face masks, or mixed with other skincare products. It can also be incorporated into homemade beauty treatments for a natural skincare routine.",
                ],
              },
            ],
          },
          {
            type: contentConstsnts.CONTENT,
            data: [
              {
                description:
                  "Discover the versatility and effectiveness of banana powder in your beauty routine. Whether you're looking to achieve a radiant complexion, control oil, or create natural skincare treatments, Shreevarni Export offers premium banana powder to help you enhance your natural beauty. Elevate your cosmetics with the nourishing properties of banana powder today!",
              },
            ],
          },
        ],
      },
    ],
  },
];
