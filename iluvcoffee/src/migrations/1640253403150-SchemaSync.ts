import {MigrationInterface, QueryRunner} from "typeorm";

export class SchemaSync1640253403150 implements MigrationInterface {
    name = 'SchemaSync1640253403150'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`coffee\` ADD \`description\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`coffee\` DROP COLUMN \`description\``);
    }

}
