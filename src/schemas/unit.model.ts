import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class Unit {
    @Prop()
    name: string;

    @Prop({ default: false })
    isDeleted: boolean;
}

export const UnitSchema = SchemaFactory.createForClass(Unit);