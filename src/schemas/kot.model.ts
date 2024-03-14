import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema({
    timestamps: true
})
export class Kot {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Party' })
    partyId: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
    productId: string;

    @Prop()
    quantity: number;

    @Prop()
    sellPrice: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Unit' })
    unitId: string;

    @Prop()
    discountPer: number;

    @Prop()
    discountPerAmount: number;

    @Prop()
    billNote: string;

    @Prop()
    kotNote: string;

    @Prop({ default: false })
    isDeleted: boolean;
}

export const KotSchema = SchemaFactory.createForClass(Kot);