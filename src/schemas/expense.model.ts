import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema({
    timestamps: true
})
export class Expense {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Party', required: true })
    partyId: string;

    @Prop({ required: true })
    billNumber: string;

    @Prop({ required: true })
    billDate: string;

    @Prop({ required: true })
    customerName: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'ExpenseCategory', required: true })
    ExpenseCategoryId: string;

    @Prop()
    totalAmount: number;

    @Prop()
    amountPaid: string;

    @Prop()
    note: string;

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

export const ExpenseSchema = SchemaFactory.createForClass(Expense);