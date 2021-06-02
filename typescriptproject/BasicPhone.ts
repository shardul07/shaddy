import mobile = require("./Mobile");
export class BasicPhone extends mobile.Mobile
{
    mobileType: string
    constructor(mobileId: number,mobileName: string,mobileCost: number,mobileType: string)
    {
        super(mobileId,mobileName,mobileCost)
        this.mobileType = mobileType 
        
    }

    public printMobileDetails()
    {
        console.log(this.mobileId);
        console.log(this.mobileName);
        console.log(this.mobileCost);
        console.log(this.mobileType);
    }
}