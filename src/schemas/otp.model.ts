import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema({
    timestamps: true
})
export class Otp {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    userId: string;

    @Prop()
    contactNumber: number;

    @Prop()
    otp: number;

    @Prop({ default: false })
    isDeleted: boolean;
}

export const OtpSchema = SchemaFactory.createForClass(Otp);