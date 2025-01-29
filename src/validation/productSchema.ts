/*
* {
  "name": "string",
  "genericName": "string",
  "manufacturer": "string",
  "description": "string",
  "barcode": "string",
  "sku": "string",
  "price": 0,
  "costPrice": 0,
  "quantity": 0,
  "reorderPoint": 0,
  "expiryDate": "2025-01-22T10:08:39.702Z",
  "categoryId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "supplierId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "batchNumber": "string",
  "dosageForm": "TABLET",
  "strength": "string",
  "storage": "string",
  "prescriptionRequired": true
}
* */
import * as v from 'valibot';

export const ProductSchema = v.object({
  name: v.string(),
  genericName: v.string(),
  manufacturer: v.string(),
  description: v.string(),
  barcode: v.string(),
  sku: v.string(),
  price: v.number(),
  costPrice: v.number(),
  quantity: v.number(),
  reorderPoint: v.number(),
  // expiryDate: v.date(),
  categoryId: v.string(),
  supplierId: v.string(),
  batchNumber: v.string(),
  dosageForm: v.string(),
  strength: v.string(),
  storage: v.string(),
});
