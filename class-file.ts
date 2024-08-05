// SECOND EXPORT. EXPORT DEFUALTE IN THIS FILE:

import shape from "./interface-file";

class circle implements shape {
  name: string;
  area: string;
  calculateArea(): void {
    throw new Error("Method not implemented.");
  }
  constructor(name: string, area: string) {
    this.name = name
    this.area = area
  }
};
export default circle;
