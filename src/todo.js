let idSeed = 0;

export default function todoFactory(doName, doProject = null, doDate, doDescrip, completed = false, doPriority = 0){
    function logname(){
        console.log('implement this thing ' + this.doName);
    }
    function setPriority(newPriority){
        this.doPriority = newPriority;
    }
    let id = idSeed;
    idSeed++;
    return {doName, doProject, doDate, doPriority, doDescrip, setPriority, id, logname, completed};
};