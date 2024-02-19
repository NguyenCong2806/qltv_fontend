export default interface IfileServie {
    uploadingfile(file:File):Promise<boolean>;
}