export class CustomerProcess {
    public ID?: number;
    public parentID?: number;
    public parentName?:string;
    public childID?: number;
    public date?: Date;
    public processTypeID?: number;
    public processTypeName?: string;
    public advisingName?: string;
    public description?: string;
    constructor(
        ID?: number,
        parentID?: number,
        parentName?:string,
        childID?: number,
        date?: Date,
        processTypeID?: number,
        processTypeName?: string,
        advisingName?: string,
        description?: string,
        ) { }
}