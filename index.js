    const moreBtn = document.getElementById("moreBtn");
   
    // function onMoreBtnClicked() {
    //     let contentBox = document.getElementsByClassName("realization-content-box");
    //     if (moreBtn.innerText = "pokaż mniej") {
    //        for (let i=3; i<contentBox.length; i++){
    //             contentBox[i].style.display = 'none';
    //         }
    //         console.log('mniej'); 
    //     }  
    // } 
    
    function onMoreBtnClicked() {
        let contentBox = document.getElementsByClassName("realization-content-box");

        for (let i=3; i<contentBox.length; i++){
            contentBox[i].style.display = 'flex';
        }            
        moreBtn.innerText = "pokaż mniej";
        // moreBtn.setAttribute = ("onclick",  "onLessBtnClicked()");
    }

    

