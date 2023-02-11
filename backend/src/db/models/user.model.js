const User = (sequelize, DATA_TYPE) => {
  const User = database.define(
    "users",
    {
      id: {
        type: DATA_TYPE.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DATA_TYPE.STRING(30),
        allowNull: false,
      },
      nick: {
        type: DATA_TYPE.STRING(11),
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: DATA_TYPE.STRING(30),
        allowNull: false,
      },
      password: {
        type: DATA_TYPE.STRING(50),
        allowNull: false,
      },
      avatarUrl: {
        type: DATA_TYPE.STRING,
        allowNull: false,
        field: "avatar_url"
      },
      coverUrl: {
        type: DATA_TYPE.STRING,
        allowNull: false,
        field: "cover_url"
      },
    },
    {
      timestamps: false,
    }
  );
  return User;
}


module.exports = User;
