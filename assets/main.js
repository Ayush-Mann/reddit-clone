let input = document.querySelector('.input');
let upVoteCount = document.querySelector('.upVoteCount');
let authorName = document.querySelector('.authorName');
let mainContainer = document.querySelector('.mainContainer');
let listArticle = document.querySelector('.listArticle');


let globalObj;

fetch("https://www.reddit.com/r/samsung.json")
    .then(res => res.json())
    .then(function (fetData) {
        globalObj = fetData.data.children;
        return fetData.data.children;
    })
    .then(posts => 
        
        // console.log(sample);
        // console.log('asasasdasdsa')
        posts.forEach(obj => {
            console.log(obj);
            







            // console.log(obj);
            // if(obj.data.)
            // const html = `<div class="container">
            //                 <div class="upVote">
            //                     <i class="fas fa-arrow-up"></i>
            //                     <span class="upVoteCount">${obj.data.ups}</span>
            //                     <i class="fas fa-arrow-down"></i>
            //                 </div>
            //                 <div class="indivCard">
            //                     <div class="indivTopText">
            //                         <span class = "outerSpanIndiv">Posted by u/<span class="authorName">${obj.data.author}</span></span>
            //                     </div>
            //                     <div class="indivMedText">
            //                         <span class = "textHighlight">${obj.data.link_flair_text}</span><span class = "titleCard">${obj.data.title}</span>
            //                     </div>
            //                     <div class="indivLowText">
            //                         <p class = "indivLowPara">${obj.data.selftext}</p>
            //                     </div>        
            //                 </div>
            //             </div>`

            // listArticle.innerHTML ="";
            let li = document.createElement('li');
            let leftSideDiv = document.createElement('div');
            leftSideDiv.classList.add('leftSideDiv');
            let container = document.createElement('div');
            container.classList.add('container');

            // div upVote
            let upvote = document.createElement('div');
            upvote.classList.add('upVote');

            let iUp = document.createElement('i')
            iUp.classList.add('fas','fa-arrow-up');
            let spanUpVote = document.createElement('span')
            spanUpVote.classList.add('upVoteCount');
            spanUpVote.textContent = obj.data.ups;
            let iDown = document.createElement('i')
            iDown.classList.add('fas', 'fa-arrow-down');

            // div indivCard

            let indivCard = document.createElement('div');
            indivCard.classList.add('indivCard');
                let indivTopText = document.createElement('div');
                indivTopText.classList.add('indivTopText');
                let outerSpanIndiv = document.createElement('span');
                outerSpanIndiv.textContent = "Posted by/u ";
                let authorName = document.createElement('span');
                authorName.classList.add('authorName')
                authorName.textContent = obj.data.author;
            
                let indivMedText = document.createElement('div');
                indivMedText.classList.add('indivMedText');
                let textHighlight = document.createElement('span');
                textHighlight.textContent = obj.data.link_flair_text;
                let titleCard = document.createElement('span');
                titleCard.classList.add('titleCard')
                titleCard.textContent = obj.data.title;

                let indivLowText = document.createElement('div');
                indivLowText.classList.add('indivLowText');
                let indivLowPara = document.createElement('p');
                indivLowPara.classList.add('indivLowPara');
                indivLowPara.innerText = obj.data.selftext;
                // let titleCard = document.createElement('span');
                // titleCard.classList.add('titleCard')
                // titleCard.textContent = obj.data.title;
            indivLowText.append(indivLowPara); 
                
    
            titleCard.append(textHighlight);
            indivMedText.append(titleCard)
           
            outerSpanIndiv.append(authorName)
            indivTopText.append(outerSpanIndiv)
            
           indivCard.append(indivTopText,indivMedText, indivLowText)
            upvote.append(iUp,spanUpVote, iDown)
            container.append(upvote, indivCard)
            li.append(leftSideDiv, container);
            listArticle.append(li);
           
        })
    
        
    )
       
    // })






            // const htmlAside = `<div class="container">
            //             <div class="upVote">
            //                 <i class="fas fa-arrow-up"></i>
            //                 <span class="upVoteCount">${obj.data.ups}</span>
            //                 <i class="fas fa-arrow-down"></i>
            //             </div>
            //             <div class="indivCard">
            //                 <div class="indivTopText">
            //                     <span>Posted by u/</span><span class="authorName">${obj.data.author}</span>
            //                 </div>
            //                 <div class="indivMedText">
            //                     <span class = "textHighlight">${obj.data.link_flair_text}</span><span class = "titleCard">${obj.data.title}</span>
            //                 </div>
            //                 <div class="indivLowText">
            //                     <p>${obj.data.selftext}</p>
            //                 </div>        
            //             </div>
            //         </div>`
            // const asideHtml;
        // mainContainer.innerHTML += html;    
    //     });
      
    // })

// function display(array){
//     console.log(array);
//     array.forEach(obj => {
//         console.log(obj);
//         const html = <div class="mainContainer">
//             <div class="upVote">
//                 <i class="fas fa-arrow-up"></i>
//                 <span class="upVoteCount">obj.ups</span>
//                 <i class="fas fa-arrow-down"></i>
//             </div>
//             <div class="indivCard">
//                 <span>Posted by u/</span><span class="authorName">obj.author</span>
//             </div>

//     </div>
//     });
// }


// fetData => globalObj = fetData.data.children