const detailSections = Array.from(document.getElementsByClassName('detail-section'));
const headerSections= Array.from(document.getElementsByClassName('main-section'));

console.log(detailSections)

const rightIndex = (index) => {
    return detailSections[index];
}


const detailShow = (e, index, header) => {
    detailSections.map((detail, detailIndex) => {
        if (detailIndex === index && detail.classList.contains('detail-section')) {
            detail.classList.remove('detail-section')
            
            
        } else if (detailIndex === index) {
            detail.classList.add('detail-section')
            
            
        }
    })
}

// const windowListener = () => {   
//     console.log(window.innerHeight) 
//     if (window.innerWidth < 616) {
//     headerSections.forEach ((headerSection, index) => {
//         // const details = rightIndex(index)
//        headerSection.addEventListener('click', (e) => detailShow(e, index, headerSection))
//     })
//     } else if(window.innerWidth > 615) {
//         headerSections.forEach ((headerSection, index) => {
//            headerSection.removeEventListener('click', detailShow)
//         })
//     }
// }


// window.addEventListener('resize', windowListener);

headerSections.forEach ((headerSection, index) => {
    // const details = rightIndex(index)
   headerSection.addEventListener('click', (e) => detailShow(e, index))
})














