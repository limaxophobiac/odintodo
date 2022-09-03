export default function todoFactory(doName){
    function logname(){
        console.log('implement this thing ' + doName);
    }
    return {doName, logname};
};