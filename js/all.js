for (let i = 0; i < response.length; i++) {
    let name = response[i].name;
    let price = response[i].price;
    let image = response[i].image;
    $('#product-display .row').append(`<div class="col-12 col-sm-6 col-lg-3 p-0"><div class="card m-1 my-lg-0">
            <div class="p-3"><img src="images/${image}" class="card-img-top img-fluid" alt="" style="height:200px;object-fit:contain"></div>
            <div class="card-body p-3">
                <h5 class="font-weight-bold card-title text-center h6 mb-3">${name}</h5>
                <p class="text-center text-danger h6 mb-3">$ <span>${price}</span></p>
                <a href="#" class="add btn btn-block btn-info"><i class="fas fa-shopping-cart mr-2"></i>Buy Now</a>
            </div>
        </div></div>`)
}

// recalculate total price function
function recalculate() {
    let listPrice = 0;
    let listAmount = 0;
    let totalPrice = 0;
    // 
    $('tbody tr').each(function () {
        listPrice = $(this).find('.list-price').find('span').text();
        listAmount = $(this).find('.list-amount').val();
        totalPrice += listPrice * listAmount;
    })
    $('#total').val(totalPrice);
    $('#modal-total').text($('#total').val())
}

// add product
let total = 0
let image = '';
$('.add').click(function (e) {
    e.preventDefault();
    let tableName = $(this).closest('.card-body').find('h5').text();
    let tablePrice = $(this).closest('.card-body').find('span').text();
    image = $(this).closest('.card').find('img').attr('src').slice(7, -4);
    // 
    if ($('tbody').find('.' + image + '').length > 0) {
        console.log(image)
        console.log($('tbody').find('.' + image + '').length)
        let val = $('.' + image + '').find('.list-amount').val();
        let newVal = parseInt(val) + 1;
        $('.' + image + '').find('.list-amount').val(newVal);
    } else {
        console.log(image)
        console.log($('tbody').find('.' + image + '').length)
        $('tbody').append(`<tr class="${image}"><td>${tableName}</td><td class="list-price">$ <span>${tablePrice}</span></td><td><input class="list-amount" type="number" value="1"></td><td><a id="delete" href="#"><i class="fas fa-trash-alt text-danger"></i></a></td></tr>`)
    }
    // 
    recalculate();
})

// delete product
$(document).on('click', '#delete', function (e) {
    e.preventDefault();
    $(this).closest('tr').remove();
    // 
    recalculate();
});

// change number input 
$(document).on('change', 'input[type=number]', function () {
    $('input[type=number]').each(function () {
        if ($(this).val() < 1) {
            $(this).val(1);
        }
    })
    // 
    recalculate();
});

// modal total
$('#modal-total').text($('#total').val())

// CORS PROBLEM

        // $.ajax({
        //     type: "GET",
        //     url: "json/product.json",
        //     data: "json"
        // }).done(function (response) {

        //     // display json data
        //     for (let i = 0; i < response.length; i++) {
        //         let name = response[i].name;
        //         let price = response[i].price;
        //         let image = response[i].image;
        //         $('#product-display').append(`<div class="col-12 col-sm-6 col-lg-3 p-0"><div class="card m-1 my-lg-0">
        //    <div class="p-3"><img src="images/${image}" class="card-img-top img-fluid" alt="" style="height:200px;object-fit:contain"></div>
        //    <div class="card-body p-3">
        //        <h5 class="font-weight-bold card-title text-center h6 mb-3">${name}</h5>
        //        <p class="text-center text-danger h6 mb-3">$ <span>${price}</span></p>
        //        <a href="#" class="add btn btn-block btn-info"><i class="fas fa-shopping-cart mr-2"></i>Buy Now</a>
        //    </div>
        // </div></div>`)
        //     }

        //     // recalculate total price function
        //     function recalculate() {
        //         let listPrice = 0;
        //         let listAmount = 0;
        //         let totalPrice = 0;
        //         // 
        //         $('tbody tr').each(function () {
        //             listPrice = $(this).find('.list-price').find('span').text();
        //             listAmount = $(this).find('.list-amount').val();
        //             totalPrice += listPrice * listAmount;
        //         })
        //         $('#total').val(totalPrice);
        //         $('#modal-total').text($('#total').val())
        //     }

        //     // add product
        //     let total = 0
        //     let image = '';
        //     $('.add').click(function (e) {
        //         e.preventDefault();
        //         let tableName = $(this).closest('.card-body').find('h5').text();
        //         let tablePrice = $(this).closest('.card-body').find('span').text();
        //         image = $(this).closest('.card').find('img').attr('src').slice(7, -4);
        //         // 
        //         if ($('tbody').find('.' + image + '').length > 0) {
        //             console.log(image)
        //             console.log($('tbody').find('.' + image + '').length)
        //             let val = $('.' + image + '').find('.list-amount').val();
        //             let newVal = parseInt(val) + 1;
        //             $('.' + image + '').find('.list-amount').val(newVal);
        //         } else {
        //             console.log(image)
        //             console.log($('tbody').find('.' + image + '').length)
        //             $('tbody').append(`<tr class="${image}"><td>${tableName}</td><td class="list-price">$ <span>${tablePrice}</span></td><td><input class="list-amount" type="number" value="1"></td><td><a id="delete" href="#"><i class="fas fa-trash-alt text-danger"></i></a></td></tr>`)
        //         }
        //         // 
        //         recalculate();
        //     })

        //     // delete product
        //     $(document).on('click', '#delete', function (e) {
        //         e.preventDefault();
        //         $(this).closest('tr').remove();
        //         // 
        //         recalculate();
        //     });

        //     // change number input 
        //     $(document).on('change', 'input[type=number]', function () {
        //         $('input[type=number]').each(function () {
        //             if ($(this).val() < 1) {
        //                 $(this).val(1);
        //             }
        //         })
        //         // 
        //         recalculate();
        //     });

        //     // modal total
        //     $('#modal-total').text($('#total').val())

        // })
        // 

        // 