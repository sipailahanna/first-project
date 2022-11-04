export class ObjectManipulator {

    constructor(protected obj:object) {}

    public set(key: string | number, value: unknown): object {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get(key: string | number): object {
        return this.obj[key];
    }

    public delete(key: string | number): object {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): object {
        return this.obj;
    }
}