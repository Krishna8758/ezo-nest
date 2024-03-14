import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema({
    timestamps: true
})
export class Party {
    @Prop()
    partyType: PartyType;

    @Prop()
    customerName: string;

    @Prop()
    phoneNumber: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Unit' })
    partyCategoryId: string;

    @Prop()
    billingAddress: string;

    @Prop()
    billingProvince: string;

    @Prop()
    billingPostalCode: number;

    @Prop()
    gstNumber: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref : 'BillingTerm'})
    billingTermId: string;
    
    @Prop({type: mongoose.Schema.Types.ObjectId, ref : 'BillingType'})
    billingTypeId: string;

    @Prop()
    dateOfBirth: string;

    @Prop()
    sendWhatsappAlert: boolean;

    @Prop()
    isThisTable: boolean;

    @Prop({ default: false })
    isDeleted: boolean;
}

export enum PartyType {
    customer = 'customer',
    supplier = 'supplier',
}

export const PartySchema = SchemaFactory.createForClass(Party);