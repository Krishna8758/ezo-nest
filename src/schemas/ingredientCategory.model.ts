import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class IngredientCategory {
    @Prop()
    name: string;

    @Prop({ default: false })
    isDeleted: boolean;
}

export const IngredientCategorySchema = SchemaFactory.createForClass(IngredientCategory);