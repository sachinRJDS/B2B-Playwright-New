import { test, expect } from '@playwright/test';
import excelJS from 'exceljs';

test('read data from Excel file', async ({ page }) => {
  const book=new excelJS.Workbook()
  book.getWorksheet("").getRow().getCell().toString()
});
