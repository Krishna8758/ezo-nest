import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class BillingType {
    @Prop({ required: true })
    name: string;

    @Prop()
    percentage: string;

    @Prop({ default: false })
    isDeleted: boolean;
}

export const BillingTypeSchema = SchemaFactory.createForClass(BillingType);