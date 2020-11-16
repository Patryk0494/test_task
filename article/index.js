const moreBtn = document.getElementById("moreBtn");
   
    function onMoreBtnClicked() {
        let contentBox = document.getElementsByClassName("realization-content-box");

        for (let i=3; i<contentBox.length; i++){
            contentBox[i].style.display = 'flex';
        }            
        moreBtn.innerText = "pokaż mniej";
    }
