import { cst } from "../utils/common/constcommon";

export default class searchParameters {
  number: number = cst.pagenumber;
  totalnumber: number = cst.totalnumber;
  keywork?: string;
}
