export default interface IfileServie {
    uploadingfile(file:File):Promise<boolean>;
    deletedfile(filename:string):Promise<boolean>;
    editingfile(file:File,filename:string):Promise<boolean>;
}