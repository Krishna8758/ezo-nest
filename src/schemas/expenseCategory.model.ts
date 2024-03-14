import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class ExpenseCategory {
    @Prop({ required: true })
    name: string;

    @Prop({ default: false })
    isDeleted: boolean;
}

export const ExpenseCategorySchema = SchemaFactory.createForClass(ExpenseCategory);