export class NgxDatatablePagination {
    rows: any = [];  
    totalCount: Number;  
    closeResult: string;  
    pageSize: number;
    pageNumber: number;
    size: Number;

    constructor() {
        this.pageSize = 100;
        this.pageNumber = 0;
        this.size = 10;
        this.totalCount = 0;
        this.rows = [];
    }
}
