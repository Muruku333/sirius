"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Gabriel Dias",
          nick: "biel",
          email: "gabriel.dias.fern@gmail.com",
          password: "25d55ad283aa400af464c76d713c07ad", // 12345678
          avatar_url:
            "https://i.ibb.co/kxcGJnb/C4-D7-BB6-A-C7-FE-4-D18-8627-B24-DA5-C77297.jpg",
          cover_url:
            "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2FsbHBhcGVyJTIwNGt8ZW58MHx8MHx8&w=1000&q=80",
          account_privacy: "public",
          account_verified: "identity",
        },
        {
          name: "Gabriel Not Verified",
          nick: "bielnf",
          email: "gabriel@gmail.com",
          password: "25d55ad283aa400af464c76d713c07ad", // 12345678
          avatar_url:
            "https://i.ibb.co/kxcGJnb/C4-D7-BB6-A-C7-FE-4-D18-8627-B24-DA5-C77297.jpg",
          cover_url:
            "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2FsbHBhcGVyJTIwNGt8ZW58MHx8MHx8&w=1000&q=80",
          account_privacy: "public",
          account_verified: "none",
        },
        {
          name: "Lionel Messi",
          nick: "leomessi",
          email: "messi@gmail.com",
          password: "493ebe3a91a10564a7b955d00534234e", // goat1234
          avatar_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Lionel_Messi_WC2022.jpg/640px-Lionel_Messi_WC2022.jpg",
          cover_url:
            "https://images.livemint.com/img/2023/02/02/1600x900/France-Soccer-League-One-0_1675297246432_1675297246432_1675297277565_1675297277565.jpg",
          account_privacy: "public",
          account_verified: "public_figure",
        },
        {
          name: "Neymar",
          nick: "ney",
          email: "neymay@gmail.com",
          password: "493ebe3a91a10564a7b955d00534234e", // goat1234
          avatar_url:
            "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt0248ffbcdc996f03/62ceea2eb90e3e0f6e7a6596/Neymar_PSG_Marseille_2021-22.jpg",
          cover_url:
            "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltfd6f22d9d0494112/638e44e494eb720b623aec72/GettyImages-1446977379.jpg",
          account_privacy: "private",
          account_verified: "public_figure",
        },
      ],
      { timestamps: false }
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
