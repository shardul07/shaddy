export class Mobile{
    mobileId: number
    mobileName: string
    mobileCost: number

    constructor(mobileId: number,mobileName: string,mobileCost: number)
    {
        this.mobileId = mobileId
        this.mobileName = mobileName
        this.mobileCost = mobileCost
    }

    public printMobileDetails(){
        console.log("This is mobile");
    }
}