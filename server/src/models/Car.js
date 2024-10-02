module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Car', {
        car_name: DataTypes.STRING,
        year: DataTypes.INTEGER,
        price: DataTypes.DECIMAL,
        manufacturer: DataTypes.STRING,
        engine_type: DataTypes.STRING
    })
}
