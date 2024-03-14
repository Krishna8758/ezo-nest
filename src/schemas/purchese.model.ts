import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema({
    timestamps: true
})
export class Purchase {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Party' })
    partyId: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
    productId: string;

    @Prop()
    quantity: number;

    @Prop()
    purchasePrice: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Unit' })
    unitId: number;

    @Prop()
    discountPer: number;

    @Prop()
    discountAmount: number;

    @Prop()
    billNote: string;

    @Prop()
    kotNote: string;

    @Prop()
    billNo: string;

    @Prop()
    billDate: string;

    @Prop()
    billingTerm: string;

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
    totalAmount: number;

    @Prop()
    amountPaid: number;

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
    transporterVehicleNo: string;

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

export const PurchaseSchema = SchemaFactory.createForClass(Purchase);