export class OrderHeader {
    Customer_ID: number;
    Order_No: string;
    Ref_ID:string;
    Shipment_To: string;
    Shipment_Mobile_No:string;
    Shipment_Address: string;
    Shipment_Area:string;
    Shipment_District: string;
    Billing_To:string;
    Total_Quantity: number;
    Billing_Mobile_No: string;
    Billing_Address:string;
    Billing_Area: string;
    Billing_District:string;
    Order_Date: Date;
    ValidTo_Date:Date;
    Gross_Amount: number;
    Discount_Amount:number;
    Net_Amount: number;
    Courier_Charge:number;
    Payment_Through: string;
    Total_payable_Amount:number;
    Paid_Amount: number;
    Balance_Amount:number;
}