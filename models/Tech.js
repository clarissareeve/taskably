// Creating our Tech Model
module.exports = function (sequelize, DataTypes) {
    const Tech = sequelize.define('Tech', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },

    // Don't create time stamp, don't pluralize the table name
    {
        timestamps: false,
        tableName: 'Tech',
        freezeTableName: true
    });

    // Joins the Tech table with the Workorder table
    Tech.associate = function (models) {
        Tech.hasMany(models.Workorder, { foreignKey: 'techId' });
    };
    return Tech;
};