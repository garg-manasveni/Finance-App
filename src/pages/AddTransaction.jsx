import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { FinanceContext } from "../context/FinanceContext";

const AddTransaction = () => {
    const { addTransaction } = useContext(FinanceContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        addTransaction({ ...data, amount: Number(data.amount) });
        reset();
    };

    return (
        <div>
            <div className="page-header">
                <h2>Add Transaction</h2>
                <p>Use this form to record every transaction with the required details.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <label>
                    <span>Title *</span>
                    <input
                        placeholder="Title"
                        {...register("title", { required: "Title is required" })}
                    />
                    {errors.title && <p className="field-error">{errors.title.message}</p>}
                </label>

                <label>
                    <span>Amount *</span>
                    <input
                        type="number"
                        placeholder="Amount"
                        {...register("amount", { required: "Amount is required", min: { value: 1, message: "Enter a valid amount" } })}
                    />
                    {errors.amount && <p className="field-error">{errors.amount.message}</p>}
                </label>

                <label>
                    <span>Category *</span>
                    <select {...register("category", { required: "Category is required" })}>
                        <option value="">Select category</option>
                        <option>Food</option>
                        <option>Travel</option>
                        <option>Rent</option>
                        <option>Shopping</option>
                        <option>Entertainment</option>
                        <option>Health</option>
                        <option>Utilities</option>
                        <option>Subscriptions</option>
                    </select>
                    {errors.category && <p className="field-error">{errors.category.message}</p>}
                </label>

                <label>
                    <span>Date *</span>
                    <input
                        type="date"
                        {...register("date", { required: "Date is required" })}
                    />
                    {errors.date && <p className="field-error">{errors.date.message}</p>}
                </label>

                <label>
                    <span>Transaction Type *</span>
                    <select {...register("type", { required: "Transaction type is required" })}>
                        <option value="">Select type</option>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                    {errors.type && <p className="field-error">{errors.type.message}</p>}
                </label>

                <label className="field-full">
                    <span>Notes</span>
                    <textarea
                        rows="4"
                        placeholder="Add a short note about this transaction"
                        {...register("notes")}
                    />
                </label>

                <button type="submit">Add Transaction</button>
            </form>
        </div>
    );
};

export default AddTransaction;