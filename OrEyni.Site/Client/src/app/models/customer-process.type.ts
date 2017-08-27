export class CustomerProcess {
    constructor(
        public idChild: number,
        public dateProcess?: Date,
        public advisingName?: string,
        public detail?: string,
        public parentsName?: string,
        public parentsId?: number,
        public processType?: number) {
    }
}