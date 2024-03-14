import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema({
    timestamps: true
})
export class Sale {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Party' })
    partyId: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
    productId: string;

    @Prop()
    quantity: number;

    @Prop()
    sellType: SellType;

    @Prop()
    paymentType: PaymentType;

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
    serviceChargePer: number;

    @Prop()
    serviceChargeAmount: number;

    @Prop()
    totalAmount: number;

    @Prop()
    amountReceived: number;

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

export enum SellType {
    hold = 'hold',
    parcel = 'parcel',
    kot = 'kot'
}

export enum PaymentType {
    bank = 'bank',
    cash = 'cash',
    cheque = 'cheque'
}

export const SaleSchema = SchemaFactory.createForClass(Sale);