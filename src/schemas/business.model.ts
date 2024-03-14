import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsString } from "class-validator";

@Schema({
    timestamps: true
})
export class Business {
    @Prop()
    @IsString()
    name : string;

    @Prop()
    @IsString()
    image : string;

    @Prop({default : false})
    isDeleted : boolean;
}

export const BusinessSchema = SchemaFactory.createForClass(Business);