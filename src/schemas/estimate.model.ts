import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema({
    timestamps: true
})
export class Estimate {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Party', required: true })
    partyId: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true })
    productId: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'BillingTerm', required: true })
    billingTermId: string;

    @Prop({ required: true })
    quantity: number;

    @Prop()
    billNo: string;

    @Prop()
    billDate: number;

    @Prop()
    billingDueDate: string;

    @Prop()
    customerSupplierName: string;

    @Prop()
    deliveryState: string;

    @Prop()
    cashDiscountPer: number;

    @Prop()
    cashDiscountAmount: number;

    @Prop()
    serviceChargePer: number;

    @Prop()
    serviceChargeAmount: number;

    @Prop()
    totalAmount: number;

    @Prop()
    transportCharge: number;

    @Prop()
    purchaseOrderNo: string;

    @Prop()
    eWayNo: string;

    @Prop()
    eWayDate: string;

    @Prop()
    transporterName: string;

    @Prop()
    transportDistance: string;

    @Prop()
    deliveryLocation: string;

    @Prop()
    deliveryDate: string;

    @Prop()
    note: string;

    @Prop()
    termCondition: string;

    @Prop({ default: false })
    isDeleted: boolean;
}

export const EstimateSchema = SchemaFactory.createForClass(Estimate);