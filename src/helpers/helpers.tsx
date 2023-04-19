export const Helpers: any = {
    formatDate(date:Date) {
        var date = new Date(date)
        return date.toDateString()
    },
    formatTime(date:Date) {
        var time = new Date(date)
        let hours = time.getHours()
        let minutes = time.getMinutes()
        let seconds = time.getSeconds()
        var ampm = hours >= 12 ? 'pm' : 'am'
        return hours + ":" + minutes + " " + ampm
    },
    // dateOnly(date:Date) {
    //     return date.substring(0, 10)
    // },
    toEpochTime(time:Date) {
        return new Date(time).getTime()
    },
    upperCase(letter:any) {
        return letter.charAt(0).toUpperCase() + letter.slice(1)
    },
    dateTime(date:Date) {
        var date = new Date(date)
        var time = new Date(date)
        let hours = time.getHours()
        let minutes = time.getMinutes()
        let seconds = time.getSeconds()
        var ampm = hours >= 12 ? 'pm' : 'am'
        return date.toDateString() + " " + hours + ":" + minutes + " " + ampm
    },
    dateOnly(date:any) {
        return date.substring(0, 4)
    },
    yearOnly(date:any) {
        return date.substring(0, 10)
    },


    // delete_row(id:any) {
    //     console.log(id)
    //     document.getElementById("myTable").deleteRow(0);
    // }


}
