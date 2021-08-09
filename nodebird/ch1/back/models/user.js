module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING(40),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
        },
        nickname: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
        }
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci', //korean 
    });
    User.associate = (db) => { //model 간의 관계
        db.User.hasMany(db.Post);
        db.User.hasMany(db.Comment);
        db.User.belongsToMany(db.Post, {through:'Like', as: 'Liked'});
        db.User.belongsToMany(db.User, {through: 'Follow', as: 'Followers', foreignKey: 'FollowingId'});
        db.User.belongsToMany(db.User, {through: 'Follow', as: 'Followings', foreignKey: 'FollowerId'});
    };
    return User;
};