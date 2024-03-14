import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema({
    timestamps: true
})
export class MoneyIn {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Party' })
    partyId: string;

    @Prop({ required: true })
    receiptNo: string;

    @Prop({ required: true })
    moneyInDate: string;

    @Prop()
    amountReceived: string;

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

export const MoneyInSchema = SchemaFactory.createForClass(MoneyIn);