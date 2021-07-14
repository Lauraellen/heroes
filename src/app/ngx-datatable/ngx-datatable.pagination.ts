export class NgxDatatablePagination {
    rows: any = [];  
    totalCount: Number;  
    closeResult: string;  
    pageSize: Number;
    pageNumber: Number;
    size: Number;

    constructor() {
        this.pageSize = 10;
        this.pageNumber = 0;
        this.size = 10;
        this.totalCount = 0;
        this.rows = [];
    }
}
