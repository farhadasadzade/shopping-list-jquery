$('.shopping__header-btn').click(() => {
    $('.shopping__app-input').fadeToggle(500)
})


$(document).keypress(function(e){
    if(e.which === 13){
        
        if($('.shopping__app-input').val()[0] != ' ' && $('.shopping__app-input').val().length > 0){
            let itemName = $('.shopping__app-input').val()

            $('.shopping__app-list').append('<li class="shopping__app-item"><h3 class="shopping__app-itemName">' + itemName +'</h3><button class="shopping__delete-btn">-</button></li>')
        
            $('.shopping__app-input').val('')
        }
        
    }
})

$('.shopping__app-list').on('click', '.shopping__delete-btn', (function(e){
    e.stopPropagation();
    $(this).parent().remove()
}))