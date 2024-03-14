import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema({
    timestamps: true
})
export class MoneyOut {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Party'})
    partyId: string;

    @Prop({required : true})
    receiptNo: string;

    @Prop({required : true})
    moneyOutDate: string;

    @Prop()
    amountPaid: string;

    @Prop()
    paymentType: PaymentType;

    @Prop({ default: false })
    isDeleted: boolean;
}

export enum PaymentType {
    bank = 'bank',
    cash = 'cash',
    cheque = 'cheque',
}

export const MoneyOutSchema = SchemaFactory.createForClass(MoneyOut);