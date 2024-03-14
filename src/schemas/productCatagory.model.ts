import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class ProductCategory {
    @Prop()
    name: string;

    @Prop({ default: false })
    isDeleted: boolean;
}

export const ProductCategorySchema = SchemaFactory.createForClass(ProductCategory);