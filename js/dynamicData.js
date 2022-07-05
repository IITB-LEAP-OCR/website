import {
    researchData,
    internData
} from './data.js'

const researchId = document.getElementById('faqs')

researchId.innerHTML = ''

for(let i = 0; i < researchData.length; i++) {

    var templateData = `<div>
    <div class="heading"><span>${researchData[i].heading}</span></div>
    <div class="faqs-content">
    <ul class="faq-list">`
    for(let j = 0; j < researchData[i].content.length; j++){
        templateData += `<li>
        <h4 class="faq-heading">${researchData[i].content[j].main}</h4>
        <p class="read faq-text">${researchData[i].content[j].subContent}
        </p>
        </li>`
    }
    templateData += `</ul>
        </div>
    </div>`
    researchId.innerHTML += templateData
}


$('.faq-heading').click(function() {
    $(this).parent('li').toggleClass('the-active').find('.faq-text').slideToggle();
});