import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class PartyCategory {
    @Prop()
    name: string;

    @Prop({ default: false })
    isDeleted: boolean;
}

export const PartyCategorySchema = SchemaFactory.createForClass(PartyCategory);