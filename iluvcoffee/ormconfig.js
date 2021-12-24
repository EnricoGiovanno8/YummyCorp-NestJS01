module.exports = {
    type: 'mysql',
    host: 'db',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'postgres',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/migrations/*.js'],
    cli: {
        migrationsDir: 'src/migrations'
    },
}