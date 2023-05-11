function change(){
    var randomcolor = Math.floor(Math.random() * 16777215).toString(16);
    var color = '#' + randomcolor
    document.body.style.background = color }
}
