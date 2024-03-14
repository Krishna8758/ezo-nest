import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class Tax {
    @Prop()
    name: string;

    @Prop()
    percentage: string;

    @Prop({ default: false })
    isDeleted: boolean;
}

export const TaxSchema = SchemaFactory.createForClass(Tax);