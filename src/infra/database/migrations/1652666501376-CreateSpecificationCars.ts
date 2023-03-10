import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from "typeorm";

export class CreateSpecificationCars1652666501376
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "specification_car",
                columns: [
                    { name: "car_id", type: "uuid" },
                    { name: "specification_id", type: "uuid" },
                    { name: "created_at", type: "timestamp", default: "now()" },
                ],
            })
        );

        //specification FK
        await queryRunner.createForeignKey(
            "specification_car",
            new TableForeignKey({
                name: "FKSpecificationCar",
                referencedTableName: "specification",
                referencedColumnNames: ["id"],
                columnNames: ["specification_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        );

        //cars FK
        await queryRunner.createForeignKey(
            "specification_car",
            new TableForeignKey({
                name: "FKCarSpecification",
                referencedTableName: "cars",
                referencedColumnNames: ["id"],
                columnNames: ["car_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            "specification_car",
            "FKCarSpecification"
        );
        await queryRunner.dropForeignKey(
            "specification_car",
            "FKSpecificationCar"
        );

        await queryRunner.dropTable("specification_car");
    }
}
