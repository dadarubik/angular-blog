export class Post {
    private _title: string;
    private _content: string;
    private _loveIts: number;
    private _created_at: Date;

    constructor(title: string, content: string, loveIts: number, created_at: Date) {
        this.title = title;
        this.content = content;
        this.loveIts = loveIts;
        this.createdAt = created_at;
    }
    
    set title(title: string) {
        this._title = title;
    }
    get title() {
        return this._title;
    }
    set content(content: string) {
        this._content = content;
    }
    get content() {
        return this._content;
    }
    set loveIts(loveIts: number) {
        this._loveIts = loveIts;
    }
    get loveIts() {
        return this._loveIts;
    }
    set createdAt(createdAt: Date) {
        this._created_at = createdAt;
    }
    get createdAt() {
        return this._created_at;
    }
}
