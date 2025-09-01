
import { Borrower } from "../types/borrower.type";
import { ApiBorrower, ComponentStatus, STATUS_MAP } from "../types/borrower.pipeline.type";
import { fmtAmount } from "./format.utils";

export const mapStatusToComponentStatus = (apiStatus: string): ComponentStatus =>
  STATUS_MAP[apiStatus?.toLowerCase?.()] ?? 'New';



export const transformBorrower = (apiBorrower: ApiBorrower): Borrower => ({
  id: apiBorrower.id,
  name: apiBorrower.name,
  status: mapStatusToComponentStatus(apiBorrower.status),
  product: apiBorrower.loan_type,
  variant: 'Fixed', 
  amount: fmtAmount(apiBorrower.amount),
});