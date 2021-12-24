import {MigrationInterface, QueryRunner} from "typeorm";

export class CoffeeRefactor1640249057575 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "ALTER TABLE `coffee` CHANGE COLUMN `name` `title` VARCHAR(255) NOT NULL ;",
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "ALTER TABLE `coffee` CHANGE COLUMN `title` `name` VARCHAR(255) NOT NULL ;",
        )
    }

}
