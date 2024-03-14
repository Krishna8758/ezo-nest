import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema({
    timestamps: true
})
export class Product {
    @Prop()
    itemImage: string;

    @Prop()
    itemName: string;

    @Prop()
    sellPrice: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Unit' })
    sellUnitId: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'ProductCategory' })
    itemCategory: string;

    @Prop()
    itemMrp: number;

    @Prop()
    purchasePrice: number;
    @Prop()

    acSalePrice: number;

    @Prop()
    nonAcSalePrice: number;

    @Prop()
    onlineDeliverySellPrice: number;

    @Prop()
    onlineSellPrice: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Tax' })
    taxId: string;

    @Prop()
    priceWithWithoutTax: boolean;

    @Prop()
    cess: number;

    @Prop()
    hsnasacCode: number;

    @Prop()
    itemCode: string;

    @Prop()
    barCode: string;

    @Prop()
    barCode1: string;

    @Prop()
    barCode2: string;

    @Prop()
    barCode3: string;

    @Prop()
    barCode4: string;

    @Prop()
    barCode5: string;

    @Prop()
    itemDescription: string;

    @Prop()
    inventoryType: InventoryType;

    @Prop()
    lowStockAlert: string;

    @Prop()
    productStorageLocation: string;

    @Prop()
    bulkPurchaseUnit: string;

    @Prop()
    retailSaleUnitPer1: number;

    @Prop()
    purchaseSaleUnitPer1: number;

    @Prop()
    expiryDate: string;

    @Prop()
    productOnlineShow: boolean;

    @Prop()
    quantity: number;

    @Prop()
    discountAmount: number;

    @Prop()
    discountPer: number;

    @Prop()
    billNote: string;

    @Prop({ default: false })
    isDeleted: boolean;
}

export enum InventoryType {
    product = 'product',
    service = 'service',
}

export const ProductSchema = SchemaFactory.createForClass(Product);