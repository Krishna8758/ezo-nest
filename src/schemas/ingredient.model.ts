import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema({
    timestamps: true
})
export class Ingredient {
    @Prop()
    name: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Unit', required: true })
    unitId: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'IngredientCategory', required: true })
    ingredientCategoryId: string;

    @Prop()
    lowStockAlert: number;

    @Prop()
    description: string;

    @Prop({ default: false })
    isDeleted: boolean;
}

export const IngredientSchema = SchemaFactory.createForClass(Ingredient);