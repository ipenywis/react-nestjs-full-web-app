import { MigrationInterface, QueryRunner } from 'typeorm';

export class DatabaseCreation1622209954334 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createDatabase('yourcar', true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropDatabase('yourcar', true);
  }
}
