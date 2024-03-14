import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema({
    timestamps: true
})
export class User {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Business' })
    businessTypeId: string;

    @Prop()
    businessName: string;

    @Prop()
    contactName: string;

    @Prop()
    contactNumber: number;

    @Prop()
    contactEmail: string;

    @Prop()
    gstNumber: string;

    @Prop()
    fssaiNumber: string;

    @Prop()
    licenseNumber: string;

    @Prop()
    businessAddress: string;

    @Prop()
    postalCode: string;

    @Prop()
    accountType: string;

    @Prop()
    bankAccNumber: string;

    @Prop()
    bankIFCECode: string;

    @Prop()
    accHolderName: string;

    @Prop()
    bankName: string;

    @Prop()
    upiId: string;

    @Prop()
    signature: string;

    @Prop()
    luckyImage: string;

    @Prop()
    businessLogo: string;

    @Prop()
    tableWiseBilling: boolean;

    @Prop()
    acArea: boolean;

    @Prop()
    noAcTable: number;

    @Prop()
    noNonAcTable: number;

    @Prop()
    bluetooth: boolean;

    @Prop()
    location: boolean;

    @Prop()
    barcodeScanner: boolean;

    @Prop()
    customerNameBilling: boolean;

    @Prop()
    printDetailsBilling: boolean;

    @Prop()
    staffName: string;

    @Prop()
    staffAccessType: AccHolderName;

    @Prop({ default: false })
    profileView: boolean;

    @Prop({ default: false })
    profileEdit: boolean;

    @Prop({ default: false })
    expenseCreate: boolean;

    @Prop({ default: false })
    expenseEdit: boolean;

    @Prop({ default: false })
    expenseView: boolean;

    @Prop({ default: false })
    expenseDelete: boolean;

    @Prop({ default: false })
    partyCreate: boolean;

    @Prop({ default: false })
    partyEdit: boolean;

    @Prop({ default: false })
    partyView: boolean;

    @Prop({ default: false })
    partyDelete: boolean;

    @Prop({ default: false })
    partyCategoryCreate: boolean;

    @Prop({ default: false })
    partyCategoryEdit: boolean;

    @Prop({ default: false })
    partyCategoryView: boolean;

    @Prop({ default: false })
    partyCategoryDelete: boolean;

    @Prop({ default: false })
    itemCreate: boolean;

    @Prop({ default: false })
    itemEdit: boolean;

    @Prop({ default: false })
    itemView: boolean;

    @Prop({ default: false })
    itemDelete: boolean;

    @Prop({ default: false })
    itemCategoryCreate: boolean;

    @Prop({ default: false })
    itemCategoryEdit: boolean;

    @Prop({ default: false })
    itemCategoryView: boolean;

    @Prop({ default: false })
    itemCategoryDelete: boolean;

    @Prop({ default: false })
    moneyInCreate: boolean;

    @Prop({ default: false })
    moneyInEdit: boolean;

    @Prop({ default: false })
    moneyInView: boolean;

    @Prop({ default: false })
    moneyInDelete: boolean;

    @Prop({ default: false })
    moneyOutCreate: boolean;

    @Prop({ default: false })
    moneyOutEdit: boolean;

    @Prop({ default: false })
    moneyOutView: boolean;

    @Prop({ default: false })
    moneyOutDelete: boolean;

    @Prop({ default: true })
    saleCreate: boolean;

    @Prop({ default: true })
    saleEdit: boolean;

    @Prop({ default: true })
    saleView: boolean;

    @Prop({ default: false })
    saleDelete: boolean;

    @Prop({ default: false })
    purchaseCreate: boolean;

    @Prop({ default: false })
    purchaseEdit: boolean;

    @Prop({ default: false })
    purchaseView: boolean;

    @Prop({ default: false })
    purchaseDelete: boolean;

    @Prop({ default: false })
    estimateCreate: boolean;

    @Prop({ default: false })
    estimateEdit: boolean;

    @Prop({ default: false })
    estimateView: boolean;

    @Prop({ default: false })
    estimateDelete: boolean;

    @Prop({ default: false })
    miseAdjustStock: boolean;

    @Prop({ default: false })
    miseViewKot: boolean;

    @Prop({ default: false })
    rawMaterialPurchaseEntryCreate: boolean;

    @Prop({ default: false })
    rawMaterialScrapEntryCreate: boolean;

    @Prop({ default: false })
    rawMaterialTransferEntryCreate: boolean;

    @Prop({ default: false })
    rawMaterialReturnEntryCreate: boolean;

    @Prop({ default: false })
    rawMaterialEodEntry: boolean;

    @Prop({ default: false })
    addRawMaterialCreate: boolean;

    @Prop({ default: false })
    addRawMaterialEdit: boolean;

    @Prop({ default: false })
    addRawMaterialDelete: boolean;

    @Prop({ default: false })
    rawMaterialPurchaseBulkEditCreate: boolean;

    @Prop({ default: false })
    dashboardViewSalesTotal: boolean;

    @Prop({ default: false })
    dashboardViewMoneyInsTotal: boolean;

    @Prop({ default: false })
    dashboardViewPurchasesTotal: boolean;

    @Prop({ default: false })
    dashboardViewMoneyOutsTotal: boolean;

    @Prop({ default: false })
    dashboardPartyPayableTotal: boolean;

    @Prop({ default: false })
    dashboardPartyReceivableTotal: boolean;

    @Prop({ default: false })
    dashboardItemLowStockCount: boolean;

    @Prop({ default: false })
    reportViewSalesReport: boolean;

    @Prop({ default: false })
    reportViewSaleWiseProfileAndLoss: boolean;

    @Prop({ default: false })
    reportViewPurchases: boolean;

    @Prop({ default: false })
    reportViewMoneyIn: boolean;

    @Prop({ default: false })
    reportViewMoneyOut: boolean;

    @Prop({ default: false })
    reportViewExpense: boolean;

    @Prop({ default: false })
    reportViewPartyLedger: boolean;

    @Prop({ default: false })
    reportViewPartyDetail: boolean;

    @Prop({ default: false })
    reportViewPartyReceivablePayable: boolean;

    @Prop({ default: false })
    reportViewStockSummary: boolean;

    @Prop({ default: false })
    reportViewItemSale: boolean;

    @Prop({ default: false })
    reportViewItem: boolean;

    @Prop({ default: false })
    reportViewItemDetail: boolean;

    @Prop({ default: false })
    reportDaybook: boolean;

    @Prop({ default: false })
    reportRawMaterialCost: boolean;

    @Prop({ default: false })
    reportRawMaterialConsumption: boolean;

    @Prop({ default: false })
    reportRawMaterialPurchase: boolean;

    @Prop({ default: false })
    deviceType: DeviceType;

    @Prop({ default: false })
    isMobile: IsMobile;

    @Prop({ default: false })
    deviceName: string;

    @Prop({ default: false })
    isStaff: boolean;

    @Prop({ default: false })
    isDeleted: boolean;
}

export enum AccHolderName {
    fullAccess = 'fullAccess',
    limitedAccess = 'limitedAccess',
}

export enum DeviceType {
    web = 'web',
    mobile = 'mobile',
}

export enum IsMobile {
    ios = 'ios',
    android = 'android',
}

export const UserSchema = SchemaFactory.createForClass(User);