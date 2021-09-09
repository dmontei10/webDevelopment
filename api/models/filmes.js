module.exports = (sequelize, type) =>
  sequelize.define("filmes", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo_original:{
      type:type.STRING,
      allowNull: false,
    },
    titulo_portugues: {
      type:type.STRING,
      allowNull: false,
    },
    genero: {
      type: type.STRING,
      allowNull: false,
    },
    Ano_de_lancamento: {
      type: type.INTEGER,
      allowNull: false,
    },
    custo: {
      type: type.STRING,
      allowNull: false,
    },
    duracao_filmagem: {
      type: type.STRING,
      allowNull: false,
    },
    nome_estudio: {
      type: type.STRING,
      allowNull: false,
    },
    nome_realizador: {
      type: type.STRING,
      allowNull: false,
    },
    resetPasswordToken: type.STRING,
    resetPasswordExpires: type.DATE,
  });
